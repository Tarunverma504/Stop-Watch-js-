function fun()
{
	setTimeout(function(){
        window.location.href = 'clock.html';
    }, 4000);
}
var timer,ms=0,s=0,m=0;
function start()
{
	console.log('mnd');
	if(!timer){timer=setInterval(run,10);}
}
function run()
{
	console.log('mnd');
	document.getElementById("watch").innerHTML=(m<10?'0'+m:m)+':'+(s<10?'0'+s:s)+':'+(ms<10?'0'+ms:ms);
	ms++;
	if(ms==100){ 
		s++; ms=0;}	
	else if(s==60){
		s=0; m++;
	}
}
function pause()
{
	clearInterval(timer);
	timer=	false;
}
function stop(){
	clearInterval(timer);
	timer=false;
	ms=0; s=0; m=0;
	document.getElementById("watch").innerHTML=(m<10?'0'+m:m)+':'+(s<10?'0'+s:s)+':'+(ms<10?'0'+ms:ms);
}
function reset()
{
	stop();
	start();
}
function laps()
{
	var a=(m<10?'0'+m:m)+':'+(s<10?'0'+s:s)+':'+(ms<10?'0'+ms:ms);
	var li=document.createElement('li');
	li.innerHTML=a;
	_laps.append(li);
}
function resetlaps()
{
	_laps.innerHTML='';
}