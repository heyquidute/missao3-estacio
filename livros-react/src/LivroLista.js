import React, {Component, useEffect} from "react";
import ControleLivro from "./controle/ControleLivros";
import ControleEditora from "./controle/ControleEditora";
import LinhaLivro from "./LinhaLivro";

class LivroLista extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            livros: [],
            carregado: false
        }
        this.controleLivro = new ControleLivro()
        this.controleEditora = new ControleEditora()
    }

    componentDidMount(){
        this.obterLivros()
    }

    obterLivros(){
        this.controleLivro.obterLivros().then((livros)=>{
            this.setState({livros, carregado: true,})
        })
    }

    excluir = (codigo) => {
        this.controleLivro.excluir(codigo)
        this.setState({carregado: false})
    }

    render(){
        const {excluir} = this.props
        const {livros} = this.state

        return(
            <main>
                <h1>Catálogo de Livros</h1>
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Título</th>
                            <th scope="col">Resumo</th>
                            <th scope="col">Editora</th>
                            <th scope="col">Autores</th>
                        </tr>
                    </thead>
                    <tbody>
                        {livros.map((livro)=>(
                            <LinhaLivro key={livro.codigo} livro={livro} excluir={this.excluir}/>
                        ))}
                    </tbody>
                </table>
            </main>
        )
    }
}
export default LivroLista