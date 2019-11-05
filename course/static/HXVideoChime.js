var HXVideoChime = function(hxChimeOptions) {
  // Declaring semi-global variables for later use.
  // HXChimeTimer is defined in HTML on the page.
  var video = $('.video');
  var time;
  var sortedTimer = HXChimeTimer.slice().sort(timeCompare);
  var chimeTimer = [];
  var chimeText = [];
  var chimeSound = [];
  var lastChime = [];

  chimeTimer[vidnumber].sort(timeCompare); // Uses a custom function to sort by time.

  logThatThing('Video chimes starting');

  // Mark each video and set of controls with a class and anchor
  // that will let us handle each of them separately.
  // Numbering from 1 to make things easier for course creators.
  video.each(function(index) {
    $(this).addClass('for-video-' + (index + 1));
  });
  video.each(function(index) {
    $(this)
      .parent()
      .prepend('<a name="video' + (index + 1) + '"></a>');
  });
  vidWrappers.each(function(index) {
    $(this).addClass('for-video-' + (index + 1));
  });

  video.each(function(vidnumber) {
    var thisVid = $(this);
    setUpLists(vidnumber);

    // Check to see whether the video is ready before continuing.
    var waitForVid = setInterval(function() {
      try {
        var state = thisVid.data('video-player-state'); // Sometimes this fails and that's ok.

        if (typeof state.videoPlayer !== 'undefined') {
          if (
            typeof state.videoPlayer.player.getPlayerState() !== 'undefined'
          ) {
            console.log('video data loaded');
            mainLoop(state, vidnumber);
            clearInterval(waitForVid);
          }
        }
      } catch (err) {
        console.log('waiting for video ' + (vidnumber + 1) + ' to be ready');
      }
    }, 200);
  });

  // Make a list of all the times where there would be chimes.
  function setUpLists(vidnumber) {
    chimeText[vidnumber] = sortedTimer.map(e => e.title);
    chimeTimer[vidnumber] = sortedTimer.map(e => hmsToTime(e.time));
    chimeSounds[vidnumber] = sortedTimer.map(e => e.sound);

    // Write a list on-screen.
    vidWrappers.nextAll('#hx-video-chimebox').each(function() {
      let that = this;
      chimeText.forEach(function(e, i) {
        $(that).append(
          chimeTimer[vidnumber] + ': ' + chimeText[vidnumber] + '<br/>'
        );
      });
    });
  }

  // Every 500 ms, check to see whether we're going to show a new link.
  function mainLoop(state, vidnumber) {
    var timeChecker = setInterval(function() {
      try {
        state.videoPlayer.update(); // Forced update of time. Required for Safari.
      } catch (err) {
        // If this fails, shut down this loop.
        // It's probably because we moved to a new tab.
        clearInterval(timeChecker);
      }
      time = state.videoPlayer.currentTime;

      // If we should be showing a link:
      if (currentLink(time, vidnumber) != -1) {
        // ...and there's something being shown,
        if (lastChime[vidnumber]) {
          // but it's not the one that should be shown,
          if (currentLink(time, vidnumber) != currentLinkShown(vidnumber)) {
            // then hide it.
            hideLink(currentLinkShown(vidnumber), vidnumber);
          }
        }

        // ...and there's nothing being shown,
        else {
          // then show the one we should be showing.
          playChime(currentLink(time, vidnumber), vidnumber);
        }

        // If we should NOT be showing a link,
      } else {
        // ...and one is showing, hide it.
        if (currentLinkShown(vidnumber) != -1) {
          hideLink(currentLinkShown(vidnumber), vidnumber);
        }
      }
    }, 500);
  }

  // Show the link on the video. While we're at it, bold the one in the list too.
  function playChime(n, vidnumber) {
    console.log('showing link ' + (n + 1) + ' for video ' + (vidnumber + 1));
    $('#hx-vidchimes-live-' + (vidnumber + 1) + ' #link-card-live-' + n).show(
      hxChimeOptions.effect,
      hxChimeOptions.show,
      hxChimeOptions.speed
    );

    chimeTimer[vidnumber][n].shown = true;
    lastChime[vidnumber] = true;
  }

  // Hide the link on the video and un-bold the one on the list.
  function hideLink(n, vidnumber) {
    console.log('hiding link ' + (n + 1) + ' for video ' + (vidnumber + 1));
    $('#hx-vidchimes-live-' + (vidnumber + 1) + ' #link-card-live-' + n).hide(
      hxChimeOptions.effect,
      hxChimeOptions.show,
      hxChimeOptions.speed
    );
    chimeTimer[vidnumber][n].shown = false;
    lastChime[vidnumber] = false;
  }

  // Which link SHOULD we be showing right now? Return -1 if none.
  // If we should be showing several, returns the first one.
  function currentLink(t, vidnumber) {
    var linkNumber = -1;

    for (var i = 0; i < chimeTimer[vidnumber].length; i++) {
      if (
        t >= chimeTimer[vidnumber][i].time &&
        t < chimeTimer[vidnumber][i].time + hxChimeOptions.hideLinkAfter
      ) {
        linkNumber = i;
        break;
      }
    }
    return linkNumber;
  }

  // Which link are we ACTUALLY showing right now? Return -1 if none.
  // If we're showing several, returns the first one.
  function currentLinkShown(vidnumber) {
    var linkNumber = -1;

    for (var i = 0; i < chimeTimer[vidnumber].length; i++) {
      if (chimeTimer[vidnumber][i].shown) {
        linkNumber = i;
        break;
      }
    }
    return linkNumber;
  }

  // This is a sorting function for my timer.
  function timeCompare(a, b) {
    if (a.time < b.time) return -1;
    if (a.time > b.time) return 1;
    return 0;
  }

  return true;
};
