const apiKey = "ba338813"; // Use your own key when ready

function searchMovie() {
  const title = document.getElementById("movieInput").value.trim();
  if (!title) return;

  fetch(`https://www.omdbapi.com/?s=${title}&apikey=${apiKey}`)
    .then((res) => res.json())
    .then((data) => {
      if (data.Response === "True") {
        let html = "<h2>Search Results:</h2>";
        data.Search.forEach(movie => {
          html += `
            <div style="margin: 20px; border-bottom: 1px solid gray;">
              <h3>${movie.Title} (${movie.Year})</h3>
              <img src="${movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/150'}" height="200">
            </div>
          `;
        });
        document.getElementById("movieDetails").innerHTML = html;
      } else {
        document.getElementById("movieDetails").innerHTML = "<p>No movies found. Try a different title.</p>";
      }
    })
    .catch(err => {
      console.error(err);
      document.getElementById("movieDetails").innerHTML = "<p>Error fetching movie data.</p>";
    });
}
