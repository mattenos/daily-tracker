const characterEl = document.getElementById('#character-submit');
const listEl = document.getElementById('#list-submit');

//
const getData = () => {
    fetch('/api', {
        method: 'GET'
    })
    .then((res) => res.json())
    .then((data) => console.log(data));
};

getData();

//
function submitForm() {
    let form = document.getElementById("list-submit");
    form.submit();
}