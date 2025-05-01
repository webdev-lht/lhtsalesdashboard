const callsUrl = "https://script.google.com/macros/s/AKfycbyGnnjQDUxrCtc8us-b5MW_EFG5uHcyc95ayIx6IqN6ka1fA-ChGIOFiD_yHWpj9xTmnQ/exec";

fetch(callsUrl)
    .then(res => res.json())
    .then(data => {
        document.getElementById("callsMade").textContent = data["Calls Made"];
        document.getElementById("callsReceived").textContent = data["Calls Received"];
    })
    .catch(err => console.error("Failed to load Calls data:", err));
