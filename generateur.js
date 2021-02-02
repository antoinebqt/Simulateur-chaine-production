function Generateur(x,y,taille){
	//Dessine le générateur
	ctx.fillStyle = 'red';  
 	ctx.fillRect(x, y, 10, taille); 
 	NewItem();
}


//Crée un cube et enregistre ses coordonnées
var nbCube = 0;
function NewItem(){
	var x = Xgenerateur, y = Ygenerateur;
    if (nbCube < max){
	    ctx.fillStyle = 'green';
	    ctx.fillRect(x + 12, y + tailleCube/2, tailleCube, tailleCube);
	    for (let i = 0; i < max; i++){
	        //Dès qu'un emplacement est libre
	        if (Positions[i][0] == ''){
	            Positions[i][0] = x + 12;
	            Positions[i][1] = y + tailleCube/2;
	            break;
            }
        }
    }
    if (stopped != 1){
    	setTimeout(function(){NewItem()},ClockGenerateur);
    }
}