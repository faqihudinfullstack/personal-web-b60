class Dog {
  constructor(
    // Properties
    name = "No Dog Name",
    color = "",
    eyeColor = "",
    height = 0,
    length = 0,
    weight = 0
  ) {
    this.name = name;
    this.color = color;
    this.eyeColor = eyeColor;
    this.height = height;
  }

  // Method
  sit() {
    console.log(`${this.name} is sitting`);
  }

  layDown() {
    console.log("Dog is laying down");
  }
}

let bobby = new Dog("Bobby", "white", "black", 30);
console.log(bobby.name);
console.log(bobby.height);

bobby.sit();
