import react from "react";

fetch("https://striveschool-api.herokuapp.com/api/posts/")
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));
