const quizQuestions = [
    {
    q: "Hvad tror du samkørsel er godt for?", //første plads i arrayet, plads 0
    a: ["Benzin salget", "Vægten", "Miljøet", "Madspild"],
    correct: "Miljøet",
    point: 0
    },
    {  // anden plads i arrayet, plads 1
    q: "Hvad betyder samkørsel",
    a: ["Flere personer pendler sammen", "Køre ind i hinanden", "Spise sammen", "Se TV sammen"],
    correct: "Flere personer pendler sammen",
    point: 0
    },
    {  // tredje plads i arrayet, plads 2
    q: "Hvilken region overvejer at skabe et system til samkørsel?",
    a: ["Region Midtjylland", "Region Sjælland", "Region Hovedstaden"],
    correct: "Region Hovedstaden",
    point: 0
    }

    ];
var count = 0;
 var qElement =  document.querySelector(".p");
 var optionsElement = document.querySelector(".options")

 function runProgram(){

    qElement.innerHTML = quizQuestions[count].q

    var aElements = "<form>"

    quizQuestions[count].a.forEach(answer => {
        aElements += '<input type="radio" name="answer" value="'+ answer +'"> <label for="male">' + answer + '</label><br>'
    })

    optionsElement.innerHTML = aElements + ' <br><input type="submit" value="svar" id="svar"> </form>'

    checkAnswer();
 }

 function checkAnswer(){

    answerElement = document.querySelector("#svar")

    answerElement.addEventListener("click", function(e){

      e.preventDefault();

      var answer = document.querySelector('input[name="answer"]:checked').value

      if(answer == quizQuestions[count].correct){
          quizQuestions[count].point = 1;
      }

      count = count +1;

    if(quizQuestions.length == count){
       status();
    }else{
        runProgram();
    }
  })
 }

 function status(){

    qElement.innerHTML = "Point status"

    optionsElement.innerHTML = "";

    var samletPoint = 0;

    quizQuestions.forEach(answer => {
        samletPoint += answer.point
    })

   optionsElement.innerHTML = "Du fik " + samletPoint + " ud af " + quizQuestions.length + " mulige ";
}

runProgram();
