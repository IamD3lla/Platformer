export function generateMappings(tileType) {
    //return an object containing the mappings
    return{
        //specifies the symbol and the add function in Kaboom
        //will create an object specified by that symbol
        0: () => [
            //adds the name of the variable to the string so the function sprite can find it
            sprite(`${tileType}-tileset`),
            //creates a hitbox
            area(),
            //the body whith the isStatic says to kaboom that the object will not be affected by gravity
            body({isStatic: true }),
            //Kaboom will improve the performance of the code when the object is off screen
            //is good for optimization
            offScreen()

        ]
    }

}