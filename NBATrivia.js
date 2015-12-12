alert("This is an NBA fans trivia game!");

var questions = ["What NBA player just signed a lifetime deal with NIKE",
				 "What NBA legend, who is 3rd all-time in scoring is retiring from the NBA this year?",
				 "The Chicago Bulls in 1995 had the most wins in a single season, how many wins did this team have?"];

var answers = ["Lebron James", "Kobe Bryant", '72'];

var correctResponses = ["Yes, a deal worth more than 500 million",
						"Is it going to be sad to see Kobe Bryant go, he has contributed a lot to the game of basketball",
						"Nice work, you clearly know your stuff"];

var incorrectResponses = ["Sorry, wrong answer. You must not have tuned into Sportscenter lately",
						  "You definitely have some work to do if you do not know that Kobe Bryant is retiring this year",
						   "Hey now, you can never forget records when it comes to the NBA"];

var imageArray = ["./Images/LBJ.jpeg", "./Images/Kobe.jpeg", "Images/95Bulls.jpg"];

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


