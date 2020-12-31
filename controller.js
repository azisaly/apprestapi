'use strict'

var response = require('./rest');
var connection = require('./koneksi');

exports.index = function (req, res) {
    response.ok("Aplikasi Rest Api berjalan!")
};


