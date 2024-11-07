axios
  .get("https://jsonplaceholder.typicode.com/photos")
  .then((response) => {
    const data = response.data;
    const blogContainer = document.getElementById("blog-cards");
    const modalContainer = document.getElementById("modal-container");

    for (let i = 0; i < 6; i++) {
      const photo = data[i];

      const card = document.createElement("div");
      card.className = "column";

      card.innerHTML = `
          <div class="card"${photo.id}>
              <img src="${photo.url}" class="card-img-top img-size" alt="">
              <div>
                  <p class="card-text">${photo.title}</p>
              </div>
          </div>
      `;

      blogContainer.appendChild(card);

      const modal = document.createElement("div");
      modal.className = "modal";
      modal.id = `modal-${photo.id}`;

      modal.innerHTML = `
        <div class="modal-content">
            <span class="close-btn" onclick="closeModal(${photo.id})"></span>
            <img src="${photo.url}" id="modal-image" alt="">
            <p id="modal-title">${photo.title}</p>
        </div>
      `;

      modalContainer.appendChild(modal);

      card.addEventListener("click", function () {
        openModal(photo.id);
      });
    }
  })
  .catch((error) => {
    console.error("Errore nella richiesta:", error);
  });

function openModal(photoId) {
  const modal = document.getElementById(`modal-${photoId}`);
  modal.style.display = "flex";
}

function closeModal(photoId) {
  const modal = document.getElementById(`modal-${photoId}`);
  modal.style.display = "none";
}

window.onclick = function (event) {
  const modals = document.querySelectorAll(".modal");
  modals.forEach((modal) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
};



