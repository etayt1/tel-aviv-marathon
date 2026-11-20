fetch("js/races.json")
  .then((response) => response.json())
  .then((races) => {
    let container = document.getElementById("races-list");

    races.forEach((race) => {
      container.innerHTML += `
        <div class="col-12 col-md-4">
          <div class="card h-100 border border-primary">
            <img src="${race.image}" class="card-img-top" alt="${race.title}">
            <div class="card-body d-flex flex-column justify-content-between">
              <div>
                <h5 class="card-title">${race.title} (${race.distance})</h5>
                <p class="card-text">${race.description}</p>
              </div>
              <button class="btn btn-primary mt-2" data-bs-toggle="modal" data-bs-target="#registerModal">
                Sign up
              </button>
            </div>
          </div>
        </div>
      `;
    });
  });

const forms = document.querySelectorAll(".needs-validation");

forms.forEach((form) => {
  form.addEventListener("submit", (e) => {
    if (!form.checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
    }
    form.classList.add("was-validated");
  });
});