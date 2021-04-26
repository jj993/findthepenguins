"use strict";
$(document).ready( function() {
    //This code will run after your page loads
var yetiPos = $("#gameholder").children("div");
shuffle(yetiPos);
    
function shuffle(array) {
var counter = array.length, temp, index;
// While there are elements in the array to shuffle
while (counter > 0) {
// Pick a random index
index = Math.floor(Math.random() * counter);
// Decrease counter by 1
counter--;
// And swap the last element with it
temp = array[counter];
array[counter] = array[index];
array[index] = temp;
}
        
for( var i=0;i<array.length;i++){
$('#gameholder').append($(array[i]));
}
}
   /* var yetiPosition = $("#yeti").children("div");
    function changePostion(){
    yetiPosition = Math.floor(Math.random() * 9 + 1 );
    } */  
    
var score = 0; 
var highScore = 0;
score_board(score, highScore);
function score_board (){
highScore = Math.max(score, highScore);
$("#score").empty();
$("#score").append("Your-Score:"+score+"\nHigh-Score:"+highScore);
} 
    
$("#yeti").mousedown(function() {
$("#yeti").css('background-image', 'url("../images/yeti.png")');
var voice = document.getElementById('yetiVoice');
voice.play();
document.getElementById('yeti').style.pointerEvents = 'none';
//alert("Yaaaarrrr!");
$("#penguin1").css('background-image', 'url("../images/mound_1.png")');
$("#penguin2").css('background-image', 'url("../images/mound_2.png")');
$("#penguin3").css('background-image', 'url("../images/mound_3.png")');
$("#penguin4").css('background-image', 'url("../images/mound_4.png")');
$("#penguin5").css('background-image', 'url("../images/mound_5.png")');
$("#penguin6").css('background-image', 'url("../images/mound_6.png")');
$("#penguin7").css('background-image', 'url("../images/mound_7.png")');
$("#penguin8").css('background-image', 'url("../images/mound_8.png")');
$("#penguin9").css('background-image', 'url("../images/mound_10.png")');
$("#penguin10").css('background-image', 'url("../images/mound_16.png")');
$("#penguin11").css('background-image', 'url("../images/mound_11.png")');
$("#penguin12").css('background-image', 'url("../images/mound_12.png")');
$("#penguin13").css('background-image', 'url("../images/mound_13.png")');
$("#penguin14").css('background-image', 'url("../images/mound_14.png")');
$("#penguin15").css('background-image', 'url("../images/mound_15.png")'); 
       
  
document.getElementById('penguin1').style.pointerEvents = 'auto';
document.getElementById('penguin2').style.pointerEvents = 'auto';
document.getElementById('penguin3').style.pointerEvents = 'auto';
document.getElementById('penguin4').style.pointerEvents = 'auto';
document.getElementById('penguin5').style.pointerEvents = 'auto';
document.getElementById('penguin6').style.pointerEvents = 'auto';
document.getElementById('penguin7').style.pointerEvents = 'auto';
document.getElementById('penguin8').style.pointerEvents = 'auto';
document.getElementById('penguin9').style.pointerEvents = 'auto';
document.getElementById('penguin10').style.pointerEvents = 'auto';
document.getElementById('penguin11').style.pointerEvents = 'auto';
document.getElementById('penguin12').style.pointerEvents = 'auto';
document.getElementById('penguin13').style.pointerEvents = 'auto';
document.getElementById('penguin14').style.pointerEvents = 'auto';
document.getElementById('penguin15').style.pointerEvents = 'auto';
        
setTimeout (function(){
$("#yeti").css('background-image', 'url("../images/mound_9.png")');
document.getElementById('yeti').style.pointerEvents = 'auto';
score = 0;
score_board(score,highScore);
shuffle(yetiPos);
}, 1000);
});
  
$("#penguin1").click(function()
{
$("#penguin1").css('background-image', 'url("../images/penguin_1.png")');
score = score + 1;
score_board(score, highScore);
var voice = document.getElementById('pengVoice');
voice.play();
document.getElementById('penguin1').style.pointerEvents = 'none';
});
    
$("#penguin2").click(function()
{
$("#penguin2").css('background-image', 'url("../images/penguin_2.png")');
score = score + 1;
score_board(score, highScore);
var voice = document.getElementById('pengVoice');
voice.play();  
document.getElementById('penguin2').style.pointerEvents = 'none';
});
    
$("#penguin3").click(function()
{
$("#penguin3").css('background-image', 'url("../images/penguin_3.png")'); 
score = score + 1;
score_board(score, highScore);
var voice = document.getElementById('pengVoice');
voice.play(); 
document.getElementById('penguin3').style.pointerEvents = 'none';
});
    
$("#penguin4").click(function()
{
$("#penguin4").css('background-image', 'url("../images/penguin_4.png")');  
score = score + 1;
score_board(score, highScore);
var voice = document.getElementById('pengVoice');
voice.play();  
document.getElementById('penguin4').style.pointerEvents = 'none';
});
    
$("#penguin5").click(function()
{
$("#penguin5").css('background-image', 'url("../images/penguin_5.png")');
score = score + 1;
score_board(score, highScore);
var voice = document.getElementById('pengVoice');
voice.play();   
document.getElementById('penguin5').style.pointerEvents = 'none';
});
    
$("#penguin6").click(function()
{
$("#penguin6").css('background-image', 'url("../images/penguin_6.png")');  
score = score + 1;
score_board(score, highScore);
var voice = document.getElementById('pengVoice');
voice.play();  
document.getElementById('penguin6').style.pointerEvents = 'none';
});
    
$("#penguin7").click(function()
{
$("#penguin7").css('background-image', 'url("../images/penguin_7.png")');
score = score + 1;
score_board(score, highScore);
var voice = document.getElementById('pengVoice');
voice.play(); 
document.getElementById('penguin7').style.pointerEvents = 'none';
});
    
$("#penguin8").click(function()
{
$("#penguin8").css('background-image', 'url("../images/penguin_8.png")');
score = score + 1;
score_board(score, highScore);
var voice = document.getElementById('pengVoice');
voice.play();  
document.getElementById('penguin8').style.pointerEvents = 'none';
});
    
$("#penguin9").click(function()
{
$("#penguin9").css('background-image', 'url("../images/penguin_9.png")');
score = score + 1;
score_board(score, highScore);
var voice = document.getElementById('pengVoice');
voice.play();
document.getElementById('penguin9').style.pointerEvents = 'none';
});
    
$("#penguin10").click(function()
{
$("#penguin10").css('background-image', 'url("../images/penguin_10.png")');
score = score + 1;
score_board(score, highScore);
var voice = document.getElementById('pengVoice');
voice.play();
document.getElementById('penguin10').style.pointerEvents = 'none';
});
    
$("#penguin11").click(function()
{
$("#penguin11").css('background-image', 'url("../images/penguin_11.png")');
score = score + 1;
score_board(score, highScore);
var voice = document.getElementById('pengVoice');
voice.play();
document.getElementById('penguin11').style.pointerEvents = 'none';
});
    
$("#penguin12").click(function()
{
$("#penguin12").css('background-image', 'url("../images/penguin_12.png")');
score = score + 1;
score_board(score, highScore);
var voice = document.getElementById('pengVoice');
voice.play();
document.getElementById('penguin12').style.pointerEvents = 'none';
});
  
$("#penguin13").click(function()
{
$("#penguin13").css('background-image', 'url("../images/penguin_13.png")');
score = score + 1;
score_board(score, highScore);
var voice = document.getElementById('pengVoice');
voice.play();
document.getElementById('penguin13').style.pointerEvents = 'none';
});
    
$("#penguin14").click(function()
{
$("#penguin14").css('background-image', 'url("../images/penguin_14.png")');
score = score + 1;
score_board(score, highScore);
var voice = document.getElementById('pengVoice');
voice.play();
document.getElementById('penguin14').style.pointerEvents = 'none';
});
    
$("#penguin15").click(function()
{
$("#penguin15").css('background-image', 'url("../images/penguin_15.png")');
score = score + 1;
score_board(score, highScore);
var voice = document.getElementById('pengVoice');
voice.play();
    document.getElementById('penguin15').style.pointerEvents = 'none';
});
    
    /*$("yeti").click(function()
        {
	$("#yeti").css('background-image', 'url("../images/yeti.png")');   
          });*/
});