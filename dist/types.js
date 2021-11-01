"use strict";
// boolean (true / false)
var isOpen;
isOpen = true;
// string ('foo', "foo", `foo`)
var message;
message = "foo " + isOpen;
// number (int, float, hex, binary)
var total;
total = 0xff0;
// array (type[])
var items;
items = ['foo', 'bar'];
var values;
values = [1, 2, 3];
// tuple um array onde já se sabe os itens
var title;
title = [1, 'foo'];
// enum
var Colors;
(function (Colors) {
    Colors["white"] = "#fff";
    Colors["black"] = "#000";
})(Colors || (Colors = {}));
// any pode ser qualquer coisa
var coisa;
coisa = [1];
// void (vazio) não retorna nada
function logger() {
    console.log('foo');
}
// never não é um retorno de nada
throw new Error('error');
// object
var cart;
cart = {
    key: 'fiat'
};
// Type Inference - seta um tipo default com base no primeiro valor setado
var message2 = "messagem definida";
message2 = "string nova";
window.addEventListener('click', function (e) {
    // descreve o tipo do "e" sem precisar setar pois ele já entende.
    console.log(e.target);
});
