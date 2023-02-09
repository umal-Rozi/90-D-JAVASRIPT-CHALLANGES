
// convast API = a means for drawing graphics 
//    used for animation , game, data visualization

let  convast =document.getElementById("myconvase");
let contex = convast.getContext("2d");


// drow lines 
contex.strokeStyle ="purple";
contex.lineWidth = 10;
contex.beginPath();
contex.moveTo(0,0);
contex.lineTo(250,250);
contex.lineTo(250,500);
contex.moveTo(500,0);
contex.lineTo(250,250);
contex.stroke();

// draw triangles
contex.strokeStyle ="grey";
contex.fillStyle ="yellow";
contex.lineWidth="10";
contex.beginPath();
contex.moveTo(250,0);
contex.lineTo(0,250);
contex.lineTo(500,250);
contex.lineTo(250,0);
// contex.stroke();
contex.fill();

// draw rigtangle line
contex.fillStyle ="black";
contex.fillRect(0,0,250,250);
contex.strokeStyle="black";
contex.strokeRect(0,0,250,250);

contex.fillStyle ="yellow";
contex.fillRect(0,250,250,250);
contex.strokeStyle="black";
contex.strokeRect(0,250,250,250);

contex.fillStyle ="green";
contex.fillRect(250,250,250,250);
contex.strokeStyle="black";
contex.strokeRect(250,250,250,250);

contex.fillStyle ="blue";
contex.fillRect(250,0,250,250);
contex.strokeStyle="black";
contex.strokeRect(250,0,250,250);



// darw circle 
//(x, y, r, sange, eAngle, counterclockwise)
contex.fillStyle ="lightgrey";
contex.strokeStyle ="black";
contex.lineWidth =10;
contex.beginPath();
contex.arc(250 ,250, 200, 0, 2 * Math.PI);
contex.stroke();
contex.fill();

// draw text
contex.font = " 50px Times New Roman";
contex.fillStyle="yellow"
contex.textAlign="center";
contex.fillText("YOU WIN!", 100, 100);