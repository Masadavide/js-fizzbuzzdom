const scatola = document.getElementById('container')

//scrive da 1 a 100 in console.log e in "scatola (HTML)"

for(let i = 1; i <= 100; i++){
    console.log('iterazione: ', i);
    scatola.innerHTML += '<div class="box">' + i + '</div>'
    if( (i%3 == 0) && (i%5 == 0) && (i !=0) ){                    //milestone 1, multipli di 3 e 5 FizzBuzz, di 3 Fizz, di 5 Buzz
        scatola.innerHTML += '<div class="box fizzbuzz_color">' + i + '</div>'
    }else{

    }
}




