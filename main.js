console.log("playerName")

let score = 0


let trivia = [
    {
        question: "2+2?",
        answer: "4"
    },
    {
        question: "Capital de Francia",
        answer: "Paris"
    },
    {
        question: "Rio mas largo del mundo",
        answer: "Nilo"
    },
    {
    question: "5 elevado a la 2?",
    answer: "25"
    }
]


const askQuestion = (question, answer)=> {
    let answerUser = prompt(question)
    if (answerUser === answer) {
        alert("Correcto")
    }else {
        alert("incorrecto")
    }
}

let index = 0;

document.getElementById("start").addEventListener("click", ()=>{
    document.getElementById("question").innerText = trivia[index].question

})

document.getElementById("Verify").addEventListener("click", ()=>{
    let userAnswer = document.getElementById("answer").value
     console.log (userAnswer)
     if(userAnswer.toLowerCase() === trivia[index].answer.toLowerCase()){
        score++
        document.getElementById("result").ineerText = "Correcto!"
     }else {
        document.getElementById("result").innertext = "Incorrecto!"
     }
     index++
     document.getElementById("score").innerText = "Puntaje: " + score
})
