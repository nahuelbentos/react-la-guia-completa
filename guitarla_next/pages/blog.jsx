import Entrada from '../components/Entrada';
import Layout from '../components/Layout';
import styles from '../styles/Blog.module.css'

const Blog = ({entradas}) => {
  return (
    <Layout pagina="Blog">
      <main className='contenedor'>
        <h2 className='heading' >Blog</h2>

        <div className={styles.blog}>
          {entradas.map( e => <Entrada key={e.id} entrada={e} />)}
        </div>
      </main>
    </Layout>
  );
};

export async function getServerSideProps() {
  const url = `${process.env.API_URL}/blogs`;
  const resp = await fetch(url);
  const entradas = await resp.json();
  return {
    props: {
      entradas,
    },
  };
}

export default Blog;
