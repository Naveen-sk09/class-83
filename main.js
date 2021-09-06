
var lastx,lasty;
canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
color="black";
width_of_line=5;
wd=screen.width-70;
var w=screen.width;
height=screen.height-300;
if(w<992){
    document.getElementById("mycanvas").width=wd;
    document.getElementById("mycanvas").height=height;

}
canvas.addEventListener("touchstrt",md);
function md(e){
    color=document.getElementById("color1").value;
    width_of_line=document.getElementById("width_of_line").value;
    lastx = e.touches[0].clientX-canvas.offsetLeft;
    lasty = e.touches[0].clientY- canvas.offsetTop;
}
canvas.addEventListener("touchmove",mv);
function mv(e){
    currentx = e.touches[0].clientX-canvas.offsetLeft;
currenty = e.touches[0].clientY- canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle=color1;
    ctx.lineWidth=width_of_line;
    ctx.moveTo(lastx,lasty);
    ctx.lineTo(currentx,currenty);
    ctx.stroke();

lastx=currentx;
lasty=currenty;
}

function clearArea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}
