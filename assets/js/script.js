const callsUrl = "https://script.google.com/macros/s/AKfycbzFU8_3JDGl4jOJqVoEtdz7-ATt5QL0lLsNciaCx7pE2W2X9_LOGoVX97n_X3423mOB/exec";

fetch(callsUrl)
    .then(res => res.json())
    .then(data => {
        document.getElementById("callsMade").textContent = data["Calls Made"];
        document.getElementById("callsReceived").textContent = data["Calls Received"];
    })
    .catch(err => console.error("Failed to load Calls data:", err));
