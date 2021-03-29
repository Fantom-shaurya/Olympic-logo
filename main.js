canvas= 
document.getElementById("canvas")
ctx= canvas.getContext("2d")

ctx.beginPath();
ctx.strokeStyle="grey";
ctx.lineWidth=4;
ctx.rect(155,130,490,250)
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth=6;
ctx.arc(280,200,50,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=6;
ctx.arc(400,200,50,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=5;
ctx.arc(520,200,50,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="yellow";
ctx.lineWidth=5;
ctx.arc(340,250,50,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="green";
ctx.lineWidth=5;
ctx.arc(460,250,50,0,2*Math.PI);
ctx.stroke();



