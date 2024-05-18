class Car {
    constructor(type, color) {
      this.type = type;
      this.color = color;
      this.display = function () {
        console.log(this.color + "" + this.type);
      };
    }
  } //create object
  var car1 = new Car("Tesla", "White");
  var car2 = new Car("BMW", "Grey");
  var car3 = new Car("Mercedes", "Black"); //print
  
  car1.display();
  car2.display()