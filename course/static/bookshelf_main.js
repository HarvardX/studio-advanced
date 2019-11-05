let course_structure = [
  {
    Difficulty: [
      {
        Easy: [
          {
            icon: '',
            text: '',
            location: 'pageNumber1'
          },
          {
            icon: '',
            text: '',
            location: 'pageNumber2'
          },
          {
            icon: '',
            text: '',
            location: 'pageNumber3'
          },
          {
            icon: '',
            text: '',
            location: 'pageNumber4'
          },
          {
            icon: '',
            text: '',
            location: 'pageNumber5'
          },
          {
            icon: '',
            text: '',
            location: 'pageNumber6'
          }
        ]
      },
      {
        Medium: [
          {
            icon: '',
            text: '',
            location: 'pageNumber11'
          },
          {
            icon: '',
            text: '',
            location: 'pageNumber12'
          },
          {
            icon: '',
            text: '',
            location: 'pageNumber13'
          },
          {
            icon: '',
            text: '',
            location: 'pageNumber14'
          },
          {
            icon: '',
            text: '',
            location: 'pageNumber15'
          },
          {
            icon: '',
            text: '',
            location: 'pageNumber16'
          }
        ]
      },
      {
        Hard: [
          {
            icon: '',
            text: '',
            location: 'pageNumber21'
          },
          {
            icon: '',
            text: '',
            location: 'pageNumber22'
          },
          {
            icon: '',
            text: '',
            location: 'pageNumber23'
          },
          {
            icon: '',
            text: '',
            location: 'pageNumber24'
          },
          {
            icon: '',
            text: '',
            location: 'pageNumber25'
          },
          {
            icon: '',
            text: '',
            location: 'pageNumber26'
          }
        ]
      }
    ]
  },
  {
    Prerequisites: [
      {
        None: [
          {
            icon: '',
            text: '',
            location: 'pageNumber31'
          },
          {
            icon: '',
            text: '',
            location: 'pageNumber42'
          },
          {
            icon: '',
            text: '',
            location: 'pageNumber53'
          }
        ]
      },
      {
        HTML: [
          {
            icon: '',
            text: '',
            location: 'pageNumber61'
          },
          {
            icon: '',
            text: '',
            location: 'pageNumber72'
          },
          {
            icon: '',
            text: '',
            location: 'pageNumber83'
          }
        ]
      },
      {
        Javascript: [
          {
            icon: '',
            text: '',
            location: 'pageNumber111'
          },
          {
            icon: '',
            text: '',
            location: 'pageNumber112'
          },
          {
            icon: '',
            text: '',
            location: 'pageNumber113'
          }
        ]
      },
      {
        Python: [
          {
            icon: '',
            text: '',
            location: 'pageNumber111'
          },
          {
            icon: '',
            text: '',
            location: 'pageNumber112'
          },
          {
            icon: '',
            text: '',
            location: 'pageNumber113'
          }
        ]
      }
    ]
  },
  {
    Length: [
      {
        Hours: [
          {
            icon: '',
            text: '',
            location: 'pageNumber11'
          },
          {
            icon: '',
            text: '',
            location: 'pageNumber12'
          },
          {
            icon: '',
            text: '',
            location: 'pageNumber13'
          }
        ]
      },
      {
        'A day': [
          {
            icon: '',
            text: '',
            location: 'pageNumber23'
          },
          {
            icon: '',
            text: '',
            location: 'pageNumber24'
          },
          {
            icon: '',
            text: '',
            location: 'pageNumber13'
          }
        ]
      },
      {
        'A week': [
          {
            icon: '',
            text: '',
            location: 'pageNumber1'
          },
          {
            icon: '',
            text: '',
            location: 'pageNumber2'
          },
          {
            icon: '',
            text: '',
            location: 'pageNumber3'
          },
          {
            icon: '',
            text: '',
            location: 'pageNumber13'
          }
        ]
      },
      {
        'Do this during prep': [
          {
            icon: '',
            text: '',
            location: 'pageNumber1'
          },
          {
            icon: '',
            text: '',
            location: 'pageNumber2'
          },
          {
            icon: '',
            text: '',
            location: 'pageNumber3'
          },
          {
            icon: '',
            text: '',
            location: 'pageNumber13'
          }
        ]
      },
      {
        'Operating procedures': [
          {
            icon: '',
            text: '',
            location: 'pageNumber1'
          },
          {
            icon: '',
            text: '',
            location: 'pageNumber2'
          },
          {
            icon: '',
            text: '',
            location: 'pageNumber3'
          },
          {
            icon: '',
            text: '',
            location: 'pageNumber13'
          }
        ]
      }
    ]
  },
  {
    Alphabetical: [
      {
        'A-M': [
          {
            icon: '',
            text: '',
            location: 'pageNumber31'
          },
          {
            icon: '',
            text: '',
            location: 'pageNumber42'
          },
          {
            icon: '',
            text: '',
            location: 'pageNumber53'
          }
        ]
      },
      {
        'N-Z': [
          {
            icon: '',
            text: '',
            location: 'pageNumber61'
          },
          {
            icon: '',
            text: '',
            location: 'pageNumber72'
          },
          {
            icon: '',
            text: '',
            location: 'pageNumber83'
          }
        ]
      }
    ]
  }
];

function getColor(n) {
  // d3 chromatic color scales, schemeCategory10
  let colortext = '7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666';
  return '#' + colortext.slice((n % 9) * 6, (n % 9) * 6 + 6);
}

// From David Baron on StackOverflow
// https://stackoverflow.com/questions/4571813/why-is-this-javascript-function-so-slow-on-firefox
function getEmSize(el) {
  return Number(getComputedStyle(el[0], '').fontSize.match(/(\d+)px/)[1]);
}

// Add major categories in their divs to the screen
function addCategories(nav) {
  'use strict';

  let height = 0;

  course_structure.forEach(function(e, index) {
    let div = $('<div>');
    let span = $('<span>');
    let text = Object.keys(e)[0];

    div.addClass('category');
    div.css('background-color', getColor(index));
    span.addClass('sideways');
    span.text(text);
    div.append(span);
    nav.append(div);

    // half-assing the height from string length and font size.
    height = Math.max(height, getEmSize(div) / 2);
  });

  $('.category').css('height', height + 'em');
}

// Add subcategories next to the major category.
function addSubCategories(nav, catname) {
  'use strict';
  console.log(catname);

  // Continue here next time.
  let subcats = course_structure.find(e => Object.keys(e)[0] === catname);
  let subnavbox = $('<div>');
  let width = 0;

  subnavbox.addClass('subnavbox');
  nav.append(subnavbox);

  subcats[catname].forEach(function(sc, index) {
    let div = $('<div>');
    let span = $('<span>');
    let text = Object.keys(sc)[0];

    div.addClass('subcat');
    div.css('background-color', getColor(index));
    div.css('display', 'none');
    span.text(text);
    div.append(span);
    subnavbox.append(div);

    width = Math.max(width, getEmSize(div) / 1.8);
  });

  $('.subcat').css('width', width + 2 + 'em');
  $('.subcat').show('slide', 500);
  $('.category').css('z-index', 10);

  // If they click on the category, go back.
  $('.category').off('click tap');
  $('.category').on('click tap', function(e) {
    let that = this;
    console.log('here?');
    $('.subcat').hide('slow', function() {
      $('.subcat').remove();
    });
    $('.iconbox').hide('slow', function() {
      $('.iconbox').remove();
    });
    setTimeout(function() {
      $('.category').off('click tap');
      addListeners();
      $(that)
        .siblings()
        .show('slow');
    }, 600);
  });
}

function addNavIcons(nav, catname, subcatname) {
  'use strict';
  console.log(catname, subcatname);
  console.log(course_structure);

  // Continue here next time.
  let icons = course_structure
    .find(e => Object.keys(e)[0] === catname)
    [catname].find(e => Object.keys(e)[0] === subcatname);
  console.log(icons);

  let iconbox = $('<div>');
  iconbox.addClass('iconbox');
  iconbox.css('display', 'none');
  $('.subnavbox').append(iconbox);

  icons[subcatname].forEach(function(link, index) {
    let div = $('<div>');
    let span = $('<span>');
    let contents = $(
      '<img src="placeholder_' + Math.floor(Math.random() * 16 + 1) + '.png"/>'
    );

    div.addClass('icon');
    div.css('background-color', getColor(index));
    span.append(contents);
    div.append(span);
    iconbox.append(div);
  });

  iconbox.show('slide', { direction: 'up' }, 500);

  // If they click on the subcategory, go back.
  $('.subcat').off('click tap');
  $('.subcat').on('click tap', function(e) {
    $('.iconbox').hide('slow', function() {
      $('.iconbox').remove();
    });
    $(this)
      .siblings()
      .show('slow');
    $('.subcat').off('click tap');
    $('.subcat').on('click tap', function() {
      let subcatname = $(this).text();
      $(this)
        .siblings()
        .hide('slow');
      setTimeout(function() {
        addNavIcons(nav, catname, subcatname);
      }, 600);
    });
  });
}

function addListeners() {
  'use strict';

  let nav = $('#stux_navbox');

  // When something is clicked, hide its siblings and bring in its children.
  $('.category').on('click tap', function() {
    $(this)
      .siblings()
      .hide('slow');
    let catname = $(this).text();
    setTimeout(function() {
      addSubCategories(nav, catname);
      $('.subcat').on('click tap', function() {
        let subcatname = $(this).text();
        $(this)
          .siblings()
          .hide('slow');
        setTimeout(function() {
          addNavIcons(nav, catname, subcatname);
        }, 600);
      });
    }, 600);
  });
}

$(document).ready(function() {
  'use strict';

  console.log('working');
  console.log(course_structure);

  let nav = $('#stux_navbox');
  let resetbutton = $('#stux_reset_navbox');

  resetbutton.on('click tap', function() {
    nav.empty();
    addCategories(nav);
    addListeners();
  });

  // Set up the stage.
  addCategories(nav);
  addListeners();
});
