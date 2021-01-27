function Generateur(x,y,taille,vitesse,ctx,Positions)
{
	ctx.fillStyle = 'red';  
 	ctx.fillRect(x, y, 10, taille); 
}

//Ajoute un element et enregistre ses coordonnées
var nbCube = 0;
function NewItem(){
	var x = Xgenerateur, y = Ygenerateur, tailleCube = TailleGenerateur/2;
  	var ctx = document.getElementById('canvas').getContext('2d'); 
	if (nbCube < max){
		ctx.fillStyle = 'green';
		ctx.fillRect(x + 10, y + tailleCube/2, tailleCube, tailleCube);
		for (let i = 0; i < max; i++){
			//Dès qu'un emplacement est libre
			if (Positions[i][0] == ''){
				Positions[i][0] = x + 10;
				Positions[i][1] = y + tailleCube/2;
				nbCube++;
				break;
			}
		}
	}
	setTimeout(function(){NewItem()},ClockGenerateur);
}