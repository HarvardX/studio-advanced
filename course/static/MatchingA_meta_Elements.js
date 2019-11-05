// The label should be kept short for visual aesthetics.
// Type can be 'text' or 'image'.
// If the type is set to 'image', the 'text' field will be used as alt text for accessibility.
// The imgURL should be just the filename; no need to include "/static/" in this.
// The linked images should not be larger than about 700x700 pixels, or they will not display well.

var elementsRight = {
  '1': {
    label: 'Yes!',
    type: 'text',
    text: 'I need to have or would like to have this functionality.',
    imgURL: ''
  },
  '2': {
    label: 'No.',
    type: 'text',
    text: 'I do not need this function.',
    imgURL: ''
  }
};

var elementsLeft = {
  A: {
    label: 'Matching',
    type: 'text',
    text:
      'I want learners to <em>select pairs of answers</em>, do <em>one-to-many</em> matching, or do <em>many-to-many</em> matching.',
    imgURL: ''
  },
  B: {
    label: 'Visual',
    type: 'text',
    text: 'I want to have my learners to place things on a <em>diagram</em>.',
    imgURL: ''
  },
  C: {
    label: 'Categorize',
    type: 'text',
    text: 'I want learners to <em>place items into categories</em>.',
    imgURL: ''
  }
};
