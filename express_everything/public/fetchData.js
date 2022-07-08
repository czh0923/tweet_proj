const tweetDiv = document.getElementById("tweetDiv");


myurl = "/../fetch";

async function getData(url) {
    let res = await fetch(url);
    let data = await res.json();

    console.log(data);

    return data;
}

const data = getData(myurl);

let p = document.createElement("p");
p.innerHTML = data;
tweetDiv.appendChild(p);