function createCard(name, description, pictureUrl, start, end, location) {
    return `
        <div class="col">
            <div class="card mb-4 shadow">
                <img src="${pictureUrl}" class="card-img-top">
                <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${location}</h6>
                <p class="card-text">${description}</p>
                </div>
                <div class="card-footer">
                <small class="text-muted">${start} - ${end}</small>
              </div>
            </div>
        </div>
    `;
  }

window.addEventListener('DOMContentLoaded', async () => {

const url = 'http://localhost:8000/api/conferences/';

try {
    const response = await fetch(url);

    if (!response.ok) {
    // Figure out what to do when the response is bad
    } else {
    const data = await response.json();

    for (let conference of data.conferences) {
        const detailUrl = `http://localhost:8000${conference.href}`;
        const detailResponse = await fetch(detailUrl);
        if (detailResponse.ok) {
        const details = await detailResponse.json();
        const title = details.conference.name;
        const description = details.conference.description;
        const pictureUrl = details.conference.location.picture_url;
        const start = new Date(details.conference.ends).toLocaleDateString();
        const end = new Date(details.conference.starts).toLocaleDateString();
        const location = details.conference.location.name;
        const html = createCard(title, description, pictureUrl, start, end, location);
        const column = document.querySelector('.row-cols-1');
        column.innerHTML += html;
        }
    }

    }
} catch (e) {
    // Figure out what to do if an error is raised
}

});
