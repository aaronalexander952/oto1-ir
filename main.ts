let strip = neopixel.create(DigitalPin.P15, 2, NeoPixelMode.RGB)
let left = strip.range(0, 1)
let right = strip.range(1, 1)
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    if (cuteBot.IR_Button(cuteBot.IRButtons.Up)) {
        cuteBot.forward()
    }
    if (cuteBot.IR_Button(cuteBot.IRButtons.Down)) {
        cuteBot.backforward()
    }
})
basic.forever(function () {
    if (cuteBot.IR_Button(cuteBot.IRButtons.Left)) {
        cuteBot.turnleft()
    }
    if (cuteBot.IR_Button(cuteBot.IRButtons.Right)) {
        cuteBot.turnright()
    }
})
basic.forever(function () {
    if (cuteBot.IR_Button(cuteBot.IRButtons.Back)) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Prelude), music.PlaybackMode.InBackground)
        cuteBot.motors(0, 50)
    }
    if (cuteBot.IR_Button(cuteBot.IRButtons.OK)) {
        cuteBot.motors(0, 0)
        cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0x000000)
        cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0x000000)
        basic.pause(2000)
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Entertainer), music.PlaybackMode.InBackground)
        for (let index = 0; index < 2; index++) {
            left.showColor(neopixel.colors(NeoPixelColors.Red))
            right.showColor(neopixel.colors(NeoPixelColors.Red))
            cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0xff0000)
            cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0xff0000)
            cuteBot.motors(50, 25)
            basic.pause(1000)
            left.showColor(neopixel.colors(NeoPixelColors.Green))
            right.showColor(neopixel.colors(NeoPixelColors.Green))
            cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0x00ff00)
            cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0x00ff00)
            cuteBot.motors(25, 50)
            basic.pause(1000)
            left.showColor(neopixel.colors(NeoPixelColors.Blue))
            right.showColor(neopixel.colors(NeoPixelColors.Blue))
            cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0x007fff)
            cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0x007fff)
            cuteBot.motors(50, 25)
            basic.pause(1000)
            cuteBot.motors(25, 50)
        }
        cuteBot.motors(0, 0)
        cuteBot.forward()
    }
})
