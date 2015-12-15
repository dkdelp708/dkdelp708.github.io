alert("This is an NBA fans trivia game!");

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

var lbjValues = ['LBJ', 'Lebron James', 'Lebron', 'lbj', 'lebron james', 'lbj', 'lebron'];
var kobeValues = ['Kobe Bryant', 'Kobe', 'kobe bryant', 'kobe'];
var bullsValues = ['72', 'seventy-two', 'seventy two'];

var lebronQuestion = new TriviaQuestions("What NBA player just signed a lifetime deal with NIKE", lbjValues,"./Images/LBJ.jpeg", 
	"Yes, a deal worth more than 500 million", "Sorry, wrong answer. You must not have tuned into Sportscenter lately");

var kobeQuestion = new TriviaQuestions("What NBA legend, who is 3rd all-time in scoring is retiring from the NBA this year?", kobeValues, 
	"./Images/Kobe.jpeg", "It going to be sad to see Kobe Bryant go, he has contributed a lot to the game of basketball", 
	"You definitely have some work to do if you do not know that Kobe Bryant is retiring this year");

var bullsQuestion = new TriviaQuestions("The Chicago Bulls in 1995 had the most wins in a single season, how many wins did this team have?", 
	bullsValues, "./Images/95Bulls.jpg", "Nice work, you clearly know your stuff", "Hey now, you can never forget records when it comes to the NBA");

var questions = [lebronQuestion, kobeQuestion, bullsQuestion];
 
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

 
