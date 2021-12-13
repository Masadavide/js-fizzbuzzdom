const scatola = document.getElementById('container')

//scrive da 1 a 100 in console.log e in "scatola (HTML)"

for(let i = 1; i <= 100; i++){
    if( (i%15 == 0) ){                    //Multipli di 3 e 5 FizzBuzz, di 3 Fizz, di 5 Buzz
        scatola.innerHTML += '<div class="box fizzbuzz_color"> FizzBuzz </div>';
    }else if( (i%3 == 0) ){
        scatola.innerHTML += '<div class="box fizz_color"> Fizz </div>'
    }else if( (i%5 == 0) ){
        scatola.innerHTML += '<div class="box buzz_color"> Buzz </div>'
    }else{
        scatola.innerHTML += '<div class="box">' + i + '</div>'
    }
    console.log('iterazione: ', i);
}




