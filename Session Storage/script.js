// DECLARING OBJECT:-
// NOTE:- SESSION STORAGE CAN ONLY STORE STRINGS, NOT OBJECTS
const obj = { name: "Tathagata", age: "22" };

// STORING DATA AS KEY VALUE PAIR IN THE SESSION STORAGE..
sessionStorage.setItem("Occupation", "Software Developer");
console.log(sessionStorage.getItem("Occupation")); // CONSOLING IT BEFORE OVERWRITING
// CONVERTING THE OBJECT TO STRING AND STORE IT IN THE SESSION STORAGE
sessionStorage.setItem("Person", JSON.stringify(obj));
// OVERWRITE AND EXISTING VALUE
sessionStorage.setItem("Occupation", "Frontend Developer");
//   sessionStorage.removeItem('Person'); // REMOVES THE ENTIRE SESSION...
//   sessionStorage.clear(); //CLEARS THE ENTIRE STORAGE... RETURNS NULL...

// CONSOLING ALL SESSION STORAGE ITEMS
for (let i = 0; i < sessionStorage.length; i++) {
  // LENGTH GIVES THE CURRENT LENGTH OF THE STORAGE
  const key = sessionStorage.key(i);
  console.log(`${key} => ${sessionStorage.getItem(key)}`);
}

// CONSOLE LOGGING THE VALUE FROM THE SESSION STORAGE...
console.log(sessionStorage.getItem("Occupation"));
console.log(sessionStorage.getItem("Person")); // THIS WILL RETURN A JSON STRING.
console.log(JSON.parse(sessionStorage.getItem("Person"))); // THIS WILL RETURN IT BACK AS AN OBJECT.
