// nombre = document.getElementById("nombre").value;
// correo = document.getElementById("correo").value;
// rut = document.getElementById("rut").value;
// valor = rut.value.replace('.','');
// valor = valor.replace('-','');
// cuerpo = valor.slice(0,-1); // Aislar Cuerpo y Dígito Verificador
// dv = valor.slice(-1).toUpperCase();
// rut.value = cuerpo + '-'+ dv // Formatear RUN

// var p1 = document.getElementById("password").value;
// var p2 = document.getElementById("passwdord2").value;
// var espacios = false;
// var numeros = false;
// var cont = 0;

// while (!espacios && (cont < p1.length)) {
//     if (p1.charAt(cont) == " " || isNan(p1.charAt(cont)) ){ //Se valida que la contraseña no tenga espacio
//         espacios = true;
//     }
//     cont++;
// };
// var cont = 0;
// while (!numeros && (cont < p1.length)) {
//     if (isNan(p1.charAt(cont)) ){ //Se valida que la contraseña no contenga números
//         numeros = true;
//     }
//     cont++;
// };

// function validacion() {
    
//     //VALIDACION DEL NOMBRE
//     if( nombre == null || nombre.length == 0 || /^\s+$/.test(nombre) ) {
//         nombre.setCustomValidity("Nombre incorrecto"); 
//         return false;
//     }

//     //VALIDACION DEL CORREO
//     else if( correo == null || correo.length == 0 || !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(correo))  ) {
//         correo.setCustomValidity("Dirección de correo incorrecta"); 
//         return false;
//     }

//     //VALIDACION DEL RUT
//     else if( rut == null || rut.length == 0 ){
//         correo.setCustomValidity("RUT incorrecto"); 
//         return false;
//     }
    
//     else if( rut != null && rut.length > 0){
//         // Si no cumple con el mínimo ej. (n.nnn.nnn)
//         if(cuerpo.length < 7) { 
//             rut.setCustomValidity("RUT muy corto"); 
//             return false;}
//         // Si no cumple con el máximo ej. (nn.nnn.nnn)
//         if(cuerpo.length > 8) { 
//             rut.setCustomValidity("RUT muy largo"); 
//             return false;}
//         // Calcular Dígito Verificador
//         suma = 0;
//         multiplo = 2;
//         // Para cada dígito del Cuerpo
//         for(i=1;i<=cuerpo.length;i++) {
//             // Obtener su Producto con el Múltiplo Correspondiente
//             index = multiplo * valor.charAt(cuerpo.length - i);
//             // Sumar al Contador General
//             suma = suma + index;
//             // Consolidar Múltiplo dentro del rango [2,7]
//             if(multiplo < 7) { multiplo = multiplo + 1; } else { multiplo = 2; }
//         }
//         // Calcular Dígito Verificador en base al Módulo 11
//         dvEsperado = 11 - (suma % 11);
//         // Casos Especiales (0 y K)
//         dv = (dv == 'K')?10:dv;
//         dv = (dv == 0)?11:dv;
//         // Validar que el Cuerpo coincide con su Dígito Verificador
//         if(dvEsperado != dv) { 
//             rut.setCustomValidity("RUT inválido"); 
//             return false;
//         }
//         // // Si todo sale bien, eliminar errores (decretar que es válido)
//         // if(dvEsperado = dv) { rut.setCustomValidity("RUT correcto"); 
//         //     return true;
//         // }

//     //VALIDACION CONTRASEÑA
//     else if (espacios = true){
//         p1.setCustomValidity("Contraseña con formato incorrecto"); 
//         return false;
//     }

//     //VALIDACION CONTRASEÑA
//     else if (numeros = false){
//         p1.setCustomValidity("Contraseña no contiene números"); 
//         return false;
//     }

//     else if (p1 != p2){
//         p1.setCustomValidity("Las dos contraseñas deben ser iguales"); 
//         return false;
//     }

//     else (){
//         return true;
//     }
// };
// };