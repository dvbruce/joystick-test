joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P14, joystickbit.ButtonType.down, function () {
    basic.showString("E")
})
input.onButtonPressed(Button.A, function () {
    basic.showString("A")
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P15, joystickbit.ButtonType.down, function () {
    basic.showString("F")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("B")
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P13, joystickbit.ButtonType.down, function () {
    basic.showString("D")
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P12, joystickbit.ButtonType.down, function () {
    basic.showString("C")
})
basic.showString("Game pad test")
joystickbit.initJoystickBit()
