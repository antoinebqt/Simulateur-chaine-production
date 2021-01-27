//Gere le deplacement en fonction des éléments se trouvant aux alentours
function Deplacement(Positions){
	var x, y;
	var ctx = document.getElementById('canvas').getContext('2d'); 
	for (let i = 0; i < max; i++){
 		if((mouvement[i] == 0) && (Positions[i][0] != '') && (Positions[i][1] != '')){
 			x = Positions[i][0];
			y = Positions[i][1];
			Positions[i] = [x, y + 1];
			mouvement[1] == 1;
 		}
 	}
	for (let i = 0; i < max; i++){
 		mouvement[i] = 0;
 	}
}

function Nettoyage(Positions,ctx){
    //Actualise toutes les nouvelles positions
    for (let i = 0; i < max; i++){
        if ((Positions[i][0] > 0) && (Positions[i][0] < canvas.width)){
        	//Enleve l'ancien objet
           	ctx.clearRect(Positions[i][0]-1, Positions[i][1]-2, TailleGenerateur/2+1, TailleGenerateur/2+3);
            //Créer l'objet avec sa nouvelle position
            ctx.fillStyle = 'green';  
            ctx.fillRect(Positions[i][0], Positions[i][1], TailleGenerateur/2, TailleGenerateur/2);
            ctx.fillStyle = 'white';
            ctx.font = '20px serif';
            ctx.fillText(i + 1, Positions[i][0], Positions[i][1] + 5 + TailleGenerateur/4);
        }
    }
}