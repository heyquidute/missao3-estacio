import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import styles from '../styles/Home.module.css'
import Head from "next/head";
import { Menu } from "../componentes/Menu";
import Livro from "../classes/modelo/Livro";
import 'bootstrap/dist/css/bootstrap.css'


const baseURL = "http://localhost:3000/api/livros"

// deu problema? coloca React.FC no lugar de NextPage
const LivroLista: NextPage = () => {
    const [livros, setLivros] = useState<Livro[]>([])
    const [carregado, setCarregado] = useState(false)

    useEffect(()=> {
        async function obter() {
            try{
                const response = await fetch(baseURL)
                if (response.ok){
                    const data = await response.json()
                    if (Array.isArray(data)) {
                        setLivros(data)
                    }
                }
            } catch (error) {
                console.error('Erro ao obter os livros', error)
            } finally {
                setCarregado(true)
            }       
        }
        obter()
    },[carregado])

    const excluir = (codigo: number)=>{
        async function excluirLivro() {
            try{
                const response = await fetch (`${baseURL}/${codigo}`,{method: 'DELETE'})
                if(response.ok){
                    console.log(`Livro com código ${codigo} excluído`)
                }
            } catch (error){
                console.error(`Erro ao excluir livro com código ${codigo}`, error)
            } finally {
                setCarregado(false)
            }
        }
        excluirLivro()
    }

    return(
        <div className={styles.container}>
            <Head> </Head>
            <Menu />
            <main>
                <h1>Lista de Livros</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Título</th>
                            <th>Resumo</th>
                            <th>Editora</th>
                            <th>Autores</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {livros.map((livro) => (
                            <tr key={livro.codigo}>
                                <td>{livro.titulo}</td>
                                <td>{livro.resumo}</td>
                                <td>{livro.codEditora}</td>
                                <td>
                                    <ul>
                                        {livro.autores.map((autor, index) => (
                                            <li key={index}>{autor}</li>
                                        ))}
                                    </ul>
                                </td>
                                <td>
                                    <button onClick={() => excluir(livro.codigo)} className="btn btn-danger">Excluir</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </main>
        </div>
    )
}

export default LivroLista