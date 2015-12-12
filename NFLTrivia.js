alert("This is an NFL fans trivia game!");

var questions = ["Which NFL receiver has the all-time record in receiving yards?",
				 "Who holds the most all-time rushing yards in Seattle Seahawks History?",
				 "In 1972, which NFL franchise had the only perfect season in the history of the game. This includes a Superbowl victory, completing their season at a perfect record of 17-0."];

var answers = ["Jerry Rice", "Shaun Alexander", 'Miami Dolphins'];

var correctResponses = ["Correct, and he is leading by almost 8,000 yards",
						"Correct, he had some very dominant years with the Seahawks",
						"Nice work, you clearly know your stuff"];

var incorrectResponses = ["Sorry, wrong answer. You must not have watched the NFL in the 90's",
						  "If you said Lynch, which is a great guess. However, you are too far into the present",
						   "Incorrect, however this is a tough question"];

var imageArray = ["./Images/JerryRice.jpg", "./Images/ShaunAlexander.jpg", "Images/1972MiamiDolphins.jpg"];

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


