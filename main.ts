tiles.setTilemap(tilemap`level1 `)
let my_sprite = sprites.create(assets.image`duck`, SpriteKind.Player)
let duck = my_sprite
scene.cameraFollowSprite(duck)
controller.moveSprite(duck)
let my_sprite2 = sprites.create(assets.image`za`, SpriteKind.Player)
let za = my_sprite2
let my_sprite3 = sprites.create(assets.image`stump`, SpriteKind.Player)
let stump = my_sprite3
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function on_button_event_a_pressed() {
    if (duck.overlapsWith(za)) {
        za.follow(duck, 75)
    }
    
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function on_button_event_b_pressed() {
    za.follow(null)
    if (duck.overlapsWith(stump)) {
        info.setScore(1)
        za.destroy()
    }
    
})
