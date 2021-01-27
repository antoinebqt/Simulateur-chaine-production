let PositionsConvoyeur = [
['','','',''],['','','',''],['','','',''],['','','',''],['','','',''],
['','','',''],['','','',''],['','','',''],['','','',''],['','','',''],
['','','',''],['','','',''],['','','',''],['','','',''],['','','',''],
['','','',''],['','','',''],['','','',''],['','','',''],['','','',''],
['','','',''],['','','',''],['','','',''],['','','',''],['','','','']
];

function Convoyeur(x,y,longueur,vitesse,ctx)
{
  	ctx.fillStyle = 'blue';  
 	ctx.fillRect(x, y, longueur,3); 

 	for (let i = 0; i < max; i++){
		//Dès qu'un emplacement est libre
		if (PositionsConvoyeur[i][0] == ''){
			PositionsConvoyeur[i] = [x-longueur/2, x+longueur/2,y,vitesse];
			console.log('ouii',PositionsConvoyeur[i]);
			break;
		}
	}
}