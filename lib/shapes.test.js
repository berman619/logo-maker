const { Triangle, Circle, Square } = require('./shapes');

describe('Triangle', () => {
  test('render method should generate the expected SVG string with the specified colors and text', () => {
    const shape = new Triangle();
    shape.setColor('Blue');
    shape.setTextColor('White');
    shape.setText('CAT');
    expect(shape.render().trim()).toEqual('<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><polygon points="150, 18 244, 182 56, 182" fill="Blue" /><text x="150" y="120" dominant-baseline="middle" text-anchor="middle" fill="White" font-size="40">CAT</text></svg>');
  });
});

describe('Circle', () => {
  test('render method should generate the expected SVG string with the specified colors and text', () => {
    const shape = new Circle();
    shape.setColor('#ff0000');
    shape.setTextColor('White');
    shape.setText('DOG');
    expect(shape.render().trim()).toEqual('<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><circle r="50" cx="150" cy="100" fill="#ff0000" /><text x="150" y="100" dominant-baseline="middle" text-anchor="middle" fill="White" font-size="40">DOG</text></svg>');
  });
});

describe('Square', () => {
  test('render method should generate the expected SVG string with the specified colors and text', () => {
    const shape = new Square();
    shape.setColor('Green');
    shape.setTextColor('Black');
    shape.setText('BOY');
    expect(shape.render().trim()).toEqual('<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><rect width="100" height="100" fill="Green" /><text x="150" y="100" dominant-baseline="middle" text-anchor="middle" fill="Black" font-size="40">BOY</text></svg>');
  });
});
