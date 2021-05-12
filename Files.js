function Ecrire()
{
	localStorage.clear();
	preset = [tabConvoyeur, tabMachine, tabLot, tabLotDouble, tabDecoupeur, tabDecoupeurDouble, tabAiguillage, tabConvoyeurButee, tabTeleporteur]

	localStorage.setObj('tab', preset);
	Redirection();
}

Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}

function Redirection(){
  document.location.href="Projet.html"; 
}