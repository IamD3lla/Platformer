//thats declares an object
// object that loads the general assets of the game
export const load = {
    //property of the object
    fonts: () => {
        //an asset of kaboom JS that load the font
        loadFont("Round", "./assets/Round9x13.ttf")
    },
    assets: () => {
        //load the sprites
        loadSprite("forest-background", "./assets/Forest_Background_0.png"),
        loadSprite("logo", "./assets/Logo.png")
    },
    sounds: () => {
        //load the sounds
        loadSound("confirm-ui", "./sounds/confirm-ui.wav")
    }

}