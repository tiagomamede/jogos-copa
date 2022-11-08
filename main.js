function createGame(team1, hour, team2) {
    return `
        <li>
            <img src="./assets/icone-${team1}.svg" alt="${team1}">
            <strong> ${hour} </strong>
            <img src="./assets/icone-${team2}.svg" alt="${team2}">
        </li>
    `
}

let delay = -0.3;
function createCard(date, day, games) {
    delay = delay + 0.3;
    return `
        <div class="card" style="animation-delay: ${delay}s">
            <h2> ${date} <span> ${day} </span> </h2>
            <ul>
                ${games}
            </ul>
        </div>
    `
}

document.querySelector("#cards").innerHTML = `
    <main id="cards">
        ${createCard('24/11', 'quinta', createGame('brasil', '16:00', 'servia'))}
        ${createCard('28/11', 'segunda', createGame('brasil', '13:00', 'suica'))}
        ${createCard('02/12', 'sexta', createGame('brasil', '16:00', 'camaroes'))}
    </main>
`