$("#kanye_button").click(() => {
    getData("https://api.kanye.rest/").then((result) => {
        $("#kanye_text").text(result["quote"]);
    });
});

$("#weather_button").click(() => {
    getData("/weather", "POST").then((result) => {
        var html_to_append = `<img src=${result["image_url"]}>`
        html_to_append += `<p>In Tampa, FL:<br>The current temperature is ${result["temp"]} °F`
        html_to_append += ` with ${result["weather"]}</p>`
        $("#weather_text").html(html_to_append)

        // image_url = result["image_url"];
        // var temp = result["temp"];
        // var weather = result["weather"];
    });

});

async function getData(url = '', met = "GET", data = {}) {
    const response = await fetch(url, {
        method: met,
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
    });
    return response.json();
}