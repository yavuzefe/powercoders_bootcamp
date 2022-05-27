let submitButton = document.getElementById("submitButton");
let resultSection = document.getElementById("resultSection");
let images = document.querySelector('images');

submitButton.onclick = () => {
    let userSearch = document.getElementById("userInput").value;
    let date = new Date();
    let year = date.getFullYear();//2022
    let month = date.getMonth();//4

    if (month == 0) {
        month = 12;
    }
    let day = date.getDate();//27
    if (month < 10) {
        month = `0${month}`;
    }
    fetch(`https://newsapi.org/v2/everything?q=${userSearch}&from=${year}-${month}-${day}&sortBy=popularity&apiKey=fbf3c667096d4e248ce78363a9975057`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            for (let index = 0; index < data.articles.length; index++) {
                resultSection.innerHTML += `<p class="title">${data.articles[index].title}</p><br/>
                <img src='${data.articles[index].urlToImage}'><br/>
                <p class="author">Author: ${data.articles[index].author}</p><br />
                <p class ="content">${data.articles[index].description}</p><br />
                <a href="${data.articles[index].url}" target='blank'>
                <p>${data.articles[index].publishedAt}</p><br />

                <button>Read more</button></a>`;
                
            }
        })
}   