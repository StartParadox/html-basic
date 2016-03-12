var user = prompt("You are traveling through the forest and encounter a dragon! Do you FIGHT it, try to TAME it or RUN?").toUpperCase();

switch(user){
    case 'FIGHT':
        var fight = prompt("How do you attack the dragon? With your FIST, your SWORD or your GUN?").toUpperCase();
        if (fight === "SWORD" || fight === "GUN"){
            console.log("After a fierce battle you slay the dragon!");
        }
        else if (fight === "FIST"){
            console.log("You break your arm trying to punch the dragon. The dragon devours you whole");
            }
        else {
            console.log("You don't react fast enough and die")
        }
        break;
    case 'TAME':
        console.log("The dragon agrees to be your ALLY (NOT PET!) and accompany you on your adventures");
        break;
    case 'RUN':
        console.log("You barely escape the dragons fiery breath");
        break;
    default:
        console.log("You were too slow in reacting and died a painful death");
        
}
