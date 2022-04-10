input.onButtonPressed(Button.A, function () {
    basic.showString(nombre.charAt(0))
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + nombre.charAt(0) + apellido1.charAt(0) + apellido2.charAt(0))
})
let apellido2 = ""
let apellido1 = ""
let nombre = ""
nombre = "Samuel"
apellido1 = "Ochoa"
apellido2 = "Suarez"
