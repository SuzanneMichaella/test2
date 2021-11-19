tiles.setTilemap(tilemap`level1 `)
let my_sprite = sprites.create(assets.image`duck`, SpriteKind.Player)
let duck = my_sprite
scene.cameraFollowSprite(duck)
controller.moveSprite(duck)
// items
let za = sprites.create(assets.image`za`, SpriteKind.Projectile)
za.x = 100
za.y = 20
let apple = sprites.create(assets.image`apple`, SpriteKind.Projectile)
apple.x = 50
apple.y = 20
let cake = sprites.create(assets.image`cake`, SpriteKind.Projectile)
cake.x = 150
cake.y = 20
// bins
let stump = sprites.create(assets.image`stump`, SpriteKind.Enemy)
stump.y = 100
let tree = sprites.create(assets.image`tree`, SpriteKind.Enemy)
tree.y = stump.y
tree.x = stump.x - 50
// where they go
let slist = [stump, za, cake]
let tlist = [tree, apple, cake]
// picking up and dropping off
info.setScore(0)
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function on_on_overlap(sprite: Sprite, otherSprite: Sprite) {
    controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function on_button_event_a_pressed() {
        // up
        if (duck.overlapsWith(otherSprite)) {
            otherSprite.follow(duck, 75)
        }
        
    })
    controller.B.onEvent(ControllerButtonEvent.Pressed, function on_button_event_b_pressed() {
        // down
        otherSprite.follow(null)
        if (duck.overlapsWith(stump)) {
            if (slist.indexOf(otherSprite) >= 0) {
                info.changeScoreBy(1)
                otherSprite.destroy()
            }
            
        }
        
        if (duck.overlapsWith(tree)) {
            if (tlist.indexOf(otherSprite) >= 0) {
                info.changeScoreBy(2)
                otherSprite.destroy()
            }
            
        }
        
    })
})
