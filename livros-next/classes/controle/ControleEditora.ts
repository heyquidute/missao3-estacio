import Editora from "../modelo/Editora";

const editoras: Editora[] = [
    new Editora(1, 'Rocco'),
    new Editora (2, 'Intrínseca'),
    new Editora (3, 'HapperCollins Brasil')
]

class ControleEditora {
    getEditoras(): Editora[]{
        return editoras;
    }
    getNomeEditora(codEditora: number): string|undefined{
        const editora = editoras.find((e) => e.codEditora === codEditora)
        return editora?.nome
    }
    incluir(novaEditora: Editora): void {
        const editoraExistente = editoras.find((e) => e.codEditora === novaEditora.codEditora)

        if (editoraExistente) {
            throw new Error('Editora com código já existente')
        } else {
            editoras.push(novaEditora)
        }
    }

}

export default ControleEditora;