function getAdmins(map){
    let admins = [];
    for ([key, value] of map){
        if (value === 'Admin') {
            admins.push(key);
        }
    }
    return admins;
}
const usuarios = new Map();

usuarios.set('Bruno','Admin');
usuarios.set('Andreia','Admin');
usuarios.set('Lucas','User');
usuarios.set('Tiago','Admin');
usuarios.set('Marcel','Admin');
usuarios.set('Kiko','Admin');
usuarios.set('Fabio','User');
usuarios.set('Kamilo','User');

console.log(getAdmins(usuarios));
