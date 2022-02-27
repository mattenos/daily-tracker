const characterSubmitButton = document.getElementById('character-submit');
const listEl = document.getElementById('list-submit');

const createCharacter = (name, realm, region) => {
    fetch('/api/character', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify({
            name,
            realm,
            region
        })
    })
    // .then((res) => res.json())
    // .then((data) => console.log(data));
};

//
function submitCharacter() {
    let nameInput = document.getElementById("characterName");
    let realmInput = document.getElementById("realm");
    let regionInput = document.getElementById("region");

    createCharacter(nameInput.value, realmInput.value, regionInput.value);
}

characterSubmitButton.onclick = submitCharacter;

//
const getData = () => {
    fetch('/api', {
        method: 'GET'
    })
    .then((res) => res.json())
    .then((data) => console.log(data));
};

getData();
