const characterSubmitButton = document.getElementById('character-submit');
const characterForm = document.getElementById('character-form');
const entryForm = document.getElementById('entry-form');
const entrySubmitButton = document.getElementById('entry-submit');

let activeCharacter;

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Getting the activites and sending to populateActivties
fetch('api/activities', {
    method: "GET"
})
    .then((res) => res.json())
    .then((data) => populateActivities(data));

// Thank you React.js
const populateActivities = (activities) => {
    const entryWrap = document.getElementById('entry-wrapper');
    activities.forEach(activity => {
        const newEntry = document.createElement('label');
        newEntry.classList = "custom-label flex mt-2 ml-3"
        newEntry.innerHTML = `<div class="bg-white shadow w-6 h-6 p-1 flex justify-center items-center mr-2">
         <input type="checkbox" data-activity-id="${activity.id}" class="hidden">
         <svg class="hidden w-4 h-4 text-green-600 pointer-events-none" viewBox="0 0 172 172">
             <g fill="none" stroke-width="none" stroke-miterlimit="10" font-family="none" font-weight="none"
                 font-size="none" text-anchor="none" style="mix-blend-mode:normal">
                 <path d="M0 172V0h172v172z" />
                 <path
                     d="M145.433 37.933L64.5 118.8658 33.7337 88.0996l-10.134 10.1341L64.5 139.1341l91.067-91.067z"
                     fill="currentColor" stroke-width="1" />
             </g>
         </svg>
     </div>
     <span>${activity.description}</span>`

        entryWrap.append(newEntry);
    });
}

// Submitting the completed activities for the day. Querying for the attribute 'data-activity-id' from the above html.
// backend is looking for keys noted in entry.js model.
// Then we are posting the character ID and the completed activities when submitted on the front end.
const submitEntries = () => {
    const completedActivityIds = [];
    const entryInputs = Array.from(document.querySelectorAll('[data-activity-id]'));
    entryInputs.forEach(entryInput => {
        if (entryInput.checked) {
            completedActivityIds.push(
                {
                    activityId: entryInput.getAttribute("data-activity-id"),
                    characterId: activeCharacter.id
                }
            )
        }
    });
    fetch('/api/entry', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(completedActivityIds)
    })
};

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
            characterWelcome.innerText = `${capitalizeFirstLetter(activeCharacter.name)} is ready to enter the mysterious lands of Zereth Mortis! Happy hunting.`
            entryForm.prepend(characterWelcome);
            // hides character form and then shows entry form.
            characterForm.hidden = true;
            entryForm.hidden = false;
        });
};

// Submits the character input on click of start-tracking button.
characterSubmitButton.onclick = submitCharacter;
// Submits the completed entries on click of done-for-today button.
entrySubmitButton.onclick = submitEntries;



//
const getData = () => {
    fetch('/api', {
        method: 'GET'
    })
        .then((res) => res.json())
        .then((data) => console.log(data));
};

getData();
