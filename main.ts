input.onButtonPressed(Button.A, function () {
    snelheid = 40
})
input.onGesture(Gesture.Shake, function () {
    snelheid = 0
})
input.onSound(DetectedSound.Quiet, function () {
    snelheid = 0
})
let snelheid = 0
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    . # . # .
    . . # . .
    `)
snelheid = 0
let moveMotorZIP = Kitronik_Move_Motor.createMoveMotorZIPLED(4)
moveMotorZIP.setZipLedColor(0, Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Red))
moveMotorZIP.setZipLedColor(1, Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Blue))
moveMotorZIP.setZipLedColor(2, Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Red))
moveMotorZIP.setZipLedColor(3, Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Blue))
for (let index = 0; index < 10; index++) {
    moveMotorZIP.rotate(1)
    moveMotorZIP.show()
    basic.pause(100)
}
basic.forever(function () {
    Kitronik_Move_Motor.setUltrasonicUnits(Kitronik_Move_Motor.Units.Centimeters)
    if (Kitronik_Move_Motor.measure() < 30) {
        Kitronik_Move_Motor.stop()
        Kitronik_Move_Motor.beepHorn()
        Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Left, snelheid)
        basic.pause(100)
    } else {
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, snelheid)
    }
})
