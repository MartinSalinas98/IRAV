const express = require('express')
const app = express()
const path = require('path')

// Using assets folder
app.use(express.static(path.join(__dirname, 'static')))

// Rendering app
app.get('/', function (req, res) {
  // Loading movie database
  const images = [
    {title: 'Memento', src: 'Memento.jpg', alt: "Memento"},
    {title: 'Avatar', src: 'Avatar.jpg', alt: "Avatar"},
    {title: 'Origen', src: 'Origen.jpg', alt: "Origen"},
    {title: 'Shrek', src: 'Shrek.jpg', alt: "Shrek"},
    {title: 'Pulp Fiction', src: 'Pulp_fiction.jpg', alt: "Pulp Fiction"},
    {title: 'Buscando a Nemo', src: 'Finding_nemo.jpg', alt: "Buscando a Nemo"},
    {title: 'Los Increíbles', src: 'The_incredibles.jpg', alt: "Los Increíbles"}
  ]

  // Getting manual
  const manualPath = 'Manual.pdf'

  // Defining base html
  let html = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body {
            margin: 0;
          }
          header {
            width: 100%;
            height: 5vh;
            background-color: #32a89b;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          header a {
            color: #164494;
            text-decoration: none;
          }
          header a:hover {
            color: white;
          }
          header span.exclamation-mark {
            margin-left: -3pt;
          }
          div.movie-block {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
          }
          .movie-container {
            flex-basis: 21%;
            padding: 2%;
          }
          .movie-container img {
            width: 100%;
          }
          .movie-container a {
            text-decoration: none;
          }
          .movie-container h2.movie-title {
            text-align: center;
            color: black;
          }
          .movie-container h2.movie-title:hover {
            color: gray;
          }
        </style>
      </head>
      <body>
        <header>
          <div class="manual-container">
            <span>¡Descarga el manual de usuario</span>
            <a href="${manualPath}">aquí</a>
            <span class="exclamation-mark">!</span>
          </div>
        </header>
        <div class="movie-block">
  `
  // Rendering images
  images.forEach(function(image) {
    html += `
      <div class="movie-container">
        <a href="${image.src}">
          <img src="${image.src}" alt="${image.alt}">
        </a>
        <a href="${image.src}">
          <h2 class="movie-title">${image.title}</h2>
        </a>
      </div>
    `
  })

  html += `
        </div>
      </body>
    </html>
  `
    res.send(html)
  })

app.listen(3000)