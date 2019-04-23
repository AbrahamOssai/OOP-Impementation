
// Declaration of Parent Object for OOP demonstration
class User {
  
  constructor( firstName, lastName ) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._isLogged = false;
    this._lastLoggedInAt = null;
    this._canEdit = false;
  }

  isLoggedIn() {
    return this._isLogged;
  }

  getLastLoggedInAt() {
    return this._lastLoggedInAt;
  }

  logIn() {
    
    this._lastLoggedInAt = new Date();
    this._isLogged = true;
  }

  logOut() {
    this._isLogged = false;
  }

  // This would be used to demonstrate polymorphism
  getFullName() {
    return `${this._firstName} ${this._lastName} is a general User`;
  }

  setFirstName(fname) {
    this.firstName = fname;

  }

  setLastName(lName) {
    this.lastName = lName;

  }

  canEdit(comment) {
    if (comment._author._name === this._name){
      return this.canEdit;
    }
    
    return false;
  }

  canDelete(comment) {
      return false;
    }
}

// An example of Inheritance
class Moderator extends User {

  constructor( firstName, lastName) {
    super(firstName, lastName);
    this.canEdit = true;
  }
  
  canDelete(comment) {
      return true;
  }

  getFullName() {
    return `${this._firstName} ${this._lastName} is a Moderator`;
  }
}

// An example of Inheritance
class Admin extends Moderator {

  constructor( firstName, lastName) {
    super(firstName, lastName);
    this.canEdit = true
  }

  canEdit(comment) {
    return true;
  }

  getFullName() {
    return `${this._firstName} ${this._lastName} is an Admin`;
  }
}

class Comment {
  // #author;
  // #message;
  // #repliedTo = null;
  // #createdAt;
  
  constructor(author, message, repliedTo) {
    this._author = author;
    this._message = message;
    this._repliedTo = repliedTo || null;
    this._createdAt = new Date();
  }

  getMessage() {
    return this._message;
  }

  setMessage(message) {
    this._message = message;
    this._createdAt = Date.now();
  }

  getCreatedAt() {
    return this._createdAt;
  }

  getAuthor() {
    return this._author;
  }

  getRepliedTo() {
    return this._repliedTo;
  }

  // An example of encapsulation
  toString() {
    let message = `${this._message} by ${this._author._name}`;
    
    if (this._repliedTo){
      message += ` (replied to ${this._repliedTo._author._name})`
    }
    
    return message;
  }
}

const user = new User( 'Ifeanyi', 'Ossai');
const moderator = new Moderator ( 'James', 'Obute');
const admin = new Admin ( 'Philip', 'Igoni');

console.log("\n\nDemonstration of Dynamic Polymorphism through method Overriding");
console.log("Each User");
console.log("***************************************************************\n");
console.log(user.getFullName());
console.log(moderator.getFullName());
console.log(admin.getFullName());

console.log("\n\nDemonstration of Inheritance");
console.log("Moderators and Admin inherit functions declared in User parent");
console.log("isLoggedIn and logIn are inherited");
console.log("***************************************************************\n");

console.log("Check if Moderator and Admin is logged in ****************\n");
console.log(moderator.isLoggedIn());
console.log(admin.isLoggedIn());
console.log("****************\n");

console.log("log them in ****************\n");
moderator.logIn();
admin.logIn;

console.log("Check if Moderator and Admin is logged in ****************\n");
console.log(moderator.isLoggedIn());
console.log(admin.isLoggedIn());
console.log("****************\n");

