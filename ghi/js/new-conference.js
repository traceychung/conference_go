window.addEventListener("DOMContentLoaded", async () => {

let locationUrl = '	http://localhost:8000/api/locations/'
let locationResponse = await fetch(locationUrl)

if (locationResponse.ok) {
    const data = await locationResponse.json()

    const selectTag = document.getElementById("location")

    for (let location of data.locations) {
        const option = document.createElement("option")

        option.value = location.id
        option.innerHTML = location.name

        selectTag.appendChild(option)
    }
}

const formTag = document.getElementById('create-conference-form')
formTag.addEventListener('submit', async event => {
    event.preventDefault();
    const formData = new FormData(formTag);
    const json = JSON.stringify(Object.fromEntries(formData));

    const confUrl = 'http://localhost:8000/api/conferences/';
    const fetchConfig = {
        method: "post",
        body: json,
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const response = await fetch(confUrl, fetchConfig);
    if (response.ok) {
        formTag.reset();
        const newConference = await response.json();
    }

});

});
