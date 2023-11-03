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

        loadSprite("coin", "./assets/Coin.png")
        loadSprite("bridge", "./assets/Bridge.png")

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
                //tm = top middle
                //the number is the number on the order of where it is located on the tile. Ex.:
                //      tl:0tm:1  2
                //         3  4  5
                //         6  7  8
                //         9  10 11
                tl: 0,
                tm: 1,
                tr: 2,
                ml: 3,
                mm: 4,
                mr: 5,
                bl: 6,
                bm: 7,
                br: 8
            }
        })

        loadSprite("grass-oneway-tileset", "./assets/Grass_Oneway.png", {
            sliceX: 3,
            sliceY: 4,
            anims: {
                tl: 0,
                tm: 1,
                tr: 2,
                ml: 3,
                mm: 4,
                mr: 5,
                bl: 6,
                bm: 7,
                br: 8
            }
        })

        loadSprite("water", "./assets/Water.png", {
            sliceX: 8,
            sliceY: 1,
            anims: {
                //Key name to the animation
                wave: {
                    //to animate specifies the fisrt frame and the last with/ "from" and "to"
                    from: 0,
                    to: 7,
                    //speed of 16 frames oer second
                    speed: 16,
                    //loops the animations
                    loop: true,
                }
            }
          })
    },
    sounds: () => {
        //load the sounds
        loadSound("confirm-ui", "./sounds/confirm-ui.wav")
    }

}