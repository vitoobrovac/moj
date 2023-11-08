


fetch('https://dashboard.triatlon.hr/api/race?competitorId=1113')
.then(res => res.json())
.then(data => {
    data.forEach(user => {
        const markup = `<li>${user.position}</li>`;

        document.querySelector('.rezultat .bla').insertAdjacentHTML('beforeend', markup)
        
    });
console.log(data)
})


fetch('https://dashboard.triatlon.hr/api/race?competitorId=1113')
.then(res => res.json())
.then(data => {
    data.forEach(user => {
        const markup = `<li>${user.raceName}</li>`;

        document.querySelector('.rezultat .utrke').insertAdjacentHTML('beforeend', markup)
        
    });

})
