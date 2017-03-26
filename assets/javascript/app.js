var questions = {
	q1: {
		question: "Fill in the blank: The Night is Dark and full of ________",
		answers: ["Darkness", "Evil", "Terrors", "Lannisters"]	
	},
	q2: {
		question: "Which of these is NOT a Stark Child?",
		answers: ["Sansa", "Rickon", "Arya", "Jon"]
	},
	q3: {
		question: "Who killed Joffrey Baratheon?",
		answers: ["The Queen of Thorns", "Sansa", "Tyrion", "Ned Stark"]
	},
	q4: {
		question: "What do we say the God of Death?",
		answers: ["Today doesn't work for me", "Valar Morghulis", "Not Today", "Valar Dohaeris"]
	},
	q5: {
		question: "Where does Arya first meet Jaqen H'Gar?",
		answers: ["Kings Landing", "The King's Road", "Harrenhal", "Winterfell"]
	},
	q6: {
		question: "Who is the rightful King of Westeros?",
		answers: ["Stannis", "Joffrey", "Jon Snow", "Renly Baratheon"]
	}
}
var onquestion = 0

var win = 0
var loss = 0
$("#wins").text(win)
$("#losses").text(loss)

function correct (){
	win++
	$("#wins").text(win)
	$("#losses").text(loss)
}
function incorrect (){
	loss++
	$("#wins").text(win)
	$("#losses").text(loss)
}

var timer = 15
	$(".timer").html("<h2>" + timer + "</h2>")
var IntervalID
function clear(){
	win = 0
	loss = 0
	$("#wins").text(win)
	$("#losses").text(loss)
}

function game(){
	// var keepGoing = false
	function outcome(){
		if (win === 5)
		{
			alert("You Win!")
			$(".game").html("<h1> Congrats!!! <br><br> You Got: " + win + " correct! You're a master!</h1>")
			stop()
		}
		else if (win > 1)
		{
			stop()
			$(".game").html("<h1> Not Bad. <br><br> You Got: "+ win + " correct and "+ loss+ " incorrect.</h1><br><br><button>Try again?</button>")
			$("button").click(clear, game)
			// alert("One last question, for everything!")
			// gamecount++
			// setTimeout(gamequeue[gamecount], 2000)
		}
		else
		{
			stop()
			$(".game").html("<h1>Try watching the shows at least first. <br><br> You got: " + win + " correct and "+ loss+ " incorrect</h1>")
		}
	}
	function run (){
		IntervalID = setInterval(decrement, 1000)
		}
	function decrement(){
		timer--
		$(".timer").html("<h2>" + timer + "</h2>")
			if ((timer===0)&&(onquestion===1))
				{
				stop()
				$(".game").html("<h1><br><br> You ran out of time!! The correct answer was Terrors!")
				incorrect()
				gamecount++
				setTimeout(gamequeue[gamecount], 5000)
				}
			else if ((timer===0)&&(onquestion===2))
			{
				stop()
				$(".game").html("<h1><br><br> You ran out of time!! The correct answer was Jon!")
				incorrect()
				gamecount++
				setTimeout(gamequeue[gamecount], 5000)
			}
			else if ((timer===0)&&(onquestion===3))
			{
				stop()
				$(".game").html("<h1><br><br> You ran out of time!! The correct answer was Sansa!")
				incorrect()
				gamecount++
				setTimeout(gamequeue[gamecount], 5000)
			}
			else if ((timer===0)&&(onquestion===4))
			{
				stop()
				$(".game").html("<h1><br><br> You ran out of time!! The correct answer was Not Today!")
				incorrect()
				gamecount++
				setTimeout(gamequeue[gamecount], 5000)
			}
			else if ((timer===0)&&(onquestion===5))
			{
				stop()
				$(".game").html("<h1><br><br> You ran out of time!! The correct answer was King's Landing!")
				incorrect()
				gamecount++
				setTimeout(outcome, 5000)
			}
		}
	function stop(){
		clearInterval(IntervalID)
		}

	var gamequeue = [question1, question2, question3, question4, question5, question6]
	gamecount = 0
	gamequeue[gamecount]()

	function question1(){
	timer = 15
	onquestion = 1
	run()
		var ques1 = questions.q1.answers
		var quest1 = questions.q1.question
		$(".game").html("<h1>" + quest1 + "</h1>")
		for (var i = 0; i < ques1.length; i++) {
			var choices = $("<ul>").text(ques1[i])
			choices.attr("answer", ques1[i])
			$(".game").append(choices)
		}
		$("ul").click(function(){
			var wrong = $(this).attr("answer")
			if (wrong === "Terrors")
				{
				stop()
				$(".game").html("<h1><br><br> Correct!! Melisandre is proud.")
				correct()
				gamecount++
				setTimeout(gamequeue[gamecount], 5000)
				}
			else 
				{
				stop()
				$(".game").html("<h1><br><br>Wrong! <br><br> The answer was Terrors!</h1>")
				incorrect()
				gamecount++
				setTimeout(gamequeue[gamecount], 5000)
				}
		})
	}
	function question2(){
		timer = 15
		onquestion = 2
		run()
		var ques2 = questions.q2.answers
		var quest2 = questions.q2.question
		$(".game").html("<h1>" + quest2 + "</h1>")
		for (var i = 0; i < ques2.length; i++) {
			var choices = $("<ul>").text(ques2[i])
			choices.attr("answer", ques2[i])
			$(".game").append(choices)
		}
		$("ul").click(function(){
			var wrong = $(this).attr("answer")
			if (wrong === "Jon")
				{
				stop()
				$(".game").html("<h1><br><br> Correct!! Jon Snow is a bastard and a Targaryen.")
				correct()
				gamecount++
				setTimeout(gamequeue[gamecount], 5000)
				}
			else 
				{
				stop()
				$(".game").html("<h1><br><br>Wrong! <br><br> Jon is technically a Targaryen</h1>")
				incorrect()
				gamecount++
				setTimeout(gamequeue[gamecount], 5000)
				}
		})
	}
	function question3(){
		timer = 15
		run()
		onquestion = 3
		var ques3 = questions.q3.answers
		var quest3 = questions.q3.question
		$(".game").html("<h1>" + quest3 + "</h1>")
		for (var i = 0; i < ques3.length; i++) {
			var choices = $("<ul>").text(ques3[i])
			choices.attr("answer", ques3[i])
			$(".game").append(choices)
		}
		$("ul").click(function(){
			var wrong = $(this).attr("answer")
			if (wrong === "Sansa")
				{
				stop()
				$(".game").html("<h1><br><br> Correct!! Even if she was a pawn.")
				correct()
				gamecount++
				setTimeout(gamequeue[gamecount], 5000)
				}
			else 
				{
				stop()
				$(".game").html("<h1><br><br>Wrong! <br><br> Sansa accidentally poisoned Joffrey with the necklace given to her!</h1>")
				incorrect()
				gamecount++
				setTimeout(gamequeue[gamecount], 5000)
				}
		})
	}
	function question4(){
		timer = 15
		run()
		onquestion = 4
		var ques4 = questions.q4.answers
		var quest4 = questions.q4.question
		$(".game").html("<h1>" + quest4 + "</h1>")
		for (var i = 0; i < ques4.length; i++) {
			var choices = $("<ul>").text(ques4[i])
			choices.attr("answer", ques4[i])
			$(".game").append(choices)
		}
		$("ul").click(function(){
			var wrong = $(this).attr("answer")
			if (wrong === "Not Today")
				{
				stop()
				$(".game").html("<h1><br><br> Correct!! Syrio Forel taught you well. ")
				correct()
				gamecount++
				setTimeout(gamequeue[gamecount], 5000)
				}
			else 
				{
				stop()
				$(".game").html("<h1><br><br>Wrong! <br><br> The Many Faced God is not happy. </h1>")
				incorrect()
				gamecount++
				setTimeout(gamequeue[gamecount], 5000)
				}
		})
	}
	function question5(){
		timer = 15
		run()
		onquestion = 5
		var ques5 = questions.q5.answers
		var quest5 = questions.q5.question
		$(".game").html("<h1>" + quest5 + "</h1>")
		for (var i = 0; i < ques5.length; i++) {
			var choices = $("<ul>").text(ques5[i])
			choices.attr("answer", ques5[i])
			$(".game").append(choices)
		}
		$("ul").click(function(){
			var wrong = $(this).attr("answer")
			if (wrong === "Kings Landing")
				{
				stop()
				$(".game").html("<h1><br><br> Correct!! Poor Yoren.")
				correct()
				setTimeout(outcome, 5000)
				}
			else 
				{
				stop()
				$(".game").html("<h1><br><br>Wrong! <br><br> She is recruited in King's Landing and is brought with him by Yoren </h1>")
				incorrect()
				setTimeout(outcome, 5000)
				}
		})
	}
		function question6(){
		timer = 15
		run()
		onquestion = 6
		var ques5 = questions.q6.answers
		var quest5 = questions.q6.question
		$(".game").html("<h1>" + quest6 + "</h1>")
		for (var i = 0; i < ques6.length; i++) {
			var choices = $("<ul>").text(ques6[i])
			choices.attr("answer", ques6[i])
			$(".game").append(choices)
		}
		$("ul").click(function(){
			var wrong = $(this).attr("answer")
			if (wrong === "Renly Baratheon")
				{
				stop()
				$(".game").html("<h1><br><br> Correct!! He is the one true King of Westeros. No questions")
				win=4
				correct()
				setTimeout(outcome, 5000)
				}
			else 
				{
				stop()
				$(".game").html("<h1><br><br>Wrong! <br><br> She is recruited in King's Landing and is brought with him by Yoren </h1>")
				incorrect()
				setTimeout(outcome, 5000)
				}
		})
	}
}

$("button").click(game)