
function filterRagas(query) {
    query = query.toLowerCase();
    return carnatic_ragas.filter(raga => raga.name.toLowerCase().includes(query));
}

function onSearch() {
    const query = document.getElementById("search").value;
    const resultsList = document.getElementById("results");
    resultsList.innerHTML = "";

    const results = filterRagas(query);

    results.forEach(raga => {
        const li = document.createElement("li");
        li.textContent = raga.name;
        li.onclick = () => window.location.href = `raga.html?name=${encodeURIComponent(raga.name)}`;
        resultsList.appendChild(li);
    });

    if(results.length === 0 && query.length > 0){
        const li = document.createElement("li");
        li.textContent = "No match found";
        li.style.cursor = "default";
        resultsList.appendChild(li);
    }
}

