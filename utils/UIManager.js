//singleton = class that its stancieted to anyone

class UIManager {
    //functions that are methods

    //content = content that is going to be showed
    displayBlinkingUIMessage(content, position) {
        //stores the object in a constant/variable
        const message = add([
            //text component can takes a second parameter that is an object to especifies the properties
            text(content, {
                size: 24,
                font: "Round"
            }),
            area(),
            anchor("center"),
            pos(position),
            //used it to call it later on tween
            opacity(),
            //sets a state to activate something
            //fist parameter is the initial state
            state("flash-up", ["flash-up", "flash-down"])
        ])

        //1° parameter the name of the state
        //2° parameter takes a callback that is a function that sets whats going to happen
        //onStateEnter is in the moment that is in that state
        message.onStateEnter("flash-up", async () => {
            //allows you to smoothly changes a value from something to another
            //await waits the function finishes before proceding with the code
            await tween(
                //initial value
                //only gets the value, doesn't change the value on function
                message.opacity,
                //target value
                0,
                //How much time to it happen in seconds
                0.5,
                //sets the new value everytime that it changes
                //stores the values in the variable (x)
                (nextOpacityValue) => message.opacity = nextOpacityValue,
                //How frequently the function above is going to be called
                //kaboom function to call it linear
                easings.linear
            )
            //Enters in this state
            message.enterState("flash-down")
        })

        message.onStateEnter("flash-down", async () => {
            await tween(
                message.opacity,
                1,
                0.5,
                (nextOpacityValue) => message.opacity = nextOpacityValue,
                easings.linear
            )
            message.enterState("flash-up")
        })

    }

    displayMainMenu(){
        //add is used to create game objects
        //that will go to be displayed in the screen
        //adds the background image
        add([
            //display the sprite
            sprite("forest-background"),
            //sacale(x), x = times you want to scale the object
            scale(4)
        ])
        //adds the logo
        add([
            sprite("logo"),
            //creates a hitbox over the game object that you created
            //also permits to use/ acess anchor
            area(),
            //specifies from where the objects will be drawed
            anchor("center"),
            //center is a function that returns a vector with the x and y values
            pos(center().x , center().y - 150),
            scale(8)
        ])

        //this allows to acess other methods in the class
        this.displayBlinkingUIMessage(
            "Press [ Enter ] to Start Game",
            //kaboom feature that iniciates an vector with 2 values
            vec2(center().x, center().y + 100)
        )

        //Kaboom function that listens to a key on press
        //1°parameter is the key
        //2°parameter is what happens, in a function
        onKeyPress("enter", () => {
            //Play the sound
            play("confirm-ui", { speed: 1.5 })
            //change page
            go("controls")
        })

    }

    displayControlsMenu() {

        add([
            sprite("forest-background"),
            scale(4)
        ])
        add([
            text("Controls", {font: "Round", size: 50}),
            area(),
            anchor("center"),
            pos(center().x, center().y - 200)
        ])
        
        const controlPrompts = add([
            pos(center().x - 200, center().y -20)
        ])

        //creates a child game Object of Control Prompts
        //Add here is a method, not an object
        //A single game object can have multiple "childs"
        controlPrompts.add([
            sprite("up"),
            //is relative to the "parent", defines the pos relative to the const controlPrompts
            pos(0, -80)
        ])
        controlPrompts.add([
            sprite("down")
            //Doensn't have the pos() function because the default position look good!
        ])
        controlPrompts.add([sprite("right"), pos(80, 0)])
        controlPrompts.add([sprite("left"), pos(-80,0)])
        controlPrompts.add([sprite("space"), pos(300,-50), scale(1.5)])

        controlPrompts.add([
            text("Jump", {font: "Round", size: 32}),
            pos(+337, 120)
        ])
        controlPrompts.add([
            text("Move", {font: "Round", size: 32}),
            pos(10, 120)
        ])

        this.displayBlinkingUIMessage(
            "Press [ Enter ] to Start Game",
            vec2(center().x, center().y + 200)
        )

        onKeyPress("escape", () => {
            play("confirm-ui", { speed: 1.5 })
            go("menu")
        }) 
        onKeyPress("enter", () => {
            play("confirm-ui", { speed: 1.5 })
            //When it's a number there're no need to put the ""
            go("1")
        })

    }
}

export const uiManager = new UIManager()