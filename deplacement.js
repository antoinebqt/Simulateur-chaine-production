//Gere le deplacement en fonction des éléments se trouvant aux alentours
function Deplacement(){
	//Fait tomber le cube
	for (let i = 0; i < max; i++){
 		if((mouvement[i] == 0) && (Positions[i][0] != '') && (Positions[i][1] != '')){
            OldPositions[i] = Positions[i];
			Positions[i] = [Positions[i][0], Positions[i][1] + 1];
<<<<<<< HEAD
			mouvement[i] = 1;
 		}
 		//Si le cube sort du canvas
 		if(Positions[i][1] > canvas.width){
 			Positions[i] = ["",""];
 			mouvement[i] = 1;
=======
			mouvement[i]=1;
 		}
 		if(Positions[i][1]>canvas.width)
 		{
 			Positions[i]=["",""];
 			mouvement[i]=1;
>>>>>>> 63e21b5ffbbc98644cb2a5d3247385eedd3441e7
 		}
 		
 	}
}

function Nettoyage(){
    //Actualise toutes les nouvelles positions
    for (let i = 0; i < max; i++){
<<<<<<< HEAD
        if ((Positions[i][0] >= 0) && (Positions[i][0] <= canvas.width) && (mouvement[i] == 1)){
        	//Enleve l'ancien objet
        	mouvement[i] = 0;
        	if (OldPositions[i][0] != ''){
           		ctx.clearRect(OldPositions[i][0]-1, OldPositions[i][1]-1, tailleCube+2, tailleCube+2);
=======
        if ((Positions[i][0] >= 0) && (Positions[i][0] <= canvas.width)&& mouvement[i]==1){
        	//Enleve l'ancien objet
        	mouvement[i] = 0;
        	if (OldPositions[i][0]!='')
			{
           		ctx.clearRect(OldPositions[i][0]-1, OldPositions[i][1]-1, tailleCube+1, tailleCube+1);
>>>>>>> 63e21b5ffbbc98644cb2a5d3247385eedd3441e7
			}
			if (Positions[i][0] != ''){
	            //Créer l'objet avec sa nouvelle position
	            ctx.drawImage(cube, Positions[i][0], Positions[i][1]);
			}
        }
    }
}