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
        result.textContent= " You should listen to these: <br> dancing queen <br> lay all your love on me <br> money! money! money! <br> gimmie! gimmie! gimmie!";
        
       }else if (answers.question1 === "slow"){
        result.textContent ="You would enjoy listening to these: <br> chiqutita <br> thank you for the music <br> sliping thorugh my fingers <br> angle eyes";
       }
       quizSection.appendChild(result);
    }

    
    