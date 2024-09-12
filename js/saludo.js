let contenido=document.getElementById("mensaje");
if(!localStorage.nom){
    let nombre=prompt("Digita tu nombre","");
    localStorage.nom=nombre;
    contenido.innerHTML="Hola "+nombre;
}else{
    contenido.innerHTML="Soy la IA Hola "+localStorage.nom;
    
}