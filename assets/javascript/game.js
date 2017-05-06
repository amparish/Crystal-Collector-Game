/*
	generate random number between 19 - 120 on load
	
	player clicks on a crystal, crystal adds (1 - 12, randomized) points to score
	
	update score counter
	
	if score = random number, wins++
	
	if score > random number, lose++
	
	if wins++ or lose++:
		generate new random number
		reset score to 0
		randomize crystal score values
*/

var targetNumber = [Math.floor(Math.random()*101)+19];
var redCrystal = [Math.floor(Math.random()*12)+1];
var blueCrystal = [Math.floor(Math.random()*12)+1];
var greenCrystal = [Math.floor(Math.random()*12)+1];
var whiteCrystal = [Math.floor(Math.random()*12)+1];
var win = 0;
var lose = 0;
var currentScore = 0;

$("#target-number").html("<h2>Target Score: " + targetNumber + "</h2>");
$("#score").html("<h2>Current Score: " + currentScore + "</h2>");
$("#red").attr("data-crystalvalue", redCrystal);
$("#blue").attr("data-crystalvalue", blueCrystal);
$("#green").attr("data-crystalvalue", greenCrystal);
$("#white").attr("data-crystalvalue", whiteCrystal);

$("#red").on("click", function(){
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    currentScore += crystalValue;
	$("#score").html("<h2>Current Score: " + currentScore + "</h2>");
    console.log(currentScore);
});

$("#blue").on("click", function(){
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    currentScore += crystalValue;
    $("#score").html("<h2>Current Score: " + currentScore + "</h2>");
    console.log(currentScore);
});

$("#green").on("click", function(){
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    currentScore += crystalValue;
    $("#score").html("<h2>Current Score: " + currentScore + "</h2>");
    console.log(currentScore);
});

$("#white").on("click", function(){
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    currentScore += crystalValue;
    $("#score").html("<h2>Current Score: " + currentScore + "</h2>");
    console.log(currentScore);
});

if (currentScore === targetNumber) {
	win++;
	$("#win-lose").html("<p>Wins: " + win + " Losses: " + lose + "</p>");
	currentScore = 0;
	$("#score").html("<h2>Current Score: " + currentScore + "</h2>");
}

else if (currentScore > targetNumber) {
	lose++;
	$("#win-lose").html("<p>Wins: " + win + " Losses: " + lose + "</p>");
	currentScore = 0;
	$("#score").html("<h2>Current Score: " + currentScore + "</h2>");
};