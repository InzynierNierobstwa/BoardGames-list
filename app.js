document.addEventListener('DOMContentLoaded', function(){

    const gameForm = document.querySelector('.formula--addRemove');
    const gameList = document.querySelector('.container__list--addRemove');

    let gameTable = [];

    gameForm.addEventListener('submit', function(e){
        e.preventDefault();
        const textArea = this.querySelector('.formula__input--addRemove');
        if (textArea.value !== '' && gameTable.indexOf(textArea.value.toUpperCase()) === -1){
            addBoardGame(textArea.value);
            gameTable.push(textArea.value.toUpperCase());
            textArea.value = '';
            console.log(gameTable);// sprawdza czy nie jest wpisywany pusty element albo już znajdujący się w tabeli
        }
    });

    gameList.addEventListener('click', function(e){
        if(e.target.classList.contains('formula__button--minus')){
            const word = e.target.parentElement.parentElement.nextElementSibling;// xD
            removeFromArray(gameTable, word.innerText.toUpperCase());
            e.target.closest('.container__list--element').remove();
            console.log(gameTable);
        }//usuwa element ze strony i z tablicy pozwalajac na ponowne wpisane go do listy
    });

    function removeFromArray(array, word){
        const index = array.indexOf(word);
        array.splice(index, 1);
    }
    //funkcja ktora usprawnia szukanie - male/duze litery

    function addBoardGame(text){
        console.log('dodano zadanie');

        const newGame = document.createElement('div');
        newGame.classList.add('container__list--element');//caly element dodany

        const newGameBar = document.createElement('div');
        newGameBar.classList.add('container__list--bar'); //belka

        const newGameDate = document.createElement('div');
        newGameDate.classList.add('container__list--date');
        const date = new Date();
        const dateText = date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear() + ' godz. ' + date.getHours() + ':' + date.getMinutes();
        newGameDate.innerText = dateText; //godzina wpierw dodana do zmiennej datetext a potem zamieniona na string

        const deleteGame = document.createElement('button');
        deleteGame.classList.add('container__list--delete');
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

    function addGame(text){
        console.log('dodano rozgrywke')

        const newGame = document.createElement('div');
        newGame.classList.add('container__list--elemet');//caly element dodany

        const newGameBar = document.createElement('div');
        newGameBar.classList.add('container__list--bar')

        
    }

});
