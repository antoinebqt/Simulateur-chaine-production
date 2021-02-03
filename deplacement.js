//Gere le deplacement en fonction des éléments se trouvant aux alentours
function Deplacement(){
	//fait tomber le cube
	for (let i = 0; i < max; i++){
 		if((mouvement[i] == 0) && (Positions[i][0] != '') && (Positions[i][1] != '')){
            OldPositions[i] = Positions[i];
			Positions[i] = [Positions[i][0], Positions[i][1] + 1];
			mouvement[i]=1;
 		}
 		if(Positions[i][1]>canvas.width)
 		{
 			Positions[i]=["",""];
 			mouvement[i]=1;
 		}
 		
 	}
}

function Nettoyage(){
    //Actualise toutes les nouvelles positions
    for (let i = 0; i < max; i++){
        if ((Positions[i][0] >= 0) && (Positions[i][0] <= canvas.width)&& mouvement[i]==1){
        	//Enleve l'ancien objet
        	mouvement[i] = 0;
        	if (OldPositions[i][0]!='')
			{
           		ctx.clearRect(OldPositions[i][0]-1, OldPositions[i][1]-1, tailleCube+1, tailleCube+1);
			}
			if (Positions[i][0]!='')
			{
	            //Créer l'objet avec sa nouvelle position
	            ctx.fillStyle = 'green';
	            ctx.fillRect(Positions[i][0], Positions[i][1], tailleCube, tailleCube);
			}
        }
    }
}