const imageArray = ['../images/royol1.jpg','../images/royal2.jpg','../images/royal3.jpg','../images/royal4.jpg'];
const container = document.querySelector('.container');


let index = 0;

function forward() {
    index++;
    if(index > imageArray.length-1) {
        index = 0;
    }
    alert(imageArray[index])
    container.style.backgroundImage = `url('${imageArray[index]}')`

}

function backward() {
    index--;
    if(index < 0) {
        index = imageArray.length-1;
    }
    container.style.backgroundImage = `url('${imageArray[index]}')`;
}




// function forward() {
//     if (index >= imageArray.length) {
//         index = 0;
//     }else {
//         index++;
//     }
//     container.style.backgroundImage = `url(../images/${imageArray[index]})`;
// }

// function backward() {
//     if (index < 0) {
//         index= 3;         
//     }else {
//         index--;
//     }
//     container.style.backgroundImage = `url(../images/${imageArray[index]})`;
// }


