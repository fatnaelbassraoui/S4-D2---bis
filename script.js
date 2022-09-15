

let mahmood_url = "https://striveschool-api.herokuapp.com/api/deezer/search?q=mahmood";
let pinguini_url = "https://striveschool-api.herokuapp.com/api/deezer/search?q=pinguini%20tattici%20nucleari";
let maneskin_url = "https://striveschool-api.herokuapp.com/api/deezer/search?q=maneskin";


function myUrl(url) {

    console.log(url)
    fetch(url).then(res => res.json()).then(
        (x) => {

            let arr = []
            for (let el of x.data) {

                //creo la card
                let div = document.getElementById("card")
                let card = document.createElement("div")
                card.classList.add("card"),
                    card.style.width = "18rem"
                let img = document.createElement("img")
                img.classList.add("card-img-top")
                let cardBody = document.createElement("div")
                cardBody.classList.add("card-body")
                let cardText = document.createElement("p")
                cardText.classList.add("card-text")
                //creo il button della card
                let TuttiGliAlbum = document.createElement("button")
                TuttiGliAlbum.classList.add("btn", "btn-primary")
                
                //assemblo la mia card

                cardBody.appendChild(cardText)
                cardBody.appendChild(TuttiGliAlbum)
                
                card.appendChild(img)
                card.appendChild(cardBody)
                div.appendChild(card)
                card.style.marginLeft = "20px"

                //inserisco i miei elementi
                console.log(el);
                img.src = el.album.cover_small
                console.log(img.src);
                cardText.innerText = el.artist.name
                TuttiGliAlbum.innerText = "Tutti gli album"

                arr.push(card)

                //applico le funzioni ai button
                TuttiGliAlbum.addEventListener("click", () => {
                    x.data.forEach((y) => {
                        let modal = document.getElementById("modalButton")
                        modal.classList.add("modal-dialog")
                        let modalDialog = document.createElement
                            ("div")
                        modalDialog.classList.add("modal-dialog")
                        let modalBody = document.createElement("div")
                        modalBody.classList.add("modal-body")
                        let paragraph = document.createElement("p")


                        //assemblo il modal
                        modal.innerHTML= ""
                        modalBody.appendChild(paragraph)
                        modalDialog.appendChild(modalBody)
                        modal.appendChild(modalDialog)


                        //inserisco gi elementi
                        console.log(y.title);

                        paragraph.innerText = y.title
                        paragraph.style.color = "white"

                    })
                })
                

            }
        }
    ).catch(err => console.error(err))
}

myUrl(mahmood_url)
myUrl(pinguini_url)
myUrl(maneskin_url)