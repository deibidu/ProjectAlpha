const ranking = [
    { position: 1, name: 'Pepito', scoring: 5 },
    { position: 2, name: 'Pep', scording: 4 },
    { position: 3, name: 'Pepita', scording: 4 },
    { position: 4, name: 'Pepa', scording: 3 },
    { position: 5, name: 'Pepe', scording: 1 },
]
const rankingNode = document.querySelector('.ranking');
let rankingHTML = '';
ranking.forEach(positionInfo => {
    const poinstLabel = positionInfo.scoring === 1 ? 'punto' : 'puntos';


    rankingHTML += `<div>
    <div><strong>${positionInfo}.</strong></div>
    <div>${positionInfo.name}</div>
</div>
<div>
<div>${positionInfo.scoring} ${poinstLabel}</div>
</div>`;
})
rankingNode.innerHTML = rankingHTML;