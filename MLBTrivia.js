alert("This is an MLB fans trivia game!");

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

var bondsValues = ['Barry Bonds', 'Barry', 'Bonds', 'barry bonds', 'barry', 'bonds', 'BB'];
var griffeyValues = ['Ken Griffey Jr.', 'Ken Griffey Jr', 'Ken Griffey', 'Griffey', 'ken griffery jr', 'griffey'];
var marinersWinsValues = ['2001'];

var bondsQuestion = new TriviaQuestions("Which MLB player has the most home runs hit all-time?", bondsValues, "./Images/barrybonds.jpg", 
	"Correct, a record he accomplished in 2007", "Sorry, wrong answer");

var griffeyQuestion = new TriviaQuestions("Who has the most home runs all-time in Seattle Mariners History?", griffeyValues, "./Images/griffey.jpg", 
	"Correct, he had some incredible offensive years with the Mariners", "Incorrect, I would say that you were not a Mariners fan in the 90s");

var marinersWinsQuestion = new TriviaQuestions("In what year did the Seattle Mariners have 116 wins?", marinersWinsValues, "./Images/2001Mariners.jpg", 
	"Nice work, that was a fun season to watch", "Incorrect, close but no cigar");

var questions = [bondsQuestion, griffeyQuestion, marinersWinsQuestion];
 
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
