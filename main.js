const scatola = document.getElementById('container')

//scrive da 1 a 100 in console.log e in "scatola (HTML)"

for(let i = 1; i <= 100; i++){
    console.log('iterazione: ', i);
    scatola.innerHTML += '<div class="box">' + i + '</div>'
}

//milestone 1

