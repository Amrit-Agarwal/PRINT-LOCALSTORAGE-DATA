const displayDIV = document.getElementById('localStorageData');

const allLocalStorageData = JSON.parse(localStorage.getItem("triggeredError"));

if (allLocalStorageData) {
    allLocalStorageData.forEach((data, index) => {
        const newDiv = document.createElement("div");
        let key, value;
        for (let chabi in data) {
            key = chabi;
            value = data[key];
        }
        newDiv.innerHTML = `<p><strong>${key.toUpperCase()}:</strong> ${value}</p>`;
        displayDIV.appendChild(newDiv);
    });
} else {
    displayDIV.innerHTML = "<p><strong> NO DATA FOUND IN LOCAL STORAGE </strong></p>";
}

