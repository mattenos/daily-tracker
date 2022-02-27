const characterSubmitButton = document.getElementById('character-submit');
const characterForm = document.getElementById('character-form');
const entryForm = document.getElementById('entry-form');
let activeCharacter;

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// fetch request that posts the user input into the db
const submitCharacter = () => {
    let nameInput = document.getElementById("characterName");
    let realmInput = document.getElementById("realm");
    let regionInput = document.getElementById("region");

    fetch('/api/character', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: nameInput.value.toLowerCase(),
            realm: realmInput.value.toLowerCase(),
            region: regionInput.value.toLowerCase()
        })
    })
        .then((res) => res.json())
        .then((data) => {
            // Found or created the character submission
            activeCharacter = data
            console.log(activeCharacter)

            const characterWelcome = document.createElement("h2")
            characterWelcome.classList = "flex items-center justify-center text-green-600 text-2xl font-bold m-4"
            characterWelcome.innerText = `${capitalizeFirstLetter(activeCharacter.name)} is ready to enter the Zereth Mortis! Happy hunting.`
            entryForm.prepend(characterWelcome);
            // hides character form and then shows entry form.
            characterForm.hidden = true;
            entryForm.hidden = false;
        });
};

// Submits the user input on click of submit button.
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
