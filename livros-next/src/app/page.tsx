import styles from './page.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import Head from 'next/head'
import { Menu } from '../../componentes/Menu'

export default function Home() {
  return (
    <div className={styles.container} style={{}} >
      <Head>
        <title>Loja Next no Head</title>
      </Head>
      <Menu/>
      <main className={styles.main}>
        <h1 className={styles.title}>Página Inicial</h1>
      </main>
    </div>
  )
}
