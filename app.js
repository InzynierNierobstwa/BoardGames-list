document.addEventListener('DOMContentLoaded', function(){

    const gameForm = document.querySelector('.formula--addRemove');
    const gameList = document.querySelector('.container__list--addRemove');

    let gameTable = [];

    gameForm.addEventListener('submit', function(e){
        e.preventDefault();
        const textArea = this.querySelector('.formula__input--addRemove');
        if (textArea.value !== ''){
            addGame(textArea.value);
            addGameTable(textArea.value);
            textArea.value = '';
        }
    })

    function addGameTable(text){
        gameTable.push(text);
        console.log(gameTable);
    }

    //dodawać gry do tablicy i usuwać gry z tablicy, sprawdzać czy gra jest już wpisana

    function addGame(text){
        console.log('dodano zadanie');

        const newGame = document.createElement('div');
        newGame.classList.add('container__list--element')//element dodany

        const newGameBar = document.createElement('div');
        newGameBar.classList.add('container__list--bar'); //belka

        const newGameDate = document.createElement('div');
        newGameDate.classList.add('container__list--date');
        const date = new Date();
        const dateText = date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear() + ' godz. ' + date.getHours() + ':' + date.getMinutes();
        newGameDate.innerText = dateText; //godzina wpierw dodana do zmiennej datetext a potem zamieniona na string

        const deleteGame = document.createElement('div');
        deleteGame.classList.add('.container__list--delete');
        deleteGame.innerHTML = "<button type='button' name='minusBtn' class='formula__button formula__button--minus'> X </button>";

        newGameBar.appendChild(newGameDate);
        newGameBar.appendChild(deleteGame);

        const gameText = document.createElement('div');
        gameText.classList.add('container__list--text');
        gameText.innerText = text;

        newGame.appendChild(newGameBar);
        newGame.appendChild(gameText);

        gameList.appendChild(newGame);
    }

})