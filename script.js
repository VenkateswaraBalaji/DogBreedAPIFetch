const div = document.getElementById("pasteHere");

const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};

const apiUrl = "https://api.thedogapi.com/v1/breeds";

fetchData(apiUrl)
    .then((data) => {
        let htmlContent = "";
        for (const breed of data) {
            htmlContent += `<p>${breed.name}</p>`;
        }
        div.innerHTML = htmlContent;
    })
    .catch((error) => {
        console.error("An error occurred:", error);
    });
