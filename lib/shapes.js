class Shape {
    constructor() {
      this.color = '';
    }
  
    setColor(color) {
      this.color = color;
    }
  
    render() {
    }
  }

class Triangle extends Shape {
    constructor() {
      super();
      this.points = "150, 18 244, 182 56, 182";
    }
  
    render() {
      return `<polygon points="${this.points}" fill="${this.color}" />`;
    }
  }

  class Circle extends Shape {

  }

  class Square extends Shape {

  }

module.exports = { Triangle, Circle, Square };