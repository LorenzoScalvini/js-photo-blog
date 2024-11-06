axios.get('https://jsonplaceholder.typicode.com/photos')
  .then(response => {
    const data = response.data;

    for (let i = 0; i < 6; i++) {
      const photo = data[i];
      console.log('Title:', photo.title);
      console.log('URL:', photo.url);
    }
  })
  .catch(error => {
    console.error('Errore nella richiesta:', error);
  });


