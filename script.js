// this will create hexa color randomlly
let boxBgColor = document.querySelectorAll(".box");

const random = function () {
    const hex = "0123456789ABCDEF";
    let color = "#";
    
    for (let i = 0; i < 6; i++) {
        color = color + hex[Math.floor(Math.random() * 16)];
    }
    return color;
};
boxBgColor.forEach((e) => {
    console.log(e);
    e.style.color = random();
});
boxBgColor.forEach((e) => {
    console.log(e);
    e.style.backgroundColor = random();
});






// let N1 = Math.floor(Math.random()*225);
// let N2 = Math.floor(Math.random()*225);
// let N3 = Math.floor(Math.random()*225);
//    console.log(N1)
//    console.log(N2)
//    console.log(N3)
// // boxBgColor.style.backgroundColor = `rgb(${N1},${N2},${N3})`
// boxBgColor.forEach(e => {
//     console.log(e);
//     e.style.backgroundColor = `rgb(${N1},${N2},${N3})`
// });
// boxBgColor.forEach(e => {
//     console.log(e);
//     e.style.color = `rgb(${N3},${N2},${N2})`
// });






//this will change color which we have given

// let box = document.querySelectorAll(".box")
// let colors=["red","green","Blue","Brown","black","grey","orange","purple"]
// let size = colors.length

// box.forEach(element => {
//     let random=Math.floor(Math.random()*size)
//     element.style.color=colors[random]
// });
// box.forEach(element => {
//     let random=Math.floor(Math.random()*size)
//     element.style.backgroundColor=colors[random]
// });
