let lastRenderTime = 0;
const SNAKE_SPEED = 3; // Nombre de fois où le serpent bouge / seconde
//Game loop = fonction qui se repette encore et encore au cours du jeu, 
//ce qui permet de mettre à jour continuellement le rendu
function main (currentTime) {
    //fonction qui notifie au navigateur que l'on veut faire une mise à jour d'une animation 
    //avant le prochain rafraichissement du navigateur/écran.
    //La méthode prend comme seul argument un callback qui sera appelé avant le rafraichissement du nav
    //Le callback possède un seul argument, qui est un DOMHighResTimeStamp
    //c'est-à-dire ici le temps à partir duquel requestAnimationFrame va commencer à appeler les callbacks
    window.requestAnimationFrame(main);
    const secondSinceLastRender = (currentTime - lastRenderTime) / 1000;
    //si le snake bouge plus lentement que le navigateur ne se rafraichie 
    //nous n'avons pas besoin d'utiliser .requestAnimationFrame
    if(secondSinceLastRender < 1/SNAKE_SPEED) return
    
    
    console.log('Render');
    lastRenderTime = currentTime;
    
}

window.requestAnimationFrame(main);