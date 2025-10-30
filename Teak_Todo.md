# TODO for Teak Revision

## General Notes

- Take the titles in this doc as the canonical ones. If the pages in the course have different titles, change them to these.
- ✅ Drop in new versions of [hx.js, hx.css, and helper files](https://github.com/Colin-Fredericks/hx-js).
- May be worth renaming the Summary pages to include the particular topic, just because it's the first thing people see on the page.

## Tabs

### Course page

- CSS in the Update section isn't working - the images should be smaller and arranged in a square.
- The dots are missing
- The xblock URLs aren't working, which is generally going to happen when the course moves servers anyway.
- Take into account the fold (which wasn't there in the old days).

### Links page

- We should probably move to a more curated sharing option for the links page, given that we're finally experiencing spam on edx.org.

### Key page

- Looks good!

## Welcome

### Welcome to Studio Advanced

#### Welcome and Survey

- Polls seem ok. Check to see whether the emojis still work for accessibility purposes.

#### Navigation

- Not a huge fan of a single line of dots and squares; maybe we can switch this to two lines and more distinct shapes?

### Navigation pages

#### Advanced Course Planning

- Come back to these for revision once we've pruned the sections they refer to.
- Oh hey where are the originals for these videos? We should put those somewhere that Open edX can own them.
- The videos also appear to not be loading.

#### Improved Operations

#### Short Projects

#### Long Projects

### Important pre-course survey

#### Pre-course Survey

- Ditch or replace this. This is from HarvardX, and we don't need to gather peoples' data.

## 1 Advanced Course Planning

### 1.0 - Intro to Planning

(This is identical to the Advanced Course Planning navigation page and should stay that way.)

### 1.1 - Creating a style sheet

- **Summary:**
  - Switch references from "edX" to "Open edX"
  - Add notes about course-wide CSS
  - Why are the icons so huge?
- **Why bother?**
  - Make a prettier flowchart.
- **Demo:**
  - Put things closer together so you can see the changes when you make them, rather than having to scroll back and forth.
- **Code:**
  - Is CSS still "sticky"? I think this got fixed at some point.
- **Setup:**
  - Nicer flowchart
  - It's not named "Files & Uploads" any more.
  - Add notes for course-wide CSS.
  - Add suggested classes for targeting "just in Studio" or "just on live".
- **Test:**
  - Add course-wide CSS notes

### 1.2 - Selecting advanced problem types

- **Summary:**
  - Harvard currently owns the JSInput Repo. (Transfer to Axim?)
- **Demo:**
  - "Could not format HTML" on 4 out of 5 items here. Not great. Fix that. (Maybe just missing XBlocks? How do we design this page to account for deployments that don't have all of the blocks needed? Probably just a ToC with some extra details at the top.)
- **Code:**
  - Update the zip file.
  - Check to make sure the links are current.
- **Test:**
  - Check accessibility on emoji poll.

### 1.3 - Using Grading Libraries

- **Summary:** ok
- **Rationale:** ok
- **Code:**
  - May be worth noting that you can't actually delete the `python_lib.zip` file - not that it really matters, but it sure can be confusing.
- **Test:** ok
- **Application:** ok

### 1.4 - Selecting interactives

- **Summary:** ok
- **Why Bother?**
  - Make a nicer flowchart
- **Examples:** ok
- **Test:** ok

### 1.5 - Designing alternative navigation

- **Summary:**
- **Rationale:**
- **Demos and Analysis:**
  - The Cute Outline icon set's page isn't around any more. Will need to replace, not that it particularly matters what exact icons we use.
  - In the analysis for the tree: Does the "map area alt attributes" link go to the right place?
- **Test:** ok
- **Application:**
  - Quantum World is no more.
  - Fantastic Places is archived.

### 1.6 - Designing content experiments

- **Summary:** ok
- **Demos and Analysis:**
  - Nicer flowchart
- **Code:**
  - New docs link?
  - May need new screenshots soon.
  - Insights note might be replaced by Aspects soon
- **Test:** ok

### 1.7 - Handling feature-based enrolment

- **Summary:**
  - Rewrite for less edX.org and more Open edX. (Don't bother shifting to 2U references.)
- **The Details:**
  - Can safely remove "older course" notes.
  - New lock icon screenshot.
  - New docs link?
- **Rationale:** ok
- **Planning for FBE:**
  - Rewrite for less edX.org and more Open edX.
  - The "course length" problem isn't a problem any more.
  - Lock icon reference
- **Test:** ok

### 1.8 - Setting up cohorts

- **Summary:** ok
- **Setup:** 
  - Check to make sure this is all still accurate.
  - Tighten up the wording.
- **Demo:**
  - Will need to be re-recorded for the new prettier interface.
- **Process detail:**
  - Improved flowchart
  - Does it have useful warnings or doesn't it?
- **Test:**
  - Can't cohort discussion components any more, because there aren't any.

### 1.9 - Designing a survey

- **Summary:**
  - "No going back" is a little dramatic. Better to note that changing surveys is tantamount to throwing out your old data.
- **Why bother?**
  - Better flowchart
- **Planning and design:** ok
- **Setup:**
  - Better flowchart
  - Add newer survey providers, remove any defunct ones
- **Test:** ok

## 2 - Improved Operating Procedures

### 2.0 - Intro to Operations

### 2.1 - Writing Better HTML

- **Summary:** ok
- **Why bother:**
  - Check to see if this is still how it works.
  - See if it assumes italic is em and bold is strong.
- **Good practice:**
  - Add notes about semantic tags
  - Add screenshot of links from a page that only links the word "here"
- **Test:** ok

### 2.2 - Tone back the CSS

- **Summary:** ok
- **Demo:**
  - Remove the asterisks around "could"
  - Make the "press escape to escape" bit more prominent
- **Analysis:**
  - "test it out on **multiple** pages"
  - New screenshot of top of page
  - Are things still "sticky"?
- **Test:**
  - I think it's "division" rather than "divider" for div

### 2.3 - Writing Better Basic Problems

- General note: Bring in some items from Susan's "how to write better MCQs". Include it if she's ok with that.
- **Summary:** ok
- **Why bother:**
  - "hints and prompts" - I think we want to say something other than "prompt" here. What did we mean?
  - Using a "not" question right away? Colin, what were you thinking?
  - Make sure the code snippets in the Partial Credit box get caught by Prism.
  - We mention numerical earlier; might be worth adding a bit here about the usefulness of answer ranges.
- **Code:**
  - Aww, the Simple Question Editor markup. Pour one out. Need to remove this part in favor of the new visual editors.
- **Test:** ok
  - Replace basic problem markup question

### 2.4 - Batch processing your course with Python

- **Summary:** ok
- **Setup / Why bother:** ok
- **Demo:**
  - Files & Uploads --> Files
  - Remind people that importing a course overwrites an existing one
- **Code:**
  - Make sure instructions are good on all scripts in hx-xml repo
- **Test:**
  - Are the instructions up to date?

### 2.5 - Linking your videos

- We really need to come up with a better phrase for this. 
- **Summary:**
- **Demo:**
  - Re-test for accessibility.
- **Code:**
  - Oh god jQuery UI. Can we replace that without making it a disaster?
- **Test:** ok
- **Application:**
  - Can you actually do a locator map, or is it limited to 25px tall?

### 2.6 - Anti-Cheating Measures

- **Summary:**
  - Remove "verified" from "verified certificate" (in fact, do that course-wide)
- **Analysis:**
  - Add an AI-related section, plus Harvard's collaboration/AI policy
  - "Even a verified certificate" --> "Even a verification service"
- **Code:**
  - ToC needs an opaque background (background="white" will work with DarkReader). Also, give it another surrounding div so it can have a white border that provides some whitespace between it and the things behind it.
  - Replace simple markup editor example
  - Check "content library" comment at bottom against upcoming functionality
- **Test:**
  - Replace reference to markdown editor

## 3 - Short Projects

### 3.0 - Intro to Short Projects, Incomplete

- Seems fine

### 3.1 - Interactive walkthroughs

- **Summary:**
  - ok
- **Demo:**
  - This needs to be completely reworked. It no longer highlights anything helpful.
- **Code:**
  - ok
- **Application:**
  - ok
  - maybe touch up the language a little
- **Test:**
  - Check to see whether the Homepage tab is actually targeted successfully this way

### 3.2 - Beautify your landing pages

- **Summary:**
  - Maybe not "skillz"
- **Rationale:**
  - Does the course outline still show or is this outdated info?
  - Elaborate on things a little more here
- **Setup and planning:**
  - ok
- **Demo:**
  - Fix up the iframe. In fact, see if we can make it open from the local server rather than pulling from whatever single server we pick.
  - I don't completely love the use of the slider here.
- **Test:**
  - Do things still disappear after 3 weeks?

### 3.3 - Clickable image map

- **Summary:**
  - Not that it just happens here, but can I figure out a way to attach the "external link" icon to the word before it so it doesn't wrap? A zero-width non-breaking character or something?
  - See if I can find a new image map site. image-maps.com feels kinda sketchy at the moment.
- **Demo:**
  - This is not working properly when I rescale the window.
- **Code:**
  - I can do better than "first class in the list" these days.
  - I should maybe also use something that's updated regularly, unlike jQuery UI.
- **Test:**
  - There's a "You can add an optional tip or note related to the prompt like this." note that should be removed.
- **Application:**
  - Maybe explicitly tell people to click on the linked bits

### 3.4 - Image carousel

- **Summary:**
  - ok
- **Demo:**
  - Linked carousels aren't working.
- **Code:**
  - Top slider doesn't show at first.
  - Also I've soured on the icons.
- **Test:**
  - ok

### 3.5 - EdX advanced settings

This needs an overhaul from top to bottom. Many of these have moved, and more moves are planned. Might be worth "pinning" this to a specific version of Open edX.

### 3.6 - Open Response Assessments

- **Summary:**
  - ok
- **Rationale:**
  - ok
- **Demo:**
  - ok
- **Extra Details:**
  - Add flex grading and pin-to-date options
  - Switch from anti-Word advice to anti-PDF advice
  - New link for [Peer Instruction](https://docs.openedx.org/en/latest/educators/concepts/exercise_tools/about_peer_instruction.html)
  - [New link for ORA best practices](https://docs.openedx.org/en/latest/educators/concepts/exercise_tools/about_OpenResponseAssessments.html#best-practices-for-open-response-assessments)
- **Test:**
  - Double-check upload restrictions

## 4 - Long Projects

### 4.0 - Intro to Long Projects

ok

### 4.1 - Building alternative navigation

- **Summary:**
  - ok
- **Demo:**
  - The code bit isn't working, possibly because the targets are hidden when the page loads. Rewrite as simpler highlighting with scroll-into-view.
- **Code:**
  - The URL scheme has changed. Redo this with the newer ones, including showing the weirdness that happens when multiple years are in the same URL.
  - Double-check the "disabling existing navigation" bit.
- **Test:**
  - ok
- **Application:**
  - This probably needs to go. We need either additional demos (good) or to find new courses that have alt nav (not so good because they'll vanish one day too).

### 4.2 - Building a Link Sharing Form

Is it worth looking into other ways to do this? Might be worth removing if not. To some extent this is not an edX trick, it's a Google trick.

- **Summary:**
  - ok
- **Demo:**
  - ok
- **Code:**
  - Test from scratch to make sure it still works as described.
- **Test:**
  - ok
- **Application:**
  - ok

### 4.3 - Writing new problem types with JSInput

- **Summary:**
  - [New XBlock SDK link](https://github.com/openedx/xblock-sdk)
  - It's no longer Stanford's repo, it [belongs to Harvard now](https://github.com/HarvardX/js-input-samples/).
- **Rationale:**
  - Fix link to [Harvard's repo](https://github.com/HarvardX/js-input-samples/).
- **Setup:**
  - "Files & Uploads" is just the Files page these days. Should do a bulk find for this.
  - Add note about using JS to add questions directly to the page instead of having custom HTML files per question. (Multi-text-box approach rather than logging question.)
- **Demo:**
  - First problem in demo is broken
  - Fix all the links to point to the Harvard repo.
- **Code:**
  - Fix link to Range Guesser.
- **Test:**
  - Make the first question less of a mess.
  - Maybe do the 2nd problem with categorization
- **Application:**
  - ok

### 4.4 - Building a content library

Mark this as obsolete and rebuild for the newer Content Libraries setup.

### 4.5 - Approaches to adaptivity

- **Summary:**
  - ok
- **Rationale:**
  - Fix the transcript ("Vise" Provost)
- **Are you sure?:**
  - ?! --> ?
  - Add note in #3 about the potential and limitations for AI-created assignments.
- **Setup:**
  - More detail in the "detailed description".
  - Alosi engine link is gone
- **Demo:**
  - ok
- **Code:**
  - Switch Devstack link for [Tutor](https://github.com/overhangio/tutor)
- **Test:**
  - ok
- **Application:**
  - Are there any remaining adaptive courses on edX? Maybe someone using Open edX might be willing to share an example?

### 4.6 - Realtime Data Tracking

- **Summary:**
  - ok
- **First Steps:**
  - Fix the "exhaustive list of events" link.
  - Double-check that Logger.listen() still works
- **Data and Context:**
  - Double-check functions and objects
- **Comprehensive Events:**
  - Fix "edX event list" link
- **Final Notes:**
  - We can use course-wide javascript now! Huzzah!
- **Test:**
  - ok

## 5 - Wrap-up

### 5.1 - Final Words

## 6 - Appendix

### 6.1 - Research and Best Practices, Incomplete

### 6.2 - Running your course, Incomplete

### 6.3 - Building for the Mobile App, Incomplete

### 6.4 - XBlock URLs, Incomplete

### 6.5 - HX-JS, Incomplete

### 6.6 - EdX Undocumented


- **Summary:**
- **Rationale:**
- **Demo:**
- **Code:**
- **Test:**
- **Examples:**
- **Application:**

