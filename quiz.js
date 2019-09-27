// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const romajiQ = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const romajiA = document.getElementById("romajiA");
const romajiB = document.getElementById("romajiB");
const romajiC = document.getElementById("romajiC");
const romajiD = document.getElementById("romajiD");
var tCa = false;
var tCi = false;
var tCu = false;
var tCe = false;
var tCo = false;
//var rand = false;
var romaji = false;
const scoreDiv = document.getElementById("scoreContainer");

//CREATES THE QUESTIONS//////////////////////////////////////////////
var questionsSet1 = [
	{
		question:"What is the corresponding romaji?",
		imgSrc : "images/a.png",
		choiceA: "a",
		choiceB: "ka",
		choiceC: "ra",
		choiceD: "ha",
		correct: "A"
	},
	{
		question:"What is the corresponding romaji?",
		imgSrc : "images/ka.png",
		choiceA: "ya",
		choiceB: "ta",
		choiceC: "wa",
		choiceD: "ka",
		correct: "D"
	},
	{
		question:"What is the corresponding romaji?",
		imgSrc : "images/sa.png",
		choiceA: "na",
		choiceB: "ma",
		choiceC: "sa",
		choiceD: "ha",
		correct: "C"
	},
	{
		question:"What is the corresponding romaji?",
		imgSrc : "images/ta.png",
		choiceA: "ra",
		choiceB: "a",
		choiceC: "na",
		choiceD: "ta",
		correct: "D"
	},
	{
		question:"What is the corresponding romaji?",
		imgSrc : "images/na.png",
		choiceA: "ka",
		choiceB: "ta",
		choiceC: "ya",
		choiceD: "na",
		correct: "D"
	},
	{
		question:"What is the corresponding romaji?",
		imgSrc : "images/ha.png",
		choiceA: "ka",
		choiceB: "ha",
		choiceC: "ya",
		choiceD: "na",
		correct: "B"
	},
	//SWAPS QUESTIONS TO ROMAJI//////////////////////////////////////
	{
		question:"What is the corresponding Hiragana?",
		romajiQ: "ma",
		romajiA: 'images/a.png',
		romajiB: "images/ma.png",
		romajiC: "images/ya.png",
		romajiD: "images/ka.png",
		correct: "B"
	},
	{
		question:"What is the corresponding Hiragana?",
		romajiQ: "ya",
		romajiA: "images/ha.png",
		romajiB: "images/ra.png",
		romajiC: "images/sa.png",
		romajiD: "images/ya.png",
		correct: "D"
	},
	{
		question:"What is the corresponding Hiragana?",
		romajiQ: "ra",
		romajiA: "images/ta.png",
		romajiB: "images/ra.png",
		romajiC: "images/ma.png",
		romajiD: "images/wa.png",
		correct: "B"
	},
	{
		question:"What is the corresponding Hiragana?",
		romajiQ: "wa",
		romajiA: "images/na.png",
		romajiB: "images/ra.png",
		romajiC: "images/wa.png",
		romajiD: "images/a.png",
		correct: "C"
	}
];
var questionsSet2 = [
	{
		question:"What is the corresponding romaji?",
		imgSrc : "images/i.png",
		choiceA: "ni",
		choiceB: "hi",
		choiceC: "ri",
		choiceD: "i",
		correct: "D"
	},
	{
		question:"What is the corresponding romaji?",
		imgSrc : "images/ki.png",
		choiceA: "shi",
		choiceB: "ki",
		choiceC: "chi",
		choiceD: "ni",
		correct: "B"
	},
	{
		question:"What is the corresponding romaji?",
		imgSrc : "images/shi.png",
		choiceA: "hi",
		choiceB: "ki",
		choiceC: "shi",
		choiceD: "ri",
		correct: "C"
	},
	{
		question:"What is the corresponding romaji?",
		imgSrc : "images/chi.png",
		choiceA: "ni",
		choiceB: "i",
		choiceC: "shi",
		choiceD: "chi",
		correct: "D"
	},
	{
		question:"What is the corresponding romaji?",
		imgSrc : "images/ni.png",
		choiceA: "ni",
		choiceB: "i",
		choiceC: "mi",
		choiceD: "hi",
		correct: "A"
	},
	{
		question:"What is the corresponding romaji?",
		imgSrc : "images/hi.png",
		choiceA: "ri",
		choiceB: "hi",
		choiceC: "mi",
		choiceD: "ki",
		correct: "B"
	},
	// SWAP QUESTIONS TO ROMAJI/////////////////////////////////////
	{
		question:"What is the corresponding Hiragana?",
		romajiQ: "mi",
		romajiA: 'images/hi.png',
		romajiB: "images/mi.png",
		romajiC: "images/chi.png",
		romajiD: "images/ki.png",
		correct: "B"
	},
	{
		question:"What is the corresponding Hiragana?",
		romajiQ: "ri",
		romajiA: "images/hi.png",
		romajiB: "images/i.png",
		romajiC: "images/shi.png",
		romajiD: "images/ri.png",
		correct: "D"
	},
	{
		question:"What is the corresponding Hiragana?",
		romajiQ: "shi",
		romajiA: "images/shi.png",
		romajiB: "images/chi.png",
		romajiC: "images/mi.png",
		romajiD: "images/ni.png",
		correct: "A"
	},
	{
		question:"What is the corresponding Hiragana?",
		romajiQ: "chi",
		romajiA: "images/i.png",
		romajiB: "images/ni.png",
		romajiC: "images/chi.png",
		romajiD: "images/ri.png",
		correct: "C"
	}
];
var questionsSet3 = [
	{
		question:"What is the corresponding romaji?",
		imgSrc : "images/u.png",
		choiceA: "ku",
		choiceB: "u",
		choiceC: "tsu",
		choiceD: "mu",
		correct: "B"
	},
	{
		question:"What is the corresponding romaji?",
		imgSrc : "images/ku.png",
		choiceA: "nu",
		choiceB: "fu",
		choiceC: "mu",
		choiceD: "ku",
		correct: "D"
	},
	{
		question:"What is the corresponding romaji?",
		imgSrc : "images/su.png",
		choiceA: "mu",
		choiceB: "nu",
		choiceC: "su",
		choiceD: "ru",
		correct: "C"
	},
	{
		question:"What is the corresponding romaji?",
		imgSrc : "images/tsu.png",
		choiceA: "fu",
		choiceB: "ru",
		choiceC: "yu",
		choiceD: "tsu",
		correct: "D"
	},
	{
		question:"What is the corresponding romaji?",
		imgSrc : "images/nu.png",
		choiceA: "su",
		choiceB: "tsu",
		choiceC: "fu",
		choiceD: "nu",
		correct: "D"
	},
	{
		question:"What is the corresponding romaji?",
		imgSrc : "images/fu.png",
		choiceA: "fu",
		choiceB: "u",
		choiceC: "yu",
		choiceD: "mu",
		correct: "A"
	},
	//SWAPS QUESTIONS TO ROMAJI//////////////////////////////////////
	{
		question:"What is the corresponding Hiragana?",
		romajiQ: "mu",
		romajiA: 'images/u.png',
		romajiB: "images/mu.png",
		romajiC: "images/fu.png",
		romajiD: "images/tsu.png",
		correct: "B"
	},
	{
		question:"What is the corresponding Hiragana?",
		romajiQ: "yu",
		romajiA: "images/yu.png",
		romajiB: "images/ru.png",
		romajiC: "images/ku.png",
		romajiD: "images/n.png",
		correct: "A"
	},
	{
		question:"What is the corresponding Hiragana?",
		romajiQ: "ru",
		romajiA: "images/tsu.png",
		romajiB: "images/ru.png",
		romajiC: "images/u.png",
		romajiD: "images/ku.png",
		correct: "B"
	},
	{
		question:"What is the corresponding Hiragana?",
		romajiQ: "n",
		romajiA: "images/ku.png",
		romajiB: "images/fu.png",
		romajiC: "images/n.png",
		romajiD: "images/mu.png",
		correct: "C"
	}
];
var questionsSet4 = [
	{
		question:"What is the corresponding romaji?",
		imgSrc : "images/e.png",
		choiceA: "ke",
		choiceB: "re",
		choiceC: "e",
		choiceD: "he",
		correct: "C"
	},
	{
		question:"What is the corresponding romaji?",
		imgSrc : "images/ke.png",
		choiceA: "me",
		choiceB: "te",
		choiceC: "se",
		choiceD: "ke",
		correct: "D"
	},
	{
		question:"What is the corresponding romaji?",
		imgSrc : "images/se.png",
		choiceA: "he",
		choiceB: "e",
		choiceC: "se",
		choiceD: "ne",
		correct: "C"
	},
	{
		question:"What is the corresponding romaji?",
		imgSrc : "images/te.png",
		choiceA: "re",
		choiceB: "te",
		choiceC: "he",
		choiceD: "se",
		correct: "B"
	},
	{
		question:"What is the corresponding romaji?",
		imgSrc : "images/ne.png",
		choiceA: "e",
		choiceB: "re",
		choiceC: "me",
		choiceD: "ne",
		correct: "D"
	},
	{
		question:"What is the corresponding romaji?",
		imgSrc : "images/he.png",
		choiceA: "e",
		choiceB: "he",
		choiceC: "se",
		choiceD: "he",
		correct: "B"
	},
	//SWAPS QUESTIONS TO ROMAJI//////////////////////////////////////
	{
		question:"What is the corresponding Hiragana?",
		romajiQ: "me",
		romajiA: 'images/se.png',
		romajiB: "images/me.png",
		romajiC: "images/he.png",
		romajiD: "images/ke.png",
		correct: "B"
	},
	{
		question:"What is the corresponding Hiragana?",
		romajiQ: "re",
		romajiA: "images/re.png",
		romajiB: "images/e.png",
		romajiC: "images/ne.png",
		romajiD: "images/ke.png",
		correct: "A"
	},
	{
		question:"What is the corresponding Hiragana?",
		romajiQ: "se",
		romajiA: "images/te.png",
		romajiB: "images/se.png",
		romajiC: "images/me.png",
		romajiD: "images/he.png",
		correct: "B"
	},
	{
		question:"What is the corresponding Hiragana?",
		romajiQ: "he",
		romajiA: "images/re.png",
		romajiB: "images/ke.png",
		romajiC: "images/he.png",
		romajiD: "images/me.png",
		correct: "C"
	}
];
var questionsSet5 = [
	{
		question:"What is the corresponding romaji?",
		imgSrc : "images/o.png",
		choiceA: "o",
		choiceB: "ko",
		choiceC: "wo",
		choiceD: "so",
		correct: "A"
	},
	{
		question:"What is the corresponding romaji?",
		imgSrc : "images/ko.png",
		choiceA: "yo",
		choiceB: "to",
		choiceC: "ho",
		choiceD: "o",
		correct: "D"
	},
	{
		question:"What is the corresponding romaji?",
		imgSrc : "images/so.png",
		choiceA: "no",
		choiceB: "mo",
		choiceC: "so",
		choiceD: "ko",
		correct: "C"
	},
	{
		question:"What is the corresponding romaji?",
		imgSrc : "images/to.png",
		choiceA: "o",
		choiceB: "to",
		choiceC: "no",
		choiceD: "mo",
		correct: "B"
	},
	{
		question:"What is the corresponding romaji?",
		imgSrc : "images/no.png",
		choiceA: "ko",
		choiceB: "to",
		choiceC: "yo",
		choiceD: "no",
		correct: "D"
	},
	{
		question:"What is the corresponding romaji?",
		imgSrc : "images/ho.png",
		choiceA: "ro",
		choiceB: "ho",
		choiceC: "mo",
		choiceD: "o",
		correct: "B"
	},
	//SWAPS QUESTIONS TO ROMAJI//////////////////////////////////////
	{
		question:"What is the corresponding Hiragana?",
		romajiQ: "mo",
		romajiA: 'images/ho.png',
		romajiB: "images/mo.png",
		romajiC: "images/yo.png",
		romajiD: "images/no.png",
		correct: "B"
	},
	{
		question:"What is the corresponding Hiragana?",
		romajiQ: "yo",
		romajiA: "images/ho.png",
		romajiB: "images/wo.png",
		romajiC: "images/to.png",
		romajiD: "images/yo.png",
		correct: "D"
	},
	{
		question:"What is the corresponding Hiragana?",
		romajiQ: "ro",
		romajiA: "images/to.png",
		romajiB: "images/ro.png",
		romajiC: "images/ko.png",
		romajiD: "images/o.png",
		correct: "B"
	},
	{
		question:"What is the corresponding Hiragana?",
		romajiQ: "wo",
		romajiA: "images/to.png",
		romajiB: "images/so.png",
		romajiC: "images/wo.png",
		romajiD: "images/ko.png",
		correct: "C"
	}
];

//STARTS THE QUIZ/////////////////////////////////////////////////////
function startQuiz1(){
	tCa = true;
	trainingSets.style.display = "none";
	quiz.style.display = "block";
	renderQuestion1();
	renderProgress();
}
function startQuiz2(){
	tCi = true;
	trainingSets.style.display = "none";
	quiz.style.display = "block";
	renderQuestion2();
	renderProgress();
}
function startQuiz3(){
	tCu = true;
	trainingSets.style.display = "none";
	quiz.style.display = "block";
	renderQuestion3();
	renderProgress();
}
function startQuiz4(){
	tCe = true;
	trainingSets.style.display = "none";
	quiz.style.display = "block";
	renderQuestion4();
	renderProgress();
}
function startQuiz5(){
	tCo = true;
	trainingSets.style.display = "none";
	quiz.style.display = "block";
	renderQuestion5();
	renderProgress();
}

// CREATE SOME VARIABLES////////////////////////////////////////////////
const lastQuestionIndex1 = questionsSet1.length - 1;
const lastQuestionIndex2 = questionsSet2.length - 1;
const lastQuestionIndex3 = questionsSet3.length - 1;
const lastQuestionIndex4 = questionsSet4.length - 1;
const lastQuestionIndex5 = questionsSet5.length - 1;
/*const lastQuestionIndex6 = questionsSet6.length - 1;
const lastQuestionIndex7 = questionsSet7.length - 1;
const lastQuestionIndex8 = questionsSet8.length - 1;
const lastQuestionIndex9 = questionsSet9.length - 1;
const lastQuestionIndex10 = questionsSet10.length - 1;*/
let runningQuestionIndex = 0;
let score = 0;

//RENDERS A QUESTION///////////////////////////////////////////////////
function renderQuestion1(){
	if(romaji == true){
		var q = questionsSet1[runningQuestionIndex];
		qImg.innerHTML = "<span class='romajiQ'>" + q.romajiQ +"</span>";
		choices.style.display = "none";
		romajis.style.display = "inline";
		question.innerHTML ="<p>" + q.question + "</p>";
		romajiA.innerHTML = "<img src=" + q.romajiA + ">";
		romajiB.innerHTML = "<img src=" + q.romajiB + ">";
		romajiC.innerHTML = "<img src=" + q.romajiC + ">";
		romajiD.innerHTML = "<img src=" + q.romajiD + ">";
	}
	else {
		var q = questionsSet1[runningQuestionIndex];
		romajis.style.display = "none";
		qImg.innerHTML = "<img src=" + q.imgSrc + ">";
		question.innerHTML ="<p>" + q.question + "</p>";
		choiceA.innerHTML = q.choiceA;
		choiceB.innerHTML = q.choiceB;
		choiceC.innerHTML = q.choiceC;
		choiceD.innerHTML = q.choiceD;
	}
}
function renderQuestion2(){
	if(romaji == true){
		var q = questionsSet2[runningQuestionIndex];
		qImg.innerHTML = "<span class='romajiQ'>" + q.romajiQ +"</span>";
		choices.style.display = "none";
		romajis.style.display = "inline";
		question.innerHTML ="<p>" + q.question + "</p>";
		romajiA.innerHTML = "<img src=" + q.romajiA + ">";
		romajiB.innerHTML = "<img src=" + q.romajiB + ">";
		romajiC.innerHTML = "<img src=" + q.romajiC + ">";
		romajiD.innerHTML = "<img src=" + q.romajiD + ">";
	}
	else {
		var q = questionsSet2[runningQuestionIndex];
		romajis.style.display = "none";
		qImg.innerHTML = "<img src=" + q.imgSrc + ">";
		question.innerHTML ="<p>" + q.question + "</p>";
		choiceA.innerHTML = q.choiceA;
		choiceB.innerHTML = q.choiceB;
		choiceC.innerHTML = q.choiceC;
		choiceD.innerHTML = q.choiceD;
	}
}
function renderQuestion3(){
	if(romaji == true){
		var q = questionsSet3[runningQuestionIndex];
		qImg.innerHTML = "<span class='romajiQ'>" + q.romajiQ +"</span>";
		choices.style.display = "none";
		romajis.style.display = "inline";
		question.innerHTML ="<p>" + q.question + "</p>";
		romajiA.innerHTML = "<img src=" + q.romajiA + ">";
		romajiB.innerHTML = "<img src=" + q.romajiB + ">";
		romajiC.innerHTML = "<img src=" + q.romajiC + ">";
		romajiD.innerHTML = "<img src=" + q.romajiD + ">";
	}
	else {
		var q = questionsSet3[runningQuestionIndex];
		romajis.style.display = "none";
		qImg.innerHTML = "<img src=" + q.imgSrc + ">";
		question.innerHTML ="<p>" + q.question + "</p>";
		choiceA.innerHTML = q.choiceA;
		choiceB.innerHTML = q.choiceB;
		choiceC.innerHTML = q.choiceC;
		choiceD.innerHTML = q.choiceD;
	}
}
function renderQuestion4(){
	if(romaji == true){
		var q = questionsSet4[runningQuestionIndex];
		qImg.innerHTML = "<span class='romajiQ'>" + q.romajiQ +"</span>";
		choices.style.display = "none";
		romajis.style.display = "inline";
		question.innerHTML ="<p>" + q.question + "</p>";
		romajiA.innerHTML = "<img src=" + q.romajiA + ">";
		romajiB.innerHTML = "<img src=" + q.romajiB + ">";
		romajiC.innerHTML = "<img src=" + q.romajiC + ">";
		romajiD.innerHTML = "<img src=" + q.romajiD + ">";
	}
	else {
		var q = questionsSet4[runningQuestionIndex];
		romajis.style.display = "none";
		qImg.innerHTML = "<img src=" + q.imgSrc + ">";
		question.innerHTML ="<p>" + q.question + "</p>";
		choiceA.innerHTML = q.choiceA;
		choiceB.innerHTML = q.choiceB;
		choiceC.innerHTML = q.choiceC;
		choiceD.innerHTML = q.choiceD;
	}
}
function renderQuestion5(){
	if(romaji == true){
		var q = questionsSet5[runningQuestionIndex];
		qImg.innerHTML = "<span class='romajiQ'>" + q.romajiQ +"</span>";
		choices.style.display = "none";
		romajis.style.display = "inline";
		question.innerHTML ="<p>" + q.question + "</p>";
		romajiA.innerHTML = "<img src=" + q.romajiA + ">";
		romajiB.innerHTML = "<img src=" + q.romajiB + ">";
		romajiC.innerHTML = "<img src=" + q.romajiC + ">";
		romajiD.innerHTML = "<img src=" + q.romajiD + ">";
	}
	else {
		var q = questionsSet5[runningQuestionIndex];
		romajis.style.display = "none";
		qImg.innerHTML = "<img src=" + q.imgSrc + ">";
		question.innerHTML ="<p>" + q.question + "</p>";
		choiceA.innerHTML = q.choiceA;
		choiceB.innerHTML = q.choiceB;
		choiceC.innerHTML = q.choiceC;
		choiceD.innerHTML = q.choiceD;
	}
}

// RENDER PROGRESS////////////////////////////////////////////////////
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestionIndex1; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

//CHECKS ANSWER///////////////////////////////////////////////////////
function checkAnswer(answer){
	if(tCa == true){
		if(answer===questionsSet1[runningQuestionIndex].correct){
			score++;
			answerIsCorrect();
		}
		else{
			answerIsWrong();
		}
		if(runningQuestionIndex < lastQuestionIndex1){
			if(runningQuestionIndex>=(questionsSet1.length/2)){
				romaji = true;
			}
				runningQuestionIndex++;
				renderQuestion1();
		}
		else{
			renderScore1();
		}
	}
	
	else if(tCi ==true){
		if(answer===questionsSet2[runningQuestionIndex].correct){
			score++;
			answerIsCorrect();
		}
		else{
			answerIsWrong();
		}
		if(runningQuestionIndex < lastQuestionIndex1){
			if(runningQuestionIndex>=(questionsSet2.length/2)){
				romaji = true;
			}
				runningQuestionIndex++;
				renderQuestion2();
		}
		else{
			renderScore2();
		}
	}
	
	else if(tCu ==true){
		if(answer===questionsSet3[runningQuestionIndex].correct){
			score++;
			answerIsCorrect();
		}
		else{
			answerIsWrong();
		}
		if(runningQuestionIndex < lastQuestionIndex1){
			if(runningQuestionIndex>=(questionsSet3.length/2)){
				romaji = true;
			}
				runningQuestionIndex++;
				renderQuestion3();
		}
		else{
			renderScore3();
		}
	}
	
	else if(tCe ==true){
		if(answer===questionsSet4[runningQuestionIndex].correct){
			score++;
			answerIsCorrect();
		}
		else{
			answerIsWrong();
		}
		if(runningQuestionIndex < lastQuestionIndex1){
			if(runningQuestionIndex>=(questionsSet4.length/2)){
				romaji = true;
			}
				runningQuestionIndex++;
				renderQuestion4();
		}
		else{
			renderScore4();
		}
	}
	
	else if(tCo ==true){
		if(answer===questionsSet5[runningQuestionIndex].correct){
			score++;
			answerIsCorrect();
		}
		else{
			answerIsWrong();
		}
		if(runningQuestionIndex < lastQuestionIndex1){
			if(runningQuestionIndex>=(questionsSet5.length/2)){
				romaji = true;
			}
				runningQuestionIndex++;
				renderQuestion5();
		}
		else{
			renderScore5();
		}
	}
	
	/*else if(rand ==true){
		if(answer===questionsSet2[runningQuestionIndex].correct){
			score++;
			answerIsCorrect();
		}
		else{
			answerIsWrong();
		}
		if(runningQuestionIndex < lastQuestionIndex1){
			runningQuestionIndex++;
			renderQuestion2();
		}
		else{
			renderScore2();
		}
	}*/
}

//RENDERS PROGRESS BAR///////////////////////////////////////////////////
function answerIsCorrect(){
	document.getElementById(runningQuestionIndex).style.backgroundColor="green";
}

function answerIsWrong(){
	document.getElementById(runningQuestionIndex).style.backgroundColor="red";
}

// RENDER THE SCORE /////////////////////////////////////////////////
function renderScore1(){
	quiz.style.display = "none";
	trainingSets.style.display = "none";
    scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questionsSet1.length);
    let result = (scorePerCent >= 80) ? "Excellent job!" :
              (scorePerCent >= 60) ? "Good Work!" :
              (scorePerCent >= 40) ? "Well done" :
              (scorePerCent >= 20) ? "More study required" :
              "Poor effort";
    
    scoreDiv.innerHTML += "<div class='result'>"+ scorePerCent +"%</div>";
	scoreDiv.innerHTML += "<div class='result'>"+ result +"</div>";
}
function renderScore2(){
	quiz.style.display = "none";
	trainingSets.style.display = "none";
    scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questionsSet2.length);
    let result = (scorePerCent >= 80) ? "Excellent job!" :
              (scorePerCent >= 60) ? "Good Work!" :
              (scorePerCent >= 40) ? "Well done" :
              (scorePerCent >= 20) ? "More study required" :
              "Poor effort";
    
    scoreDiv.innerHTML += "<div class='result'>"+ scorePerCent +"%</div>";
	scoreDiv.innerHTML += "<div class='result'>"+ result +"</div>";
}
function renderScore3(){
	quiz.style.display = "none";
	trainingSets.style.display = "none";
    scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questionsSet3.length);
    let result = (scorePerCent >= 80) ? "Excellent job!" :
              (scorePerCent >= 60) ? "Good Work!" :
              (scorePerCent >= 40) ? "Well done" :
              (scorePerCent >= 20) ? "More study required" :
              "Poor effort";
    
    scoreDiv.innerHTML += "<div class='result'>"+ scorePerCent +"%</div>";
	scoreDiv.innerHTML += "<div class='result'>"+ result +"</div>";
}
function renderScore4(){
	quiz.style.display = "none";
	trainingSets.style.display = "none";
    scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questionsSet4.length);
    let result = (scorePerCent >= 80) ? "Excellent job!" :
              (scorePerCent >= 60) ? "Good Work!" :
              (scorePerCent >= 40) ? "Well done" :
              (scorePerCent >= 20) ? "More study required" :
              "Poor effort";
    
    scoreDiv.innerHTML += "<div class='result'>"+ scorePerCent +"%</div>";
	scoreDiv.innerHTML += "<div class='result'>"+ result +"</div>";
}
function renderScore5(){
	quiz.style.display = "none";
	trainingSets.style.display = "none";
    scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questionsSet5.length);
    let result = (scorePerCent >= 80) ? "Excellent job!" :
              (scorePerCent >= 60) ? "Good Work!" :
              (scorePerCent >= 40) ? "Well done" :
              (scorePerCent >= 20) ? "More study required" :
              "Poor effort";
    
    scoreDiv.innerHTML += "<div class='result'>"+ scorePerCent +"%</div>";
	scoreDiv.innerHTML += "<div class='result'>"+ result +"</div>";
}
