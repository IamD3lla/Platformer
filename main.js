import kaboom from "./libs/kaboom.mjs"

//function that opens the window
//set the properties of the window
kaboom({
    width: 1280,
    height: 720,
    letterbox: true
})

//creates an object for the scenes
const scenes = {

    menu: () => {

    },
    controls: () => {

    },
    1: () => {

    },
    2: () => {

    },
    3: () => {

    },
    4: () => {
        
    }

}

for(const key in scenes) {
    //kaboom function to create scenes
    //key = name of the scene
    scene(key, scenes[key])

}