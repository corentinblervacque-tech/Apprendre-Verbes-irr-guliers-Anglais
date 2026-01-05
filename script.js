const verbes = [
    { base: "be", preterit: "was/were", participe: "been", traduction: "être" },
    { base: "become", preterit: "became", participe: "become", traduction: "devenir" },
    { base: "begin", preterit: "began", participe: "begun", traduction: "commencer" }
];

function showSection(id) {
    document.getElementById('section-cours').style.display = id === 'cours' ? 'block' : 'none';
    document.getElementById('section-exercice').style.display = id === 'exercice' ? 'block' : 'none';
    document.getElementById('section-evaluation').style.display = id === 'evaluation' ? 'block' : 'none';
}

function renderTable() {
    const tbody = document.getElementById('table-body-cours');
    tbody.innerHTML = verbes.map(v => `<tr><td>${v.base}</td><td>${v.preterit}</td><td>${v.participe}</td><td>${v.traduction}</td></tr>`).join('');
}

function searchVerb() {
    const input = document.getElementById('search').value.toLowerCase();
    const filtered = verbes.filter(v => v.base.toLowerCase().includes(input) || v.traduction.toLowerCase().includes(input));
    const tbody = document.getElementById('table-body-cours');
    tbody.innerHTML = filtered.map(v => `<tr><td>${v.base}</td><td>${v.preterit}</td><td>${v.participe}</td><td>${v.traduction}</td></tr>`).join('');
}

window.onload = renderTable;
