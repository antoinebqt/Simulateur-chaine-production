//Gere le deplacement en fonction des éléments se trouvant aux alentours
function Deplacement(Positions, OldPositions){
	var ctx = document.getElementById('canvas').getContext('2d'); 
	for (let i = 0; i < max; i++){
 		if((mouvement[i] == 0) && (Positions[i][0] != '') && (Positions[i][1] != '')){
            OldPositions[i] = Positions[i];
			Positions[i] = [Positions[i][0], Positions[i][1] + 1];
			mouvement[1] == 1;
 		}
 	}
	for (let i = 0; i < max; i++){
 		mouvement[i] = 0;
 	}
}

function Nettoyage(Positions, OldPositions, ctx){
    //Actualise toutes les nouvelles positions
    for (let i = 0; i < max; i++){
        if ((Positions[i][0] > 0) && (Positions[i][0] < canvas.width)){
        	//Enleve l'ancien objet
           	ctx.clearRect(OldPositions[i][0]-1, OldPositions[i][1]-1, tailleCube+1, tailleCube+2);
            //Créer l'objet avec sa nouvelle position
            ctx.fillStyle = 'green';  
            ctx.fillRect(Positions[i][0], Positions[i][1], tailleCube, tailleCube);
            ctx.fillStyle = 'white';
            ctx.font = '20px serif';
            ctx.fillText(i + 1, Positions[i][0], Positions[i][1] + 5 + tailleCube/2);
        }
    }
}