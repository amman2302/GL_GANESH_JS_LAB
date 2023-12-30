//@author Ganessh Kumar B
//Quiz Object
function Quiz(questions) {
    this.questions = questions;
    this.score = 0;
    this.questionIndex = 0;
}; //End of Quiz

//Question Object
function Question(questionText, choices, answer) {
    this.questionText = questionText;
    this.answer = answer;
    this.choices = choices;
}; //End of Question

Quiz.prototype.isEnded = function() {
        return this.questionIndex === this.questions.length;
    } //End of isEnded 

Question.prototype.isCorrectAnswer = function(userAnswer) {
        return this.answer === userAnswer;
    } //End of isCorrectAnswer

Quiz.prototype.getQuestionByIndex = function() {
        return this.questions[this.questionIndex]
    } //End of getQuesstionByIndex

Quiz.prototype.checkOptionWithAnswer = function(userAnswer) {
        if (this.getQuestionByIndex().isCorrectAnswer(userAnswer)) {
            this.score++;
        }
        this.questionIndex++;
    } //End of checkOptionWithAnswer

function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
}; //End of showProgress();

function loadQuestions() {
    if (quiz.isEnded()) {
        showFinalScores();
    } else {
        //sshow questions
        let question = quiz.getQuestionByIndex();
        console.log(question);
        var element = document.getElementById("question");
        element.innerHTML = question.questionText;
        //show options
        var choices = question.choices;
        for (var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            handleOptionButton("btn" + i, choices[i]);
        } //End of for loop
        //show progresss
        showProgress();
    } //End of else part
    //check if question is ended()
    //yes showresult
    //no loadQuestions
};

function showFinalScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2> Congratulations !!! <br/> Your score(s) is : " + quiz.score + " out of " + quiz.questions.length + ".<br/>  Mark percentage is: " + (quiz.score /
        questions.length * 100) + "%" + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

function handleOptionButton(id, choice) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.checkOptionWithAnswer(choice);
        loadQuestions();
    }
}; //End of handleOptionButton

let questions = [
    new Question("JavaScript supports", ["Functions", "XHTML", "CSS", "HTML"], "Functions"),
    new Question("Which language is used for styling web pages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
    new Question("Which is not a JavaScript Framework?", ["Python Script", "JQuery", "Django", "NodeJS"], "Django"),
    new Question("Which is used for Connect To Database?", ["PHP", "HTML", "JS", "All"], "PHP"),
    new Question("JavaScript is a ", ["Language", "Programming Language", "Development", "All"], "Programming Language")
];

let quiz = new Quiz(questions);
loadQuestions();