const inquirer = require('inquirer');
const fs = require('fs');
const { Square, Circle, Triangle } = require('./lib/shapes');

inquirer.prompt([
    {
      type: 'list',
      name: 'shapeChoice',
      message: 'Select a shape:',
      choices: ['Triangle', 'Circle', 'Square'],
    },
    {
      type: 'list',
      name: 'textColor',
      message: 'Select a text color:',
      choices: ['Red', 'Green', 'Blue', 'Yellow', 'Black', 'White', 'Custom'],
    },
    {
      type: 'input',
      name: 'customTextColor',
      message: 'Enter a custom text color (hexadecimal value):',
      //only display this question if previous answer is custom
      when: (answers) => answers.textColor === 'Custom',
    },
    {
      type: 'list',
      name: 'shapeColor',
      message: 'Select a shape color:',
      choices: ['Red', 'Green', 'Blue', 'Yellow', 'Black', 'White', 'Custom'],
    },
    {
      type: 'input',
      name: 'customShapeColor',
      message: 'Enter a custom shape color (hexadecimal value):',
      //only display this question if previous answer is custom
      when: (answers) => answers.shapeColor === 'Custom',
    },
  ])
  .then((answers) => {
    const { shapeChoice, textColor, customTextColor, shapeColor, customShapeColor } = answers;

    let shapeInstance;

    if (shapeChoice === 'Triangle') {
      shapeInstance = new Triangle();
    } else if (shapeChoice === 'Circle') {
      shapeInstance = new Circle();
    } else if (shapeChoice === 'Square') {
      shapeInstance = new Square();
    }

    const selectedTextColor = textColor === 'Custom' ? customTextColor : textColor;
    const selectedShapeColor = shapeColor === 'Custom' ? customShapeColor : shapeColor;

    shapeInstance.setColor(selectedShapeColor);

    const svgString = shapeInstance.render();

    fs.writeFile('logo.svg', svgString, (err) => {
        if (err) {
          console.error('An error occurred creating the SVG file:', err);
        } else {
          console.log('Generated logo.svg');
        }
      });
    });