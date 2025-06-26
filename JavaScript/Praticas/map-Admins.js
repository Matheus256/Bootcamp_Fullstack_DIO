/**
 * 
 * @param {Map} map Map com chave para o nome e valor a ocupação 
 * @returns Array apenas com nomes de Administradores 
 */
function getAdmins(map){
    let admins = [];

    for([key, value] of map){
        if(value == 'Admin'){
            admins.push(key);
        }
    }

    return admins;
}

//Criação do map
const usuarios = new Map();
usuarios.set('Luiz','Admin');
usuarios.set('Matheus', 'Admin');
usuarios.set('Jorge', 'User');
usuarios.set('Natália', 'Admin');

console.log(getAdmins(usuarios));