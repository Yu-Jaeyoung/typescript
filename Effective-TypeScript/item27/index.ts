// 3장 타입 추론 - 함수형 기법과 라이브러리로 타입 흐름 유지하기

const csvData = "...";
const rawRows = csvData.split('\n');
const headers = rawRows[0].split(',');

const rowsA = rawRows.slice(1).map(rowStr => {
    const row: { [column: string]: string } = {};
    rowStr.split(',').forEach((val, j) => {
        row[headers[j]] = val;
    })
    return row;
})

const rowsB = rawRows.slice(1).map(rowStr =>
    rowStr.split(',').reduce(
        (row, val, i) => (row[headers[i]] = val, row), {} as { [column: string]: string }
    )
)

interface BasketballPlayer {
    name: string;
    team: string;
    salary: number;
}

declare const rosters: { [team: string]: BasketballPlayer };

// let allPlayers = [];
// for (const players of Object.values(rosters)) {
//     allPlayers = allPlayers.concat(players);
// }

// let allPlayers:BasketballPlayer[] = [];
// for (const players of Object.values(rosters)) {
//     allPlayers = allPlayers.concat(players);
// }

const allPlayers = Object.values(rosters).flat();

const teamToPlayers: { [team: string]: BasketballPlayer[] } = {};

for (const player of allPlayers) {
    const { team } = player;
    teamToPlayers[team] = teamToPlayers[team] || [];
    teamToPlayers[team].push(player);
}

for (const players of Object.values(teamToPlayers)) {
    players.sort((a,b) => b.salary - a.salary);
}

const bestPaid = Object.values(teamToPlayers).map(players => players[0]);
bestPaid.sort((playerA, playerB) => playerB.salary - playerA.salary);
console.log(bestPaid);

