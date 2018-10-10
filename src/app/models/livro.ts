import { Autor } from "./autor";
import { Genero } from "./genero";

export class Livro {
    id: string;
    titulo: string;
    slug: string;
    autor: Autor[];
    genero: Genero[];
    ano: Date;
}
