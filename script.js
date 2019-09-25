$(document).ready(function() {
var caterpillarBody = $("#tail");
var caterpillarHead = $("#head");
var caterpillar = $("#caterpillar");
var segment = "<div class='body'></div>";
function animate(){
$("#animator").html('watch it go!')
for(var i = 1; i<20; i++){
caterpillarBody.animate({width: '100px'},'fast').animate({width: '50px', 'margin-left':
50*i+'px'},'fast');
}
caterpillarBody.animate({width: '100px'},'slow').animate({width: '50px', 'margin-left':
'1000px'},'slow', function(){
caterpillarBody.css({"margin-left":"0px",width: '50px'});
$('#animator').html('Animate (1)');
});
}
function reset(){
    caterpillarBody.stop(true);
caterpillarBody.css({"margin-left":"0px",width: '50px'});
$('#animator').html('Animate (1)');
}
function fadeCaterpillar(){
caterpillar.fadeToggle(2000);
}
function grow(){
caterpillarBody.after(segment);
}
$("#animator").click(function(){
animate();
});
$('#reset').click(function(){
reset();
});
$("#fader").click(function() {
fadeCaterpillar();
});
$("#grow").click(function() {
grow();
});
$(this).keypress(function(e){
switch (e.keyCode) {
case 49||97:
animate();
break;
case 50||98:
reset();
break;
case 51||99:
fadeCaterpillar();
break;
case 52||100:
grow();
break;
}
});
});