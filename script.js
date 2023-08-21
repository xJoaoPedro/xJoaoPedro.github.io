let setaPrabaixo = true
let seta = document.getElementById("arrowIcon")

function inverterSeta(){
    if (setaPrabaixo){
        seta.style.transform="rotate(180deg)"
        setaPrabaixo = false
    } else {
        seta.style.transform="rotate(0deg)"
        setaPrabaixo = true
    }
}

function resetarSeta(){
    seta.style.transform="rotate(0deg)"
    setaPrabaixo = true
}