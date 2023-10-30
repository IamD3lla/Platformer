export class Level {

    drawMapLayout(levelLayout, mappings) {
        const layerSettings = {
            tileWidth: 16,
            tileHeight: 12,
            tiles: mappings
        }

        this.map = []
    }

    drawBackground(bgSpriteName) {
        //the fixed() property is set because when the player moves the background will stay fixed
        add([sprite(bgSpriteName), fixed(), scale(4)])
    }
}