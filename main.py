tiles.set_tilemap(tilemap("""level1 """))

my_sprite = sprites.create(assets.image("""duck"""), SpriteKind.player)
duck = my_sprite
scene.camera_follow_sprite(duck)
controller.move_sprite(duck)

#items
za = sprites.create(assets.image("""za"""), SpriteKind.projectile)
za.x=100
za.y=20

apple = sprites.create(assets.image("""apple"""), SpriteKind.projectile)
apple.x = 50 
apple.y=20

cake= sprites.create(assets.image('''cake'''), SpriteKind.projectile)
cake.x=150
cake.y=20

#bins
stump = sprites.create(assets.image("""stump"""), SpriteKind.enemy)
stump.y= 100

tree= sprites.create(assets.image("""tree"""), SpriteKind.enemy)
tree.y=stump.y
tree.x = stump.x-50


#where they go
slist =[stump, za, cake]
tlist = [tree, apple, cake]

#picking up and dropping off
info.set_score(0)

def on_on_overlap(sprite, otherSprite):
    
    def on_button_event_a_pressed():#up
            if duck.overlaps_with(otherSprite):
                otherSprite.follow(duck, 75)
    controller.player1.on_button_event(ControllerButton.A, ControllerButtonEvent.PRESSED, on_button_event_a_pressed)

    def on_button_event_b_pressed():#down
        otherSprite.follow(None)
        if duck.overlaps_with(stump):
            if otherSprite in slist:
                info.change_score_by(1)
                otherSprite.destroy()
        if duck.overlaps_with(tree):
            if otherSprite in tlist:
                info.change_score_by(2)
                otherSprite.destroy()

    controller.B.on_event(ControllerButtonEvent.PRESSED, on_button_event_b_pressed)
    
sprites.on_overlap(SpriteKind.player, SpriteKind.projectile, on_on_overlap)



