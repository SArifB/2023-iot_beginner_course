// fetch API

fetch("https://catfact.ninja/breeds?limit=20")
    .then((response) => response.json())
    .then((json) => {
        json.data.map((breed) => {
            console.log(breed.breed + " -- " + breed.country);
        });
        console.log("-----------------------------------");
    })
    .catch((error) => console.log(error));

console.log("------------------------------------");

async function fetchData() {
    try {
        const response = fetch("https://catfact.ninja/breeds?limit=20");
        const json = await (await response).json();
        json.data.map((breed) => {
            console.log(breed.breed + " -- " + breed.country);
        });
        console.log("-----------------------------------");
    } catch (error) {
        console.log(error);
    }
}

fetchData();
