
//Gere le deplacement en fonction des éléments se trouvant aux alentours
function Deplacement(Positions){
	for (let i = 0; i < max; i++){
		if (Positions[i][0] != ''){
			var x = Positions[i][0];
			var y = Positions[i][1];
			Positions[i] = [x + 1,y];
		}
	}
}