let outputDivUI
let inputDivUI

function setup() {
  createCanvas(windowWidth, windowHeight)
  background('lightgray')

  addInputOutputElements()

  addTopic(
    'place',
    'I once lived with my pet in a place called',
    '. Never have I been to a more disgusting place where tyrannical gnomes rule.',
    false,
    false,
  )
  addTopic(
    'name',
    'In this place there was a person named',
    ', they never used their manners and always burped at dinner.',
    false,
    false,
  )
  addTopic(
    'number',
    'They lived with the gnomes for almost',
    'years, making new friends everyday.',
    false,
    true,
  )
  addTopic(
    'verb (present participle)',
    'His favorite activity was',
    'in the yard.',
    false,
    false,
  )
  addTopic(
    'adjective',
    'All things were going',
    'in the world.',
    true,
    false,
  )
    // ADD CODE: Add 4 more additional topics by calling addTopic()

  // Creates next button and styles it
  const outputDisplayBtn = createButton('NEXT')
  outputDisplayBtn.mousePressed(showOutputHandler)

  // ADD CODE: call .parent() to attach the button to the inputDivUI
  outputDisplayBtn.parent(inputDivUI)

  function showOutputHandler() {
    outputDivUI.show()
 // ADD CODE: Hide the inputDivUI
    inputDivUI.hide()
  }
}

function addInputOutputElements() {
  createElement('h1', 'Mad Libs Game')
  createElement('h4', 'Enter Some Text to See The Result')

  inputDivUI = createDiv('').id('inputs')
  outputDivUI = createDiv('').id('outputs')
  outputDivUI.hide()
}

function addTopic(topic, intro, detail, uppercase, num) {
  createElement('p', `Name a ${topic.toUpperCase()}`)
    .id('input-label')
    .parent(inputDivUI)

  const inputFieldUI = createInput(' ')
    .id('input-field')
    .parent(inputDivUI)

  inputFieldUI.changed(updateOutputHandler)

  function updateOutputHandler() {
    const output = createP('').parent(outputDivUI)
    // ADD CODE: convert the user input to lowercase by default
    let userInput = inputFieldUI.value().toLowerCase()

    // ADD CODE: convert to uppercase
    if (uppercase === true) {
      // ADD CODE: reassign userInput to be userInput.toUpperCase()
      userInput = userInput.toUpperCase()
    }

    // ADD CODE: CONVERT TO NUM
    // add if() statement that checks to see iff num === true.
    // if true, convert userInput to a number and perform some math on it
    if(num === true) {
        userInput = Number(userInput)
        userInput = userInput*2
    }
    


    // OUTPUT BACK TO USER IN THE OUTPUT FIELD
    output.html(`${intro} ${userInput} ${detail}`)
  }
}