import {Level} from "./utils/Level.js"
import { level1Layout, level1Mappings } from "./content/level1/level1Layout.js"
import kaboom from "./libs/kaboom.mjs"
import { uiManager } from "./utils/UIManager.js"
import { load } from "./utils/loader.js"

//function that opens the window
//set the properties of the window
kaboom({
    width: 1280,
    height: 720,
    letterbox: true
})

//calls the function to load the assets
load.assets()
//calls the function to load the fonts
load.fonts()
//calls the function to load the sounds
load.sounds()

//creates an object for the scenes
//In the scenes we draw the different objects that we want in each scene
const scenes = {

    menu: () => {
        //add is one of the main function of Kaboom
        //recives an array of components that are used to create the game objects
        //text() = text component
        //pos(x,y) = position component with the values of x and y
        //color(rgb) = sets the color with rgb values
        //add([text("test"), pos(500,500), color(0,0,0)])

        uiManager.displayMainMenu()

    },
    controls: () => {
        uiManager.displayControlsMenu()
    },
    1: () => {
        //We can call a new Object Level() because we exported the class
        const level1 = new Level()
        //Draw the background
        level1.drawBackground("forest-background")
        //Draw the maps
        level1.drawMapLayout(level1Layout, level1Mappings)
        //Draw the water
        level1.drawWaves("water", "wave")
    },
    2: () => {

    },
    3: () => {

    },
    gameover: () => {
        
    },
    end: () => {

    }

}

for(const key in scenes) {
    //kaboom function to create scenes
    //key = name of the scene
    scene(key, scenes[key])

}

//Kaboom function that especifies a default scene/ where the game starts
go("menu")