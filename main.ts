basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P0) == 0) {
        basic.showIcon(IconNames.TShirt)
    }
})
