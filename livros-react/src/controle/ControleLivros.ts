import Livro from "../modelo/Livro";

const livros: Livro[] = [
    new Livro(101,1,'Jogos Vorazes','Quando Katniss Everdeen, de 16 anos, decide participar dos Jogos Vorazes para poupar a irmã mais nova, causando grande comoção no país, ela sabe que essa pode ser a sua sentença de morte. Mas a jovem usa toda a sua habilidade de caça e sobrevivência ao ar livre para se manter viva.',['Suzanne Collins']),
    new Livro(102,2,'Percy Jackson','Percy Jackson é um menino de 12 anos, vivendo a rotina normal de escola, amigos e família que boa parte das crianças dessa idade vive. Contudo, ele acaba descobrindo que mais do que um mero pré- adolescente, ele é um semideus, filho nascido pela relação de uma humana com um deus, no caso, Poseidon.',['Rick Riordan']),
    new Livro(103,3,'O Hobbit','O Hobbit conta a história de Bilbo Bolseiro, um Hobbit pacato e satisfeito cuja vida vira de cabeça para baixo quando ele se junta ao mago Gandalf e a treze anões em sua jornada para reaver um tesouro roubado.',['J. R. R. Tolkien'])
]

class ControleLivro {
    obterLivros(): Promise<Livro[]>{
        return new Promise((resolve, reject)=>{
            resolve(livros)
        })
    }

    incluir (novoLivro: Livro): void{
        const codigoMaisAlto = livros.reduce((max,livro) => (livro.codigo > max ? livro.codigo: max),0)
        novoLivro.codigo = codigoMaisAlto + 1
        livros.push(novoLivro)
    }

    excluir (codigo: number): void{
        const indice = livros.findIndex((livro) => livro.codigo === codigo)
        if (indice !== -1){
            livros.splice(indice, 1)

        }
    }
}

export { ControleLivro as obterLivros }
export default ControleLivro;