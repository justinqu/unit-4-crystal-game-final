$(document).ready(function(){
//4 divs
//each div holds a value attribute and image tag


// setting up our images for the game
var crystals = [
"https://vignette.wikia.nocookie.net/marvel-contestofchampions/images/f/f2/Crystal_mutant.png/revision/latest?cb=20151122000009",
"https://musicalnexus.net/uploads/monthly_2018_02/NexusCrystal.png.52526afef1294bc24dccb851fd37faad.png",
"https://vignette.wikia.nocookie.net/marvel-contestofchampions/images/c/cd/Crystal_alliance.png/revision/latest?cb=20151121233509",
"https://mbch.guide/wp-content/uploads/crystal_shard_capamerica_faction.png"
]
var score = 0;
var random_number = 0;
var lost = 0;
var win = 0; 



var startGame = function(){
// create a random number to start the game
 random_number = Math.floor(Math.random() * 69 ) + 30;
 $(".result").html('Random Number: ' + random_number);
 

//creates a random value for each Crystal
}




var reset = function (){
    $("img").append("");
    for (var i = 0; i < 4; i++){
        var randomNum = Math.floor(Math.random() * 12) + 1;
        $(".crystals-container").html(
            "<img class='crystal crystals' value="+randomNum+"  src=" + crystals[i] + ">"
        )}

        $('#score').html("Current Score: " +score);  
        $(".crystals-container").empty(); 
    makeCrystals() 
};

makeCrystals();

function makeCrystals() { 
   
    for (var i = 0; i < 4; i++){
        var randomNum = Math.floor(Math.random() * 12) + 1;
        $(".crystals-container").append(
            "<img class='crystal crystals' value="+randomNum+"  src=" + crystals[i] + ">"
        )}}

        $('#score').html("Current Score: " +score);   

    startGame(); 


    $(document).on("click", ".crystal", function(){
        console.log($(this).attr("value"));
        var crystalValue = parseInt($(this).attr("value"))
        score += crystalValue
        $('#score').html("Current Score: " +score);
    
        if (score === random_number){
            win++;
            $("#win").html("Wins: " + win);
            score = 0;
            reset();
            startGame();
        }
    
        else if(score > random_number){
            lost++;
            $("#lost").html("Losess: " +lost);
            score = 0;
            reset();
            startGame();
        } 
    }
)});