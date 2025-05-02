const callsUrl = "https://script.google.com/macros/s/AKfycbyGnnjQDUxrCtc8us-b5MW_EFG5uHcyc95ayIx6IqN6ka1fA-ChGIOFiD_yHWpj9xTmnQ/exec";
const textsUrl = "https://script.google.com/macros/s/AKfycbxvBAlvnGl46E74y7nNoNIqBiB1qyuFuEx0_etB7xYK_7geGWijflvCMiC9mfbPUZAO_g/exec";

fetch(callsUrl)
    .then(res => res.json())
    .then(data => {
        document.getElementById("callsMade").textContent = data["Calls Made"];
        document.getElementById("callsReceived").textContent = data["Calls Received"];
    })
    .catch(err => console.error("Failed to load Calls data:", err));

fetch(textsUrl)
    .then(res => res.json())
    .then(data => {
        document.getElementById("textsSent").textContent = data["Texts Sent"];
        document.getElementById("textsReceived").textContent = data["Texts Received"];
    })
    .catch(err => console.error("Failed to load Texts data:", err));
