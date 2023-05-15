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
constructor() {
    super();
    this.radius = 50;
}

render() {
    return `<circle r="${this.radius}" cx="150" cy="100" fill="${this.color}" />`;
}
}  

class Square extends Shape {
constructor() {
    super();
    this.side = 100;
}

render() {
    return `<rect width="${this.side}" height="${this.side}" fill="${this.color}" />`;
}
}

module.exports = { Triangle, Circle, Square };