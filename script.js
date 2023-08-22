const form = document.getElementById("quiz");
form.addEventListener("submit", submitted);

function submitted(event) {
    event.preventDefault();
    const answers = {
        question1: document.querySelector('input[name="q1"]:checked').value
    }
    
    display(answers);
}
    function display(answers) {
        const quizSection = document.getElementByld("quiz-wrapper");
        quizSection.innerHTML = "";
       const answerHeader = document.createElement("h1");
       answerHeader.textContent = "Your results are";
       quizSection.appendChild(answerHeader);
       const result = document.createElement('p');
       if(answers.question1=== "upbeat") { 
        result.textContent= " You should listen to these: dancing queen, lay all your love on me, money! money! money!, and gimmie! gimmie! gimmie!";
        
       }else if (answers.question1 === "slow"){
        result.textContent ="You would enjoy listening to these: chiqutita, thank you for the music, sliping thorugh my fingers, and angle eyes";
       }
       quizSection.appendChild(result);
    }

    
    