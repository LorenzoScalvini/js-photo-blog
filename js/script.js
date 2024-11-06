axios.get('https://jsonplaceholder.typicode.com/photos')
  .then(response => {
    const data = response.data;
    const blogContainer = document.getElementById("blog-cards");

    for (let i = 0; i < 6; i++) {
      const photo = data[i];

      const card = document.createElement("div");
    card.className = "col-md-4 mb-4";

    card.innerHTML = `
          <div class="card">
              <img src="${photo.url}" class="card-img-top img-size" alt="">
              <div class="card-body bg-light">
                  <p class="card-text text-dark card-title">${photo.title} <a href=""></a></p>
              </div>
          </div>
      `;

    blogContainer.appendChild(card);
      console.log('Title:', photo.title);
      console.log('URL:', photo.url);
    }
  })
  .catch(error => {
    console.error('Errore nella richiesta:', error);
  });


