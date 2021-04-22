import { Aprendiz, NivelEducativo } from "./aprendiz.js";
import { Curso } from "./curso.js";
var cursos = [
    new Curso("Practicas esenciales para el agilismo", 20, 20, true, 2009),
    new Curso("Ingeniería de Software para la Web", 15, 99, true, 2018),
    new Curso("Pruebas automatizadas", 15, 99, false, 2020),
    new Curso("Principios de diseño y Arquitectura", 30, 75, true, 2019),
];
export var ap = new Aprendiz("Juan Pablo", "Reyes Gómez", "avatar.png", 30, NivelEducativo.POSGRADO, cursos);
console.log(ap.cursos);
var aprendizTable = document.getElementById("aprendiz");
var estadisticasTable = document.getElementById("estadisticas");
mostrarDatosAprendiz(ap);
mostrarEstadisticas(ap);
function mostrarDatosAprendiz(aprendiz) {
    var tbodyAprendiz = document.createElement("tbody");
    tbodyAprendiz.innerHTML = "<tr><td colspan=2><img src=\"./img/" + aprendiz.avatar + "\" height=\"100\"></td></tr>\n  <tr><td>Nombres: </td><td>" + aprendiz.nombres + "</td></tr>\n  <tr><td>Apellidos: </td><td>" + aprendiz.aplellidos + "</td></tr>\n  <tr><td>Nivel educativo: </td><td>" + aprendiz.nivelEducativo + "</td></tr>\n  <tr><td>Edad: </td><td>" + aprendiz.edad + "</td></tr>";
    aprendizTable.appendChild(tbodyAprendiz);
}
function mostrarEstadisticas(aprendiz) {
    var numerosCertificados = aprendiz.darCursosCertificados();
    var trElement = document.createElement('tr');
    trElement.innerHTML = "<td>Cursos Certificados</td><td>" + numerosCertificados + "</td>";
    estadisticasTable.appendChild(trElement);
}
