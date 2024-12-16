const url = 'https://jsonplaceholder.typicode.com/posts';
fetchWithTimeout(url, {}, 10000)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
