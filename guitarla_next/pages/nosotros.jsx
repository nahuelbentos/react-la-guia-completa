import Image from 'next/image';
import Layout from '../components/Layout';
import styles from '../styles/Nosotros.module.css'

const Nosotros = () => {
  return (
    <Layout pagina="Nosotros">
      <main className="contenedor">
        <h2 className="heading"> Nosotros</h2>
        <div className={styles.contenido}>
          <Image  layout='responsive' width={600} height={450} src="/img/nosotros.jpg" alt='Imagen de nosotros' />
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, aliquam doloremque totam doloribus necessitatibus itaque
              numquam eius molestiae beatae, incidunt soluta cumque quaerat quia dolorum inventore adipisci tenetur, distinctio veniam.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, aliquam doloremque totam doloribus necessitatibus itaque
              numquam eius molestiae beatae, incidunt soluta cumque quaerat quia dolorum inventore adipisci tenetur, distinctio veniam.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Nosotros;
