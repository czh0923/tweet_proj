const tweetDiv = document.getElementById("tweetDiv");


myurl = "https://airtable-middle.herokuapp.com/fetch";

async function getData(url) {
    let res = await fetch(url);
    let data = await res.json();

    console.log(data);

    let p = document.createElement("p");
    p.innerHTML = data.names;
    tweetDiv.appendChild(p);

}

getData(myurl);
