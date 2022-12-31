radio.setGroup(1)

input.onButtonPressed(Button.A,function(){
    radio.sendString("Happy new year")
})

input.onButtonPressed(Button.B,function(){
    radio.sendString("Clear")
})