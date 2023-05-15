const { Triangle, Circle, Square } = require('./shapes');

describe('Triangle', () => {
    test('render method should generate the expected SVG string with the specified color', () => {
      const shape = new Triangle();
      shape.setColor('blue');
      expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
  });
  
  describe('Circle', () => {
    test('render method should generate the expected SVG string with the specified color', () => {
      const shape = new Circle();
      shape.setColor('#ff0000');
      expect(shape.render()).toEqual('<circle r="50" cx="150" cy="100" fill="#ff0000" />');
    });
  });
  
  describe('Square', () => {
    test('render method should generate the expected SVG string with the specified color', () => {
      const shape = new Square();
      shape.setColor('green');
      expect(shape.render()).toEqual('<rect width="100" height="100" fill="green" />');
    });
  });
  