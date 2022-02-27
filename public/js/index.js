const rootEl = document.getElementById('#root');

const getData = () => {
    fetch('/api', {
        method: 'GET'
    })
    .then((res) => res.json())
    .then((data) => console.log(data));
};

getData();

// let character = prompt("Please enter your character name", "Harry Potter");

// if (person != null) {
//   document.getElementById("demo").innerHTML =
//   "Hello " + person + "! How are you today?";
// }