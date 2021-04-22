export var NivelEducativo;
(function (NivelEducativo) {
    NivelEducativo["BACHILLERATO"] = "Bachillerato";
    NivelEducativo["UNIVERSIDAD"] = "Universidad";
    NivelEducativo["POSGRADO"] = "Posgrado";
})(NivelEducativo || (NivelEducativo = {}));
var Aprendiz = /** @class */ (function () {
    function Aprendiz(nombres, aplellidos, avatar, edad, nivelEducativo, cursos) {
        this.nombres = nombres;
        this.aplellidos = aplellidos;
        this.avatar = avatar;
        this.edad = edad;
        this.nivelEducativo = nivelEducativo;
        this.cursos = cursos;
    }
    Aprendiz.prototype.darCursosCertificados = function () {
        var totalCursosC = 0;
        this.cursos.forEach(function (curso) {
            if (curso.certificado)
                totalCursosC++;
        });
        return totalCursosC;
    };
    return Aprendiz;
}());
export { Aprendiz };
