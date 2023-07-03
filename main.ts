led.enable(false)
let tempo = 0
let X = 270
ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P1, X)
basic.forever(function () {
    ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P1, X)
    if (ModuleWorld_Anaglog.Rocker(ModuleWorld_Anaglog.mwAnalogNum.AP2P3, ModuleWorld_Anaglog.enRocker.Up)) {
        X = X - 4
    } else if (ModuleWorld_Anaglog.Rocker(ModuleWorld_Anaglog.mwAnalogNum.AP2P3, ModuleWorld_Anaglog.enRocker.Down)) {
        X = X + 4
    } else if (ModuleWorld_Anaglog.Rocker(ModuleWorld_Anaglog.mwAnalogNum.AP2P3, ModuleWorld_Anaglog.enRocker.Left)) {
        X = X + 4
    } else if (ModuleWorld_Anaglog.Rocker(ModuleWorld_Anaglog.mwAnalogNum.AP2P3, ModuleWorld_Anaglog.enRocker.Right)) {
        X = X - 4
    }
    if (X < 200) {
        X = 200
    } else if (X > 360) {
        X = 270
    }
    if (ModuleWorld_Digatal.Button(ModuleWorld_Digatal.mwDigitalNum.P10P11, ModuleWorld_Digatal.enButton.Press)) {
        basic.pause(500)
        if (ModuleWorld_Digatal.Button(ModuleWorld_Digatal.mwDigitalNum.P10P11, ModuleWorld_Digatal.enButton.Press)) {
            for (let index = 0; index < 2; index++) {
                ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P1, 200)
                basic.pause(500)
                ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P1, 360)
                basic.pause(500)
            }
            control.reset()
        }
        for (let index = 0; index < 2; index++) {
            ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P1, 200)
            basic.pause(300)
            ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P1, 360)
            basic.pause(300)
        }
    }
})
