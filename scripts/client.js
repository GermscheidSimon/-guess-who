console.log('Here are all the available people:', people);

let thisRound = 'potato' // none shall know of the real first option


$(document).ready(pageLoad);

function pageLoad() {
    appendImgs();
    pickPerson();
  

    $('div').on('click', 'img', readData);
}

function appendImgs() {
    for (let person of people){
        let $img =
        $(`
        <div>
        <img src="https://github.com/${person.githubUsername}.png?size=250" alt="Profile image of ${person.name}">
        </img>
        </div>
        `);
        $('body').append($img);
        $img.data('username', person.githubUsername);
    }
}

function pickPerson() {
    let maxIndex = people.length - 1
    thisRound = people[randomNumber(0, maxIndex)];
   // return to user that they need to find the person whos username is given object username
   alert(thisRound.githubUsername)
   
}

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}

function readData() {
    let userAnswer = $(this).closest('div').data('username')
    console.log(userAnswer);
    
    // is the userselected img the person whos username was given originally
    if (thisRound.githubUsername === userAnswer) {
        alert('Great Job!');
    } else {
        alert('oops! wrong answer!');
    }
}