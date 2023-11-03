export function generateMappings(tileType) {
    //return an object containing the mappings
    return{
        //specifies the symbol and the add function in Kaboom
        //will create an object specified by that symbol
        0: () => [
            //adds the name of the variable to the string so the function sprite can find it
            sprite(`${tileType}-tileset`, {anim: "tl"}),
            //creates a hitbox
            area(),
            //the body whith the isStatic says to kaboom that the object will not be affected by gravity
            body({isStatic: true }),
            //Kaboom will improve the performance of the code when the object is off screen
            //is good for optimization
            offscreen()
        ],
        1: () => [
            //second parameter is to define where to get in the spritesheet, specified in the loader
            sprite(`${tileType}-tileset`, {anim: "tm"}),
            area(),
            body({isStatic: true }),
            offscreen()
        ],
        2: () => [
            sprite(`${tileType}-tileset`, {anim: "tr"}),
            area(),
            body({isStatic: true }),
            offscreen()
        ],
        3: () => [
            sprite(`${tileType}-tileset`, {anim: "ml"}),
            area(),
            body({isStatic: true }),
            offscreen()
        ],
        4: () => [
            sprite(`${tileType}-tileset`, {anim: "mm"}),
            area(),
            body({isStatic: true }),
            offscreen()
        ],
        5: () => [
            sprite(`${tileType}-tileset`, {anim: "mr"}),
            area(),
            body({isStatic: true }),
            offscreen()
        ],
        6: () => [
            sprite(`${tileType}-tileset`, {anim: "bl"}),
            area(),
            body({isStatic: true }),
            offscreen()
        ],
        7: () => [
            sprite(`${tileType}-tileset`, {anim: "bm"}),
            area(),
            body({isStatic: true }),
            offscreen()
        ],
        8: () => [
            sprite(`${tileType}-tileset`, {anim: "br"}),
            area(),
            body({isStatic: true }),
            offscreen()
        ],
        9: () => [
            sprite(`${tileType}-oneway-tileset`, { anim: "tl" }),
            //The parameters specifies a custom hitbox to the object
            //Rect = creates a rectangle
            //Vect2 is the position of the rectangle
            //width = 16 - height = 3
            area({ shape: new Rect(vec2(0), 16, 3) }),
            //This is a tag, can be passed to game objects to identifie them
            //Ex.: can be used to check if it has colision with objects wit a certain tag
            "passthrough",
            body({ isStatic: true }),
            offscreen(),
          ],
          a: () => [
            sprite(`${tileType}-oneway-tileset`, { anim: "tm" }),
            area({ shape: new Rect(vec2(0), 16, 3) }),
            "passthrough",
            body({ isStatic: true }),
            offscreen(),
          ],
          b: () => [
            sprite(`${tileType}-oneway-tileset`, { anim: "tr" }),
            area({ shape: new Rect(vec2(0), 16, 3) }),
            "passthrough",
            body({ isStatic: true }),
            offscreen(),
          ],
          c: () => [
            sprite(`${tileType}-oneway-tileset`, { anim: "ml" }),
            offscreen(),
          ],
          d: () => [
            sprite(`${tileType}-oneway-tileset`, { anim: "mm" }),
            offscreen(),
          ],
          e: () => [
            sprite(`${tileType}-oneway-tileset`, { anim: "mr" }),
            offscreen(),
          ],
          o: () => [sprite("bridge"), area(), body({ isStatic: true }), offscreen()],
          "@": () => [sprite("coin"), area(), "coin", offscreen()],
    }

}