// Code your solutions in this file

function writeCards(names, event){
    const newArray = [];
    for(let i = 0; i < names.length; i++){
    newArray[i] = `Thank you, ${names[i]}, for the wonderful surprise gift!`
    }
    return newArray
}


function countDown(i){
    while(i >= 0){
        console.log(i);
        i--;
    }
}

