const person = {
  _firstName: "",
  _lastName: "",

  NewPerson(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
  },

  get firstName() {
    this._firstName;
  },

  set firstNameSetter(value) {
    this._firstName = value;
  },

  get lastName() {
    this._lastName;
  },

  set lastNameSetter(value) {
    this._lastName = value;
  },

  fullName() {
    return this._firstName + " " + this._lastName;
  }

}

// person.NewPerson('John', 'Doe');
const john = Object.create(person, {
  '_firstName': {
    value: "John",
  },
  '_lastName': {
    value: "Doe",
  }
});

const simon = Object.create(person, {
  '_firstName': {
    value: "Simon",
  },
  '_lastName': {
    value: "Collins",
  }
});

console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins