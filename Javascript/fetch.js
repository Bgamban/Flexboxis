// Fetch
// Search
const searchButton = document.querySelector(".searchButton");
searchButton.addEventListener("click", function () {
  const inputKeyword = document.querySelector(".input-keyword");
  fetch("postman + inputKeyword.value")
    .then((response) => response.json())
    .then((response) => {
      const movies = response.Search;
      let cards = "";
      movies.forEach((m) => (cards += showCards(m)));
      const movieContainer = document.querySelector(".movie-container");
      movieContainer.innerHTML = cards;
      // Tombol Detail
      const modalDetailButton = document.querySelectorAll(".modal-detail-button");
      modalDetailButton.forEach((btn) => {
        btn.addEventListener("click", function () {
          fetch("postman + imdbid")
            .then((response) => response.json())
            .then((m) => {
              const movieDetail = showMovieDetail(m);
              const modalBody = document.querySelector(".modal-body");
              modalBody.innerHTML = movieDetail;
            });
        });
      });
    });
});

function showCards(m) {
  return `<div class="col-md-4 my-3">
    <div class="card">
        <img src="${m.Poster}" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title">${m.Title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
            <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal" data-target="#movieDetailModal" data-imdb="${m.imdbID}"></a>
        </div>
    </div>
</div>`;
}

function showMovieDetail(d) {
  return `<div class="container-fluid">
    <div class="row">
        <div class="col-md-3">
            <img src="${m.Poster}" class="img-fluid">
        </div>
        <div class="col-md">
            <ul class="list-group>
                <li class="list-group-item"
                    <h4>${m.Title} (${m.Year})</h4>
                </li>
                <li class="list-group-item"><strong> Director :</strong>${m.Director}</li>
                <li class="list-group-item"><strong>:</strong>${m.Actors}</li>
                <li class="list-group-item"><strong>:</strong>${m.Writer}</li>
                <li class="list-group-item"><strong>:</strong>${m.Plot}</li>
            </ul>
        </div>
    </div>
</div>`;
}
