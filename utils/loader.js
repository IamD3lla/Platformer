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
        loadSprite("up", "./assets/W_Key_Dark.png")
        loadSprite("down", "./assets/S_Key_Dark.png")
        loadSprite("left", "./assets/A_Key_Dark.png")
        loadSprite("right", "./assets/D_Key_Dark.png")
        loadSprite("space", "./assets/Space_Key_Dark.png")

        loadSprite("forest-background", "./assets/Forest_Background_0.png")
        loadSprite("logo", "./assets/Logo.png")
        //importing a spritesheet - 3° parameter specifing which tile is wich
        loadSprite("grass-tileset","./assets/Grass_Tileset.png", {
            //How many tiles there is in the image horizontly
            sliceX: 3,
            //How many tiles there is verticly 
            sliceY: 4,
            //used mostly for animations but can be used just to especify tiles
            anims: {
                //tl = Top left Corner tile
                //the number is the number on the order of where it is located on the tile. Ex.:
                //      tl:0  1  2
                //         3  4  5
                //         6  7  8
                //         9  10 11
                tl: 0
            }
        })
    },
    sounds: () => {
        //load the sounds
        loadSound("confirm-ui", "./sounds/confirm-ui.wav")
    }

}