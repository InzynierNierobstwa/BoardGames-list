let fizzbuzz = document.getElementById('fizzbuzz');


fizzbuzz.innerText = fizzBuzz();

function fizzBuzz(){
    let count = '';
    for(let i = 0; i <= 100; i++){
        if(i % 3 === 0){
            count += 'fizz \n';
        } else if(i % 5 ===0){
            count += 'buzz\n';
        } else {
            count += i + '\n';
        }
    }
    return count;
}