radio.onReceivedNumber(function (receivedNumber) {
    item = receivedNumber
})
let item = 0
radio.setGroup(1)
RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
basic.showIcon(IconNames.Chessboard)
basic.forever(function () {
    if (item == 1) {
        RingbitCar.freestyle(50, 50)
        basic.showIcon(IconNames.Angry)
    } else if (item == 2) {
        RingbitCar.freestyle(50, 0)
        basic.showIcon(IconNames.Happy)
    } else if (item == 3) {
        RingbitCar.freestyle(0, 50)
        basic.showIcon(IconNames.Sad)
    } else {
        item = 0
        RingbitCar.brake()
    }
})
