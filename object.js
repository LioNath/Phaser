var car = {
    type: "Tesla",
    model: "Model 3",
    color: "White",
    displayCar: function () {
      console.log("I have tesla " + car.model);//---> code "this.type" refers to the value of the type property
    },
  };
  car.displayCar();
  