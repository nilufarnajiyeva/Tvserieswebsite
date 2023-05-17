var card=document.querySelector(".row")
axios.get('https://api.tvmaze.com/shows').then(res=>{
    for(let i=0; i<res.data.length; i++){
        card.innerHTML+=` <div class="col-2">
        <div class="card" >
        <img src="${res.data[i].image.original}"class="card-img-top" >
        <div class="card-body">
          <h5 class="card-title">${res.data[i].name} </h5>
        
          <p class="card-text">${res.data[i].externals.imdb}</p>
          <a href="#" class="btn btn-primary">Details </a>
        </div>
      </div>`
    }
});