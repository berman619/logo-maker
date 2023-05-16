class Shape {
    constructor() {
      //sets the initial color property to an empty string
      this.color = '';
      this.textColor = '';
      this.text = '';
    }
    //method sets the color property to the specified color
    setColor(color) {
      this.color = color;
    }

    setText(text) {
      this.text = text;
    }

    setTextColor(color) { 
      this.textColor = color;
    }
    
    render() {
    }
  }

class Triangle extends Shape {
    constructor() {
      //invokes the parent class's constructor using super
      super();
      this.points = "150, 18 244, 182 56, 182";
    }
  
    render() {
      return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><polygon points="${this.points}" fill="${this.color}" /><text x="150" y="120" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}" font-size="40">${this.text}</text></svg>`;
    }
}

class Circle extends Shape {
    constructor() {
        super();
        this.radius = 50;
    }

    render() {
      return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><circle r="${this.radius}" cx="150" cy="100" fill="${this.color}" /><text x="150" y="100" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}" font-size="40">${this.text}</text></svg>`;
    }
}  

class Square extends Shape {
    constructor() {
        super();
        this.side = 100;
    }

    render() {
      return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><rect width="${this.side}" height="${this.side}" fill="${this.color}" /><text x="150" y="100" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}" font-size="40">${this.text}</text></svg>`;
    }
}

module.exports = { Triangle, Circle, Square };