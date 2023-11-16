import type { NextPage } from "next";
import styles from '../styles/Home.module.css'
import React, { useState } from "react";
import ControleEditora from "../classes/controle/ControleEditora";
import { useRouter } from "next/router"
import Head from "next/head";
import 'bootstrap/dist/css/bootstrap.css'
import { Menu } from "../componentes/Menu";


const controleEditora = new ControleEditora()
const baseURL = "http://localhost:3000/api/livros"

const LivroDados: NextPage = () => {

    const opcoes = controleEditora.getEditoras().map((editora) => ({
        value: editora.codEditora,
        text: editora.nome
    }))
    const [livro, setLivro] = useState({
        titulo: "",
        resumo: "",
        autores: "",
        codEditora: 0
    })

    const router = useRouter()

    const tratarCombo = (evento: React.FormEvent<HTMLSelectElement>) => {
        const novoCodEditora = Number((evento.target as HTMLSelectElement).value)
        setLivro({...livro, codEditora: novoCodEditora})
    }

    const incluirLivro = async (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()

        try{
            const response = await fetch (baseURL, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(livro)
            })
            if(response.ok){
                console.log('Livro incluído com sucesso')
                router.push("/")
            } else {
                console.error('Erro ao incluir o livro')
                const errorData = await response.json()
                console.log('Data from serve', errorData)
            }
        } catch (error) {
            console.error('Erro ao fazer a requisição', error)
        }
        
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Cadastro de Livros</title>
            </Head>
            <Menu></Menu>
            <main>
            <h1>Cadastro de Livros</h1>
                <form onSubmit={incluirLivro}>
                    <div className="form-group">
                        <label>Título:</label>
                        <input type="text" className="form-control" value={livro.titulo} onChange={(e) => setLivro({...livro, titulo: e.target.value})}/>
                    </div>

                    <div className="form-group">
                        <label>Resumo:</label>
                        <input type="text" className="form-control" value={livro.resumo} onChange={(e) => setLivro({...livro, resumo: e.target.value})}/>
                    </div>

                    <div className="form-group">
                        <label>Editora:</label>
                        <select className="form-control" value={livro.codEditora} onChange={tratarCombo}>
                            {opcoes.map((opcao) => (
                                <option key={opcao.value} value={opcao.value}>
                                    {opcao.text}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Autores:</label>
                        <input type="text" className="form-control" value={livro.autores} onChange={(e) => setLivro({...livro, autores: e.target.value})}/>
                    </div>

                    <button className="btn btn-primary" type="submit">Cadastrar Livro</button>        
                </form>
            </main>
        </div>
    )
}

export default LivroDados