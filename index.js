// $.get("https://async-workshops-api.herokuapp.com/people", function(peopleResponse) {
//   peopleResponse.forEach(function(person) {
//     $.get("https://async-workshops-api.herokuapp.com/people/" + person.id, function(personResponse) {
//       console.log(personResponse.favouriteMusic);
//     });
//   });
// });

// ### Question 1
//
// `console.log` a number in each part of the code.  Run the code.  The numbers should be logged in order: 1, 2, 3, 4... If they aren't, follow the flow of control to figure out why.  Correct the `console.log`s.
//
// Now fix the code.  It should print out the mouse click event object when the mouse is clicked.

// var clickEvent
//
// $(document).click(function(event) {
//   clickEvent = event;
//   console.log("Mouse click event object:", clickEvent);
// });

// ### Question 2
//
// `console.log` a number in each part of the code.  Run the code.
// The numbers should be logged in order: 1, 2, 3, 4... If they aren't,
// follow the flow of control to figure out why.  Correct the `console.log`s.

// console.log(1);
// $.get("https://async-workshops-api.herokuapp.com/people", function(peopleResponse) {
//   console.log(2);
//   console.log(peopleResponse);
// });

// ### Question 3
//
// `console.log` a number in each part of the code.  Run the code.  The numbers should be logged in order: 1, 2, 3, 4... If they aren't, follow the flow of control to figure out why.  Correct the `console.log`s.
//
// Now fix the code.  It should print out the people returned by the API.

// var people;
//
// $.get("https://async-workshops-api.herokuapp.com/people", function(peopleResponse) {
//   console.log(peopleResponse);
//   people = peopleResponse;
//   console.log(people);
// });

// ### Question 4
//
// `console.log` a number in each part of the code.  Run the code.  The numbers should be logged in order: 1, 2, 3, 4... If they aren't, follow the flow of control to figure out why.  Correct the `console.log`s.
//
// Now fix the code.  It should print out the people returned by the API.

// function getPeople() {
//   return $.get("https://async-workshops-api.herokuapp.com/people", function(peopleResponse) {
//     console.log(peopleResponse);
//   });
// };
//
// getPeople();

// ### Question 5
//
// `console.log` a number in each part of the code.  Run the code.  The numbers should be logged in order: 1, 2, 3, 4...
// If they aren't, follow the flow of control to figure out why.  Correct the `console.log`s.
// This code is incomplete.  It should print the names of the people returned by the API.  Try and complete it.
//
// function listNamesOfPeople(people) {
//   people.forEach(function(person) {
//     console.log(person.name);
//   });
// };
//
// $.get("https://async-workshops-api.herokuapp.com/people", listNamesOfPeople);

// ### Question 6
//
// `console.log` a number in each part of the code.  Run the code.
//The numbers should be logged in order: 1, 2, 3, 4... If they aren't,
//follow the flow of control to figure out why.  Correct the `console.log`s.
// (This code is not broken.)

// $.get("https://async-workshops-api.herokuapp.com/people", function(peopleResponse) {
//   peopleResponse.forEach(function(person) {
//     $.get("https://async-workshops-api.herokuapp.com/people/" + person.id, function(personResponse) {
//       console.log(personResponse.favouriteMusic);
//     });
//   });
// });


var delay = 1000;

['alpha', 'bravo', 'charlie'].forEach(function(name){
  setTimeout(function(){console.log(name)}, delay);
  delay += 1000;
})
