function createTable(grupo) {
    return `
    <div class="table">
        <h1>Grupo ${grupo, table}</h1>
        <h4>Equipe</h4>
        <h5>PTS</h5>
        <h5>PJ</h5>
        <h5>VIT</h5>
        <h5>E</h5>
        <h5>DER</h5>
        <h5>GM</h5>
        <h5>GC</h5>
        <h5>SG</h5>
        <div>
            ${table}
        </div>
    </div>
    `

}

function createGrupo(pais, pts, pj, vit, e, der, gm, gc, sg) {
    return `
    <div class="table">
            <li>
                <img src="assets/icon-${pais}">
            </li>
            <p>${pts}</p>
            <p>${pj}</p>
            <p>${vit}</p>
            <p>${e}</p>
            <p>${der}</p>
            <p>${gm}</p>
            <p>${gc}</p>
            <p>${sg}</p>
        </div>
    `
}

document.querySelector("#tables").innerHTML = createTable("A", createGrupo("brazil", "9", "3", "3", "0", "0", "10", "2", "8"))