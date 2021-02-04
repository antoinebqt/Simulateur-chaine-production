//Gere le deplacement en fonction des éléments se trouvant aux alentours
function Deplacement(){
	//Fait tomber le cube
	for (let i = 0; i < max; i++){
 		if((mouvement[i] == 0) && (Positions[i][0] != '') && (Positions[i][1] != '')){
            OldPositions[i] = Positions[i];

            let ok=0;
            //teleporte au convoyeur
            for(let j = 0; Positions[i][1] + j < canvas.width;j++)
            {
            	for(let k = 0; k < nbConvoyeur;k++)
	            {
		            x = ConvoyeurList[k][0];
					y = ConvoyeurList[k][1];
					longueur = ConvoyeurList[k][2];
	            	if(Positions[i][0] <= x+longueur && Positions[i][0] >= x-taillecube && Positions[i][0] != '' && Positions[i][1]+j+taillecube > y-3 && Positions[i][1]+j+taillecube < y-1)
	            	{
	            		Positions[i][1]=Positions[i][1]+j;
	            		ok=1;
						mouvement[i] = 1;
						ctx.clearRect(OldPositions[i][0]-1, OldPositions[i][1]-1-j, tailleCube+2, tailleCube+2);
	            		break;
	            	}
	            	if (ok==1){break;}	
	            }
            }

 		}
 		//Si le cube sort du canvas
 		if(Positions[i][1] > canvas.width){
 			Positions[i] = ["",""];
 			mouvement[i] = 1;
 		}
 		
 	}
}

function Nettoyage(){
    //Actualise toutes les nouvelles positions
    for (let i = 0; i < max; i++){
        if ((Positions[i][0] >= 0) && (Positions[i][0] <= canvas.width) && (mouvement[i] == 1)){
        	//Enleve l'ancien objet
        	mouvement[i] = 0;
        	if (OldPositions[i][0] != ''){
           		ctx.clearRect(OldPositions[i][0]-1, OldPositions[i][1]-1, tailleCube+2, tailleCube+2);
			}
			if (Positions[i][0] != ''){
	            //Créer l'objet avec sa nouvelle position
	            ctx.drawImage(cube, Positions[i][0], Positions[i][1]);
			}
        }
    }
}