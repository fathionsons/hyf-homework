let searchGif = document.querySelector('#giffinder');
let numberOfGif=document.querySelector('#numbergif');
let btn = document.querySelector('#finderbutton');
btn.addEventListener('click', function () {
    let search = searchGif.value;
    if (search === "") {
        alert("What's your problem man,Please type something");
        return false;
    }
    document.querySelector('.gif').innerHTML = "";
    fetch('https://api.giphy.com/v1/gifs/search?q=' + search + '&api_key=8wqf9mmnXHgAQr5Og1s7PjeyShYg8OGx')
        .then(response => response.json())
        .then(response => {
            console.log(response);

            
            for (let i = 0; i <= (numberOfGif.value)-1; i++) {
                let display = document.querySelector('.gif');
                let h2 = document.createElement('h2');
                h2.innerHTML = response.data[i].title;
                display.appendChild(h2);
                let image = document.createElement('img');
                image.src = response.data[i].images.original.url;
                display.appendChild(image);
            }
        })
})