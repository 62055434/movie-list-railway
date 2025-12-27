const API_KEY = "cae44d24";

const movies = [
  "tt0232500",
  "tt0322259",
  "tt0463985",
  "tt1013752",
  "tt1596343",
  "tt1905041",
  "tt2820852",
  "tt4630562",
  "tt5433138",
  "tt5433140"
];


const movieList = document.getElementById("movies");

if (movieList) {
  movies.forEach(id => {
    fetch(`https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`)
      .then(res => res.json())
      .then(m => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
          <img src="${m.Poster}">
          <div>
            <h3>${m.Title}</h3>
            <p>${m.Year} • ⭐ ${m.imdbRating}</p>
          </div>
        `;
        card.onclick = () => {
          window.location = `/movie.html?id=${id}`;
        };
        movieList.appendChild(card);
      });
  });
}


const details = document.getElementById("details");

if (details) {
  const id = new URLSearchParams(window.location.search).get("id");

  fetch(`https://www.omdbapi.com/?i=${id}&plot=full&apikey=${API_KEY}`)
    .then(res => res.json())
    .then(m => {
      details.innerHTML = `
        <img src="${m.Poster}">
        <h2>${m.Title} (${m.Year})</h2>
        <p>⭐ IMDb ${m.imdbRating}</p>
        <p>${m.Plot}</p>
        <p><b>Genre:</b> ${m.Genre}</p>
        <p><b>Runtime:</b> ${m.Runtime}</p>
        <p><b>Actors:</b> ${m.Actors}</p>
      `;
    });
}