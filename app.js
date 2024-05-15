let gDNumber = 2
let imageNumber = 0
let slideNumber = 1;


function changePage(page) {
    location.href = page
}

function imageChanger() {
    imageNumber = Math.floor(Math.random() * 10)
    console.log(codeImageId)
    console.log(imageNumber)
    switch (imageNumber) {
        case 0:
        case 1:
        case 2:
            codeImageId.className = ``
            codeImageId.classList.add(`codeImages`);
            codeImageId.classList.add(`js`);
            break;
        case 3:
        case 4:
        case 5:
            codeImageId.className = ``
            codeImageId.classList.add(`codeImages`);
            codeImageId.classList.add(`html`);
            break;
        case 6:
        case 7:
        case 8:
            codeImageId.className = ``
            codeImageId.classList.add(`codeImages`);
            codeImageId.classList.add(`css`);
            break;
        case 9:
            codeImageId.className = ``
            codeImageId.classList.add(`codeImages`);
            codeImageId.classList.add(`trio`);
            break;
        default:
            console.log(`sorry no work`);
    }
}

function gameDesignImages (){

    switch (gDNumber) {
        case 1:
            gameDesignExampleId.className = ``
            gameDesignExampleId.classList.add(`gameDesignExample`);
            gameDesignExampleId.classList.add(`mario-Blank`);
            gameDesignExampleId.classList.add(`fade`);
            gDNumber++
            break;
        case 2:
            gameDesignExampleId.className = ``
            gameDesignExampleId.classList.add(`gameDesignExample`);
            gameDesignExampleId.classList.add(`mario-Block`);
            gameDesignExampleId.classList.add(`fade`);
            gDNumber++
            break;
        case 3:
            gameDesignExampleId.className = ``
            gameDesignExampleId.classList.add(`gameDesignExample`);
            gameDesignExampleId.classList.add(`mario-Cliff`);
            gameDesignExampleId.classList.add(`fade`);
            gDNumber = 1
            break;
        default:
            console.log(`sorry no work`);
    }
}


let active = false;

