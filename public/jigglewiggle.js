document.body.onmouseover = (event) => {
    event.target.style.backgroundColor = "#ffc107";
}

document.body.onmouseout = (event) => {
    event.target.style.backgroundColor = "";
}

document.body.onclick = (event) => {
    let content = event.target.innerHTML;

    const url = "https://us-central1-to-notion-project.cloudfunctions.net/sendToNotion";
    let data = {
        title: "Post from the To Notion Chrome Extension",
        header: "By Stephen Li :-)",
        text: content,
    };
    let params = {
        headers: {
            "content-type":"application/json; charset=UTF-8"
        },
        body: JSON.stringify(data),
        method: "POST",
    };
    fetch(url, params)
    .then(data => data.json())
    .then(json => console.log(json))
    .catch(err => console.error(err));

    event.target.style.backgroundColor = "#28a745";
    event.target.innerHTML = "(Sent!)";
    debugger;
};
