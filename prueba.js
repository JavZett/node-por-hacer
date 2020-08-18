estado = "true";
console.log(typeof (estado));

estado = Boolean(estado);
console.log(typeof (estado));
if (estado === true) {
    console.log('sirve ' + estado);
} else if (estado === false) {
    console.log('sirve');
}