function playGame(playerInput) {
    clearMessages();

    function getMoveName(argMoveId) {
        if (argMoveId == 1) {
            return 'kamień';
        } else if (argMoveId == 2) {
            return 'papier';
        } else if (argMoveId == 3) {
            return 'nożyce';
        }

        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
    }

    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    let argComputerMove = getMoveName(randomNumber);

    printMessage('Mój ruch to: ' + argComputerMove);

    /*let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.'); */

    console.log('Gracz wpisał: ' + playerInput);

    let argPlayerMove = getMoveName(playerInput);

    printMessage('Twój ruch to: ' + argPlayerMove);

    function displayResult(argComputerMove, argPlayerMove) {

        if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
            printMessage('Ty wygrywasz!');
        }

        else if (argComputerMove == 'kamień' && argPlayerMove == 'kamień') {
            printMessage('Remis.');
        }

        else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
            printMessage('Przegrałeś...');
        }

        else if (argComputerMove == 'kamień' && argPlayerMove == 'nieznany ruch') {
            printMessage('Error...');
        }

        if (argComputerMove == 'papier' && argPlayerMove == 'papier') {
            printMessage('Remis.');
        }

        else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
            printMessage('Przegrałeś...');
        }

        else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
            printMessage('Ty wygrywasz!');
        }

        else if (argComputerMove == 'papier' && argPlayerMove == 'nieznany ruch') {
            printMessage('Error...');
        }

        if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
            printMessage('Przegrałeś...');
        }

        else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
            printMessage('Ty wygrywasz!');
        }

        else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') {
            printMessage('Remis.');
        }

        else if (argComputerMove == 'nożyce' && argPlayerMove == 'nieznany ruch') {
            printMessage('Error...');
        }
    }
    console.log('wynik funkcji:' + displayResult);
    displayResult(argComputerMove, argPlayerMove);

}

let rockButton = document.getElementById('play-rock');
rockButton.addEventListener('click', rockClicked);
function rockClicked() {
    playGame(1);
}

let paperButton = document.getElementById('play-paper');
paperButton.addEventListener('click', paperClicked);
function paperClicked() {
    playGame(2);
}

let scissorsButton = document.getElementById('play-scissors');
scissorsButton.addEventListener('click', scissorsClicked);
function scissorsClicked() {
    playGame(3);
}