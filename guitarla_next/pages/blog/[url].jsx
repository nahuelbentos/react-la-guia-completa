import Layout from '../../components/Layout';
import Image from 'next/image';
import {formatearFecha} from '../../helpers/index';
import styles from '../../styles/Entrada.module.css'

const EntradaBlog = ({entrada}) => {
  console.log(entrada);
  const {contenido, created_at, id, published_at, resumen, titulo, updated_at, imagen, url} = entrada[0];
  return (
    <Layout pagina={titulo}>
      <main>
        <h1 className="heading">{titulo}</h1>
        <article  className={styles.entrada} >
          <Image layout="responsive" width={800} height={600} src={imagen.url} alt={`Imagen entrada ${titulo}`} />
          <div className={styles.contenido}>
            <p className={styles.fecha} > {formatearFecha(published_at)} </p>
            <p className={styles.texto} > {contenido}</p>
          </div>
        </article>
      </main>
    </Layout>
  );
};

export async function getStaticPaths() {
  const url = `${process.env.API_URL}/blogs`;
  const resp = await fetch(url);
  const entradas = await resp.json();

  const paths = entradas.map( e => ({params: {url: e.url.toString()}}));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({params: {url}}) {
  const urlBlog = `${process.env.API_URL}/blogs?url=${url}`;
  const resp = await fetch(urlBlog);
  const entrada = await resp.json();
  console.log(entrada);
  return {
    props: {
      entrada,
    },
  };
}
// export async function getServerSideProps({query: {id}}) {
// const url = `${process.env.API_URL}/blogs/${id}`;
//   const resp = await fetch(url);
//   const entrada = await resp.json();
//   console.log(entrada);
//   return {
//     props: {
//       entrada,
//     },
//   };
// }

export default EntradaBlog;
