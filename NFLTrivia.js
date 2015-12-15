alert("This is an NFL fans trivia game!");

function TriviaQuestions(question, correctResponses, correctImage, correctPrompt, incorrectPrompt){
	this.question = question;
	this.correctResponses = correctResponses;
	this.correctImage = correctImage;
	this.correctPrompt = correctPrompt;
	this.incorrectPrompt = incorrectPrompt;
	this.isGuessCorrect = function(guess){
		return correctResponses.includes(guess);
	};
};

var jerryValues = ['Jerry Rice', 'Rice', 'Jerry', 'jerry rice', 'jerry', 'rice', 'jr'];
var shaunValues = ['Shaun Alexander', 'Sean Alexander', 'Shawn Alexander', 'shaun alexander'];
var dolphinValues = ['Miami Dolphins', 'Dolphins', 'Miami', 'The Dolphins', 'miami dolphins'];

var jerryQuestion = new TriviaQuestions("Which NFL receiver has the all-time record in receiving yards?", jerryValues, "./Images/JerryRice.jpg", 
	"Correct, and he is leading by almost 8,000 yards", "Sorry, wrong answer. You must not have watched the NFL in the 90's");

var shaunQuestion = new TriviaQuestions("Who holds the most all-time rushing yards in Seattle Seahawks History?", shaunValues, "./Images/ShaunAlexander.jpg", 
	"Correct, he had some very dominant years with the Seahawks", "If you said Lynch, which is a great guess. However, you are too far into the present");

var dolphinQuestion = new TriviaQuestions("In 1972, which NFL franchise had the only perfect season in the history of the game. This includes a Superbowl victory, completing their season at a perfect record of 17-0.",
 dolphinValues, "Images/1972MiamiDolphins.jpg", "Nice work, you clearly know your stuff", "Incorrect, however this is a tough question");

var questions = [jerryQuestion, shaunQuestion, dolphinQuestion];
 
for (var i =0; i <questions.length; i ++) {
	var currentQuestion = questions[i];
	var guess = prompt(currentQuestion.question);
	if (currentQuestion.isGuessCorrect(guess)){
		alert(currentQuestion.correctPrompt);
		var el = document.getElementById("img"+i);
		console.log(el);
		el.innerHTML = '<img src="' + currentQuestion.correctImage + '" width = "400" height = "400" />';
	} else {
		alert(currentQuestion.incorrectPrompt);
		var el = document.getElementById("img" +i);
		el.innerHTML = '<img src =" ./Images/Frownie_Face.jpeg" width = "400" height = "400"/>';
	}
};	
