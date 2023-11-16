import React from "react"; 
import ControleEditora from "./controle/ControleEditora";

class LinhaLivro extends React.Component{
    render(){
        const controleEditora = new ControleEditora()
        const {livro, excluir, resumo} = this.props
        const nomeEditora = controleEditora.getNomeEditora(livro.codEditora)

        return(
            <tr>
                <td>
                    {livro.titulo} <br></br>
                    <button className="btn btn-danger" onClick={()=>excluir(livro.codigo)}>Excluir</button>
                </td>
                <td>{livro.resumo}</td>
                <td>{nomeEditora}</td>
                <td>
                    <ul>
                        {livro.autores.map((autor, index)=>(
                        <li key={index}>{autor}</li>
                        ))}
                    </ul>
                </td>
                <td>
                    
                </td>
            </tr>
        )
    }
}

export default LinhaLivro