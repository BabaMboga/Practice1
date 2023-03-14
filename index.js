// This is an example of an object
const js = {
  name: "javascript",
  createdBy: {
    FirstName: "Brandon",
    LastName: "Stark",
  },
  firstReleased: 1995,
  isAwesome: true,
  placeManufactured: {
    Location: "Winterfell",
    House: "Bolton",
  },
};

typeof {};


// the objeccts properties have four data types that include a string, boolean, an object and a number

// the following piece of code showcases interpolation in its simplest form
const firstName = "Byronius";
const clanName = "Karbitus";
const commonName = "Maris";
let fullName;

// With +
fullName = firstName + " " + clanName + " " + commonName; //=> "Byronius Karbitus Maris"

// Or, with interpolation
fullName = `${firstName} ${clanName} ${commonName}`; //=> "Byronius Karbitus Maris"

// Keep in mind it returns a _new_ String; therefore:
firstName; //=> "Byronius"
clanName; //=> "Karbitus"
commonName; //=> "Maris"
fullName; //=> "Byronius Karbitus Maris"

console.log(fullName);
