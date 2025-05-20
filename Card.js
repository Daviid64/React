
fetch('src/assets/data.json')
.then(response => response.json())
.then(data => data.forEach(e => {
    const cardContent = document.querySelector(`.card`)
    const content = document.createElement("div");

    content.innerHTML = 
    `<img src = "... className="card-img-top"
    alt=".../>    
    <div class = "card-body">
    <h5 class = "card-title>${e.nom}</h5>
    <p class="card-text">${e.description}</p>
    <a href = "#" class = "btn btn-primary">Go somewhere</a>
    </div> `

    cardContent.appendChild(content)
    
}))





