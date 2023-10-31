/*
VS Code tips:
Alt + uppåt/nedåtpil  - flytta rad uppåt/nedåt
Shift+Alt+pil  - kopiera rad
Ctrl + '
*/
let exempel
exempel = 5

console.log(exempel)

if( exempel < 10 ) {
	console.log('inuti')
}
/*
2a Ange en variabel och ge den valfritt värde mellan 0 och 23. Skriv ut variabelns värde med console.log.Om variabeln har värdet 12 ska du skriva ut strängen "Dags för lunch".Kontrollera att du har gjort rätt genom att variera värdet.

2b Om värdet är mindre än 12, skriv ut "Förmiddag" i stället.

2c Om värdet är större än 12, skriv ut "Eftermiddag".
*/
// ange en variabel
// ge variabeln ett värde
// skriv ut variabeln
// om...
let time
time = 15
console.log('Tiden är: ', time)
if ( time == 12 ) {
	console.log("Dags för lunch")
}
else if( time < 12 ) {
	console.log('Förmiddag')
}
else { // if (time > 12) {
	console.log('Eftermiddag')
}
