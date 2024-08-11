const bcrypt = require('bcryptjs');

const SALT_ROUNDS = 10; // numero de rondas para encriptar, 10 es el numero de rondas en promedio que se usa

function encrypt(plainText) { // texto plano
    return bcrypt.hashSync(plainText, SALT_ROUNDS); // recibe 2 parametros el texto plano y el numero de rondas
}

function compare(plainText, hash) { // texto plano y hash (texto encriptado)
    return bcrypt.compareSync(plainText, hash); // compara el texto plano con el hash
}

module.exports = {
    encrypt,
    compare,
};