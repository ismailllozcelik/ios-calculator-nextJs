import Head from 'next/head';
import Calculator from '../components/Calculator/Calculator';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Calculator />
    </div>
  );
}
