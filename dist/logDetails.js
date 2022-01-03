"use strict";
function logDetails(uid, item) {
    console.log("A product with ".concat(uid, " has a title as ").concat(item));
}
function logInfo(uid, user) {
    console.log("An user with ".concat(uid, " has a name as ").concat(user));
}
logDetails(123, 'sapato');
logDetails('123', 'sapato');
logInfo(123, 'Willian');
logInfo('123', 'Willian');
function renderPlatform(platform) {
    return platform;
}
// vai dar erro, pois não está listado nas plataformas
renderPlatform('ios');
