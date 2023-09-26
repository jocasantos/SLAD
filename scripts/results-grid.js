let resultsHTML = ``;

results.forEach((result) => {
    resultsHTML += `
        <div class="results-grid">
            <div class="date">${result.date}</div>
            <div class="age-group">${result.age}</div>
            <div class="competion">${result.competion}</div>
            <div class="logo"><img class="logo-1" src="${result.logo1}"></div>
            <div class="team team-1">${result.team1}</div>
            <div class="result result-1">${result.score1}</div>     
            <div class="logo"><img class="logo-2" src="${result.logo2}"></div>
            <div class="team team-2">${result.team2}</div>
            <div class="result result-2">${result.score2}</div>         
        </div>
    `;
});

document.querySelector('.js-results-grid').
innerHTML = resultsHTML; 