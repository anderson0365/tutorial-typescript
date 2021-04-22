import { Curso } from "./curso.js";

export enum NivelEducativo {
  BACHILLERATO = "Bachillerato",
  UNIVERSIDAD = "Universidad",
  POSGRADO = "Posgrado",
}

export class Aprendiz {
  constructor(
    public nombres: string,
    public aplellidos: string,
    public avatar: string,
    public edad: number,
    public nivelEducativo: NivelEducativo,
    public cursos: Curso[]
  ) {}

  public darCursosCertificados(): number {
    let totalCursosC: number = 0;
    this.cursos.forEach((curso) => {
      if (curso.certificado) totalCursosC++;
    });
    return totalCursosC;
  }
}
