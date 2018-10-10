import { Livro } from "./livro";

export class Usuario {
    nome: string;
    sobrenome: string;
    slug: string;
    email: string;
    livros: Livro[];
}
