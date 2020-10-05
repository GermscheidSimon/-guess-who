console.log('Here are all the available people:', people);


$(document).ready(pageLoad);

function pageLoad() {
    appendImgs();
}

function appendImgs() {
    for (let person of people){
        let img =
        $(`
        <div>
        <img src="https://github.com/${person.githubUsername}.png?size=250" alt="Profile image of ${person.name}">
        </img>
        </div>
        `);
        img.data('username', person.githubUsername);
        $('body').append(img);
    }
}

