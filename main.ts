input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 3000; index++) {
        if (cuteBot.kyori()) {
            cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xff0000)
        } else {
            cuteBot.closeheadlights()
        }
    }
    cuteBot.closeheadlights()
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 3000; index++) {
        if (cuteBot.kyori()) {
            cuteBot.closeheadlights()
        } else {
            cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xff0000)
        }
    }
    cuteBot.closeheadlights()
})
