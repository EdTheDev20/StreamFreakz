window.addEventListener("load", function () {
  this.fetch("./Javascript/Db.json")
    .then((response) => response.json())
    .then((data) => {
      const cardDiv = document.getElementById("cardDiv");
      //Fazer o loop no objecto
      data.files.Videos.forEach((video) => {
        const card = document.createElement("a");
        card.classList.add("card-link");
        card.href = "#";
        card.setAttribute("path", `${video.path}`);
        card.setAttribute("thumb", `${video.thumbnail}`);
        card.addEventListener("click", function () {
          playVideo(this);
        });
        card.innerHTML = `<div class="card m-1" style="width: 18rem;">
<div class="card-body">
<img src="${video.thumbnail}" class="rounded float-start" alt="..." width="80px" height="50px">  
<h5 class="card-title">${video.title}</h5>
</div>
</div>`;

        cardDiv.appendChild(card);
      });
    });
});
function playVideo(element) {
  var path = element.getAttribute("path");
  console.log(path);
  changeVideo(path);
}

function changeVideo(path) {
  var player = videojs("my-player");

  var newVideoURL = path;
  player.src({
    src: newVideoURL,
    type: "video/mp4",
  });
  player.load();
  player.play();
}
