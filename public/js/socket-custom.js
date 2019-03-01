var socket = io();

socket.on('connect', function() {
    console.log('Se conecto al servidor');
});

//Escuchar
socket.on('disconnect', function() {

    console.log('Perdimos conexion con el servidor');

});
//Enviar información
socket.emit('enviarMensaje', {
    usuario: 'César',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('respuesta del servidor: ', resp);
});

//Escuchar informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});