alert("This is an MLB fans trivia game!");

var questions = ["Which MLB player has the most home runs hit all-time?",
				 "Who has the most home runs all-time in Seattle Mariners History?",
				 "In what year did the Seattle Mariners have 116 wins?"];

var answers = ["Barry Bonds", "Ken Griffey Jr", "2001"];

var correctResponses = ["Correct, a record he accomplished in 2007",
						"Correct, he had some incredible hitting years with the Mariners",
						"Nice work, that was a fun season to watch"];

var incorrectResponses = ["Sorry, wrong answer",
						  "Incorrect, I would say that you were not a Mariners fan in the 90s",
						   "Incorrect, close but no cigar"];

var imageArray = ["./Images/barrybonds.jpg", "./Images/griffey.jpg", "./Images/2001Mariners.jpg"];

for (var i =0; i <questions.length; i ++) {
	var guess = prompt(questions[i]);
	if (guess === answers[i]) {
		alert(correctResponses[i]);
		var el = document.getElementById("img"+i);
		console.log(el);
		el.innerHTML = '<img src="' + imageArray[i] + '" />';
	}
	else {
		alert(incorrectResponses[i]);
		var el = document.getElementById("img" +i);
		el.innerHTML = '<img src =" ./Images/Frownie_Face.jpeg"/>';
	}
};	


