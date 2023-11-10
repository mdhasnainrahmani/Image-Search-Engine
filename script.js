let input = document.getElementById("input")
let btn = document.getElementById("btn")
let searchForm = document.getElementById("search")
let quote = document.querySelector(".quote")


let keyword = ""
let page;

async function fetchData() {
     


    let img = document.getElementsByClassName("img")
    // console.log(img);
    let imageBox = document.getElementById("img-box")
    if (page === 1) {
        imageBox.innerHTML = ""
        
    }
    keyword = input.value;
    let response = await fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&per_page=30&client_id=9xe-so5hYj6JojvOD3cEWzelSahwaxdZWvqulhO4Jo8`)
    let data = await response.json();
    let result = data.results;
    result.map(item => {
        let image = document.createElement('img')
        image.style.height = "13rem"
        image.style.width = "13rem"
        let link = item.urls.small;
        image.setAttribute("src", link)
        imageBox.appendChild(image)
        quote.remove();



    })

}
searchForm.addEventListener('submit', (e) => {
   
    e.preventDefault();
    page = 1;
    console.log(e);
    fetchData();

})
