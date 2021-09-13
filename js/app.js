const imageArray = ['../images/royol1.jpg','../images/royol2.jpg','../images/royol3.jpg','../images/royol4.jpg'];
const container = document.querySelector('.container');
console.log(container)

let index = 0;
function forward() {
    index++;
    if(index > imageArray.length-1) {
        index = 0;
    }
   container.style.backgroundImage = `url("${imageArray[index]}")`
}

function backward() {
    index--;
    if(index < 0) {
        index = imageArray.length-1;
    }
    container.style.backgroundImage = `url("${imageArray[index]}")`;
}
forward()       //initial loads any one image




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


