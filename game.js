
let time = 60;
let score = 0;
let num = 0;
let newHit = () => {
    num = Math.floor(Math.random() * 10)
    hitNo.textContent = num
}
let timer = document.getElementById("timerVal")
let hitNo = document.getElementById("hitNo")
let scoreCount = document.getElementById("scoreCount")
let bubbleIvnebt = document.getElementById("pbtm").addEventListener("click", function (deta) { 
        if (num === Number(deta.target.textContent)) {
            console.log(deta.target.textContent)
            scoreVal()
            newHit()
            bubble()
        }
})

let bubble = () => {
    var clutter = "";
    for (let i = 0; i < 120; i++) {
        var rn = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${rn}</div>`
    }
    document.getElementById("pbtm").innerHTML = clutter
}
let runTime = () => {
    setInterval(() => {
        if (time > 0) {
            time--
            timer.textContent = time
        } else {
            clearInterval(runTime)
            document.getElementById("pbtm").innerHTML=`<h1> GAME OVER <br>
            Your Score is ${score}</h1>`
            
            
            document.getElementById("pbtm").style.color="red"
        }
    }, 1000);
}

let scoreVal = () => {
    score += 10
    scoreCount.textContent = score
}
newHit()
runTime()
bubble()
