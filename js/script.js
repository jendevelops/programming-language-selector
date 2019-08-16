$(document).ready(function() {
  function userAnswers() {
    var q1_answer = $("input[name=q1]:checked").val();
    var q2_answer = $("input[name=q2]:checked").val();
    var q3_answer = $("input[name=q3]:checked").val();
    var q4_answer = $("input[name=q4]:checked").val();
    var q5_answer = $("input[name=q5]:checked").val();
    var all_answers = [q1_answer, q2_answer, q3_answer, q4_answer, q5_answer];
    return all_answers;
  }

  function suggestion(userAnswerArray) {
    if (userAnswerArray[0] === "mobile") {
      if (userAnswerArray[4] === "apple") {
        return "swift";
      } else if (userAnswerArray[4] === "android" && userAnswerArray[2] === "new") {
        return "flutter";
      } else if (userAnswerArray[4] === "android" && userAnswerArray[2] === "average" || userAnswerArray[2] === "old") {
        return "kotlin";
      } else {
        return "Something went wrong here... #mobile";
      }

    } else if (userAnswerArray[0] === "web") {
      if (userAnswerArray[3] === "first") {
        return "python";
      } else if (userAnswerArray[3] === "second") {
        return "java";
      } else if (userAnswerArray[3] === "third") {
        return "js";
      } else {
        return "Something went wrong here... #web";
      }

    } else if (userAnswerArray[0] === "data") {
      if (userAnswerArray[1] === "standardized") {
        return "python";
      } else if (userAnswerArray[3] === "first" || "second") {
        return "r";
      } else if (userAnswerArray[3] === "third") {
        return "matlab";
      } else {
        return "Something went wrong here... #data";
      }

    } else {
      return "Error. You didn't make a valid choice. Please make sure you have checked all your answers.";
    }
  }
  $(".quiz").click(function(event) {
    $(".header").hide();
    $("form").show();


  });
  $(".submit").click(function(event) {
    var sug = suggestion(userAnswers());
    $("#" + sug).show();
    $(".hidden").children().not("#" + sug).hide();

  });

});
