class User {
    constructor(name) {
      // invokes the setter
      this.name = name;
    }
    get name() {
      return this._name;
    }
    set name(value) {
      if (value.length < 4) {
        console.log("Name is too short.");
        return;
      }
      this._name = value;
    }
  }
  
  let user1 = new User("John");
  console.log(user1.name); // John
  
  //uesr1 = new User('');//Name is too short.

  user1.name = "Harry"
  console.log(user1);