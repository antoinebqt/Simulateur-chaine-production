function ConvoyeurButée() {
    for (let t = 0; t < nbConvoyeurButée; t++) {
        if(!((ConvoyeurButéeList[t][0] == 0 || ConvoyeurButéeList[t][0] == null) && (ConvoyeurButéeList[t][1] == 0 || ConvoyeurButéeList[t][1] == null)))
        {
            x = ConvoyeurButéeList[t][0];
            y = ConvoyeurButéeList[t][1];
            longueur = ConvoyeurButéeList[t][2];
            vitesse = (longueur + 2 * tailleCube) * CLOCK / ConvoyeurButéeList[t][3] / 1000;
            taillecube = TailleGenerateur / 2;

            for (let i = 0; i < max; i++) {
                //Si pas deplacé, et cubeX entre x+longueur et x et cubeY entre y-3 et y-1
                if ((mouvement[i] == 0) && (Positions[i][0] <= x + longueur) && (Positions[i][0] >= x - taillecube) && (Positions[i][0] != '') && (Positions[i][1] + taillecube > y - 3) && (Positions[i][1] + taillecube < y - 1)) {
                    if (ConvoyeurButéeList[t][7] == 1 && (Positions[i][0] <= ConvoyeurButéeList[t][0]+ConvoyeurButéeList[t][2]/2 && Positions[i][0]+taillecube >= ConvoyeurButéeList[t][0]+ConvoyeurButéeList[t][2]/2)){
                        //Mouvement effectué
                        mouvement[i] = 1;
                    }else{    
                        //Deplace vers la droite
                        OldPositions[i] = Positions[i];
                        Positions[i] = [Positions[i][0] + vitesse, Positions[i][1]];
                        //Mouvement effectué
                        mouvement[i] = 1;
                    }
                }
            }
            if(ConvoyeurButéeList[t][7] == 1){
                ctx.fillStyle = 'red';
            }
            if(ConvoyeurButéeList[t][7] == 0){
                ctx.fillStyle = 'lime';
            }
            ctx.fillRect(ConvoyeurButéeList[t][0]+ConvoyeurButéeList[t][2]/2, ConvoyeurButéeList[t][1], 2, 5);
        }
    }
}

function convoyeurButéeSpawn() {
    for (let i = 0; i < nbConvoyeurButée; i++) {
        if(!((ConvoyeurButéeList[i][0] == 0 || ConvoyeurButéeList[i][0] == null) && (ConvoyeurButéeList[i][1] == 0 || ConvoyeurButéeList[i][1] == null)))
        {
            if (ConvoyeurButéeList[i][3] < 0) {
                tps = -ConvoyeurButéeList[i][3];
            } else tps = ConvoyeurButéeList[i][3];
            //Dessine les convoyeurs
            ctx.fillStyle = 'black';
            ctx.strokeStyle = 'black';
            ctx.fillRect(ConvoyeurButéeList[i][0], ConvoyeurButéeList[i][1], ConvoyeurButéeList[i][2], 3);
            ctx.fillRect(ConvoyeurButéeList[i][0], ConvoyeurButéeList[i][1] + 5, ConvoyeurButéeList[i][2], 3);
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(ConvoyeurButéeList[i][0] + 1, ConvoyeurButéeList[i][1] + 4, 3, Math.PI / 2, 1.5 * Math.PI, false);
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(ConvoyeurButéeList[i][0] + ConvoyeurButéeList[i][2] - 1, ConvoyeurButéeList[i][1] + 4, 3, Math.PI * 1.5, Math.PI / 2, false);
            ctx.stroke();
            ctx.font = '12px sans-serif';
            ctx.fillText('Temps : ' + tps + 's' + ' /', ConvoyeurButéeList[i][0], ConvoyeurButéeList[i][1] + 20);
            ctx.fillStyle = 'green';
            ctx.fillText(ConvoyeurButéeList[i][4] + 's', ConvoyeurButéeList[i][0] + 78, ConvoyeurButéeList[i][1] + 20);
            ctx.fillStyle = 'black';
            ctx.fillText('/', ConvoyeurButéeList[i][0] + 103, ConvoyeurButéeList[i][1] + 20);
            ctx.fillStyle = 'red';
            ctx.fillText(ConvoyeurButéeList[i][5] + 's', ConvoyeurButéeList[i][0] + 109, ConvoyeurButéeList[i][1] + 20);
        }
    }
}

function TimerButée(){
    for (let j = 0; j < nbConvoyeurButée; j++){
        if(!((ConvoyeurButéeList[j][0] == 0 || ConvoyeurButéeList[j][0] == null) && (ConvoyeurButéeList[j][1] == 0 || ConvoyeurButéeList[j][1] == null)))
        {
            ConvoyeurButéeList[j][6]++;
            console.log("1sec");
            if (ConvoyeurButéeList[j][7] == 0){
                if (ConvoyeurButéeList[j][6] > ConvoyeurButéeList[j][4]){
                    ConvoyeurButéeList[j][7] = 1;
                    ConvoyeurButéeList[j][6] = 0;
                }
            }else if(ConvoyeurButéeList[j][7] == 1){
                if (ConvoyeurButéeList[j][6] > ConvoyeurButéeList[j][5]){
                    ConvoyeurButéeList[j][7] = 0;
                    ConvoyeurButéeList[j][6] = 0;
                }
            }
        }
    }
    if (stopped != 1){
        setTimeout(function(){TimerButée()}, (CLOCK/VitesseAcceleration)*20);
    }
}
