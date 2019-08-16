$(document).ready(function() {
  function useCase(userUseCase) {
    if (userUseCase === "mobile") {
      return {
        "swift": 0,
        "flutter": 0,
        "kotlin": 0
      };
    } else if (userUseCase === "web") {
      return {
        "java": 0,
        "python": 0,
        "javascript": 0
      };
    } else if (userUseCase === "data") {
      return {
        "python": 0,
        "r": 0,
        "matlab": 0
      };
    } else {
      return "Error. You didn't make a valid choice.";
    }


  }

  function userAnswers() {
    var q1_answer = $("input[name=q1]:checked").val();
    var q2_answer = $("input[name=q2]:checked").val();
    var q3_answer = $("input[name=q3]:checked").val();
    var q4_answer = $("input[name=q4]:checked").val();
    var q5_answer = $("input[name=q5]:checked").val();
    var all_answers = [q1_answer, q2_answer, q3_answer, q4_answer, q5_answer];
    return all_answers;
  }

function tallyScore(scoreMatrix, userAnswerArray){

}

  $("button").click(function(event) {

    var tallyMatrix = useCase(userAnswers()[0]);
  });
});
