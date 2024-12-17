const box = document.querySelectorAll(".box");
const dragBox = document.querySelector("#dragBox");
const music = new Audio("./music/music.mp3")
// music.play();

dragBox.addEventListener("dragstart",() => {
    console.log("box draging start")
    // dragBox.classList.add("boxDragging")
    // boxDragging();
    Boxdrag = setInterval(() => {
        dragBox.classList.add("boxDragging");
    }, 0);
    music.play();
})

dragBox.addEventListener("dragend",() => {
    console.log("box draging end")
    dragBox.classList.remove("boxDragging");
    clearInterval(Boxdrag)
    music.pause();
})

dragBox.addEventListener("drag",() => {
    console.log("box dragging")
})

box.forEach((el) => {
    el.addEventListener("dragenter",() => {
        console.log("dragBox enter")
        el.classList.add("boxIn");
    })
    el.addEventListener("dragover",(e) => {
        e.preventDefault();
        el.addEventListener("drop",() => {
            el.appendChild(dragBox);
            el.classList.remove("boxIn")
        })
    })
    el.addEventListener("dragleave",() => {
        console.log("dragBox leave")
        el.classList.remove("boxIn");
    })
})