function Generateur(x,y,taille){
	//Dessine le générateur
	ctx.drawImage(generateur, x, y);
 	NewItem();
}


//Crée un cube et enregistre ses coordonnées
var nbCube = 0;
function NewItem(){
	var x = Xgenerateur, y = Ygenerateur;
	for (let i = 0; i < max; i++){
	    //Dès qu'un emplacement est libre
	    if (Positions[i][0] == ''){
	        Positions[i][0] = x + 12;
	        Positions[i][1] = y + tailleCube/2;
	        nbCube++;


           	ctx.clearRect(0, 0, 150,25);
    		ctx.fillStyle = 'black';
	    	ctx.font = '15px sans-serif';
	    	ctx.fillText('Cube : '+nbCube, 0,20 );
	        break;
        }
    }
    if (stopped != 1){
    	setTimeout(function(){NewItem()}, ClockGenerateur/VitesseAcceleration);
    }
}