import React from "react";
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.css'

export const Menu: React.FC = () => {
    return(
        <nav className="nav nav-dark bg-dark">
            <Link href="/" className="nav-link text-white">Home</Link>
            <Link href="/LivroLista" className="nav-link text-white">Catálogo</Link>
            <Link href="/LivroDados" className="nav-link text-white">Novo</Link>
        </nav>
    )
}

