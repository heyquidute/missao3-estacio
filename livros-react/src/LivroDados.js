import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import ControleLivro from "./controle/ControleLivros";
import ControleEditora from "./controle/ControleEditora";

const LivroDados = () => {
    const [titulo, setTitulo] = useState("")
    const [resumo, setResumo] = useState("")
    const [autores, setAutores] = useState("")
    const [codEditora, setCodEditora] = useState(0)
    
    const controleLivro = new ControleLivro()
    const controleEditora = new ControleEditora()
    const opcoes = controleEditora.getEditoras().map((editora)=> ({
        value: editora.codEditora,
        text: editora.nome
    }))

    const navigate = useNavigate()

    const tratarCombo = (evento) => {
        const novoCodEditora = Number(evento.target.value)
        setCodEditora(novoCodEditora)
    }

    const incluir = (evento) => {
        evento.preventDefault()
        const novoLivro = {
            codigo: 0,
            titulo: titulo,
            resumo: resumo,
            autores: autores.split('\n'),
            codEditora: Number(codEditora)
        }
        controleLivro.incluir(novoLivro)
        navigate('/')
    }

    return(
        <div className="container">
            <h1>Cadastro de Livros</h1>

            <form>
                <div className="form-group">
                    <label>Título</label>
                    <input type="text" className="form-control" value={titulo} onChange={(e) => setTitulo(e.target.value)}></input>
                </div>

                <div className="form-group">
                    <label>Resumo</label>
                    <textarea className="form-control" value={resumo} onChange={(e) => setResumo(e.target.value)}></textarea>
                </div>

                <div className="form-group">
                    <label>Editora</label>
                    <select className="form-control" value={codEditora} onChange={tratarCombo}>
                        {opcoes.map((opcoes) => <option key={opcoes.value} value={opcoes.value}>
                            {opcoes.text}
                        </option>)}
                    </select>
                </div>

                <div className="form-group">
                    <label>Autores</label>
                    <textarea className="form-control" value={autores} onChange={(e) => setAutores(e.target.value)}></textarea>
                </div>

                <button className="btn btn-primary" type="button" onClick={incluir}>
                    Cadastrar Livro
                </button> 
            </form>
        </div>
    )

}

export default LivroDados