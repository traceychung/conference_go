window.addEventListener('DOMContentLoaded', async () => {
    const selectTag = document.getElementById('conference');

    const url = 'http://localhost:8000/api/conferences/';
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();

      for (let conference of data.conferences) {
        const option = document.createElement('option');
        option.value = conference.href;
        option.innerHTML = conference.name;
        selectTag.appendChild(option);
      }

      // Here, add the 'd-none' class to the loading icon
      const load = document.getElementById("loading-conference-spinner")
      load.classList.add("d-none")

      // Here, remove the 'd-none' class from the select tag
      selectTag.classList.remove("d-none")
    }

    const formTag = document.getElementById('create-attendee-form')
    formTag.addEventListener('submit', async event => {
        event.preventDefault();
        const formData = new FormData(formTag);
        const json = JSON.stringify(Object.fromEntries(formData));

        const attendeeUrl = 'http://localhost:8001/api/attendees/';
        const fetchConfig = {
            method: "post",
            body: json,
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(attendeeUrl, fetchConfig);
        if (response.ok) {
            formTag.reset();
            formTag.classList.add("d-none");
            const success = document.getElementById("success-message");
            success.classList.remove("d-none");

            const newAttendee = await response.json();
        }

    });
  });
