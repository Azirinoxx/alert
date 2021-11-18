input.onButtonPressed(Button.A, function () {
    étatactuel = 0
    basic.clearScreen()
})
let étatactuel = 0
étatactuel = 0
let étatpasse = 0
basic.forever(function () {
    étatactuel = pins.digitalReadPin(DigitalPin.P2)
    if (étatactuel != étatpasse) {
        if (étatactuel == 1) {
            basic.showLeds(`
                # . . . #
                . # . # .
                . . # . .
                . # . # .
                # . . . #
                `)
        }
    }
    étatpasse = étatactuel
})
