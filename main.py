def on_button_pressed_a():
    for index in range(3000):
        if cuteBot.kyori():
            cuteBot.color_light(cuteBot.RGBLights.ALL, 0xff0000)
        else:
            cuteBot.closeheadlights()
    cuteBot.closeheadlights()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    for index2 in range(3000):
        if cuteBot.kyori():
            cuteBot.closeheadlights()
            custom.fo10()
            custom.fo9()
        else:
            cuteBot.color_light(cuteBot.RGBLights.ALL, 0xff0000)
            custom.fo6()
    cuteBot.closeheadlights()
    custom.fo9()
input.on_button_pressed(Button.B, on_button_pressed_b)
