tiles.set_tilemap(tilemap("""level1 """))

my_sprite = sprites.create(assets.image("""duck"""), SpriteKind.player)
duck = my_sprite
scene.camera_follow_sprite(duck)
controller.move_sprite(duck)

my_sprite2 = sprites.create(assets.image("""za"""), SpriteKind.player)
za=my_sprite2

my_sprite3 = sprites.create(assets.image("""stump"""), SpriteKind.player)
stump= my_sprite3


def on_button_event_a_pressed():
    if duck.overlaps_with(za):
        za.follow(duck, 75)
controller.player1.on_button_event(ControllerButton.A, ControllerButtonEvent.PRESSED, on_button_event_a_pressed)

def on_button_event_b_pressed():
    za.follow(None)
    if duck.overlaps_with(stump):
        info.set_score(1)
        za.destroy()
controller.B.on_event(ControllerButtonEvent.PRESSED, on_button_event_b_pressed)

