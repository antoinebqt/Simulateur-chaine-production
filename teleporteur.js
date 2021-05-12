function teleporteurSpawn(){
	for (let i = 0; i < nbTeleporteur; i++){
		if(!((TeleporteurList[i][0]==0 ||TeleporteurList[i][0]==null) && (TeleporteurList[i][1]==0||TeleporteurList[i][1]==null)))
        {
			//Dessine les téléporteurs
            ctx.drawImage(teleporteur, TeleporteurList[i][0], TeleporteurList[i][1]);
	    	ctx.fillStyle = 'white';
		    ctx.font = '17px sans-serif';
		    ctx.fillText(TeleporteurList[i][2], TeleporteurList[i][0] + 8, TeleporteurList[i][1] + 19);
			ctx.fillStyle = 'black';
		    ctx.font = '12px sans-serif';
            if(TeleporteurList[i][3] != 0){
                ctx.fillText('Vers : ' + TeleporteurList[i][3], TeleporteurList[i][0] - 5, TeleporteurList[i][1] - 5);
            }
		}
	}
}