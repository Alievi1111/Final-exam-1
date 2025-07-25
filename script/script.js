const joke = document.getElementById("joke");
const fetchButton = document.getElementById("fetchButton");
const thumbsUpButton = document.getElementById("thumbsUpButton");
const thumbsDownButton = document.getElementById("thumbsDownButton");
const counterDiv = document.getElementById("counter");

let likeCount = 0;

fetchButton.addEventListener("click", function () {
  fetch("https://api.chucknorris.io/jokes/random")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      joke.textContent = data.value;
    })
    .catch(function (error) {
      console.error("Failed to fetch joke", error);
    });
});

function updateCounter() {
  counterDiv.textContent = "Total Like/Dislike: " + likeCount;
}

fetchButton.addEventListener("click", function () {
  fetchJoke();
});

thumbsUpButton.addEventListener("click", function () {
  likeCount++;
  updateCounter();
});

thumbsDownButton.addEventListener("click", function () {
  if (likeCount > 0) {
    likeCount--;
  }
  updateCounter();
});
