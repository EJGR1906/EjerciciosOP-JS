let fecha_hoy = new Date()
console.log(fecha_hoy)

let fecha_nacimiento = new Date(2001,5,19,7)
console.log(fecha_nacimiento)

let primeraVariable = fecha_hoy.getTime() > fecha_nacimiento.getTime()
console.log(primeraVariable)

let dia_nacimiento = fecha_nacimiento.getDate()
console.log(dia_nacimiento)

let mes_nacimiento = fecha_nacimiento.getMonth() + 1
console.log(mes_nacimiento)

let anyo_nacimiento = fecha_nacimiento.getFullYear()
console.log(anyo_nacimiento)