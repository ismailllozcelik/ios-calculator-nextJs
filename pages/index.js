import Head from 'next/head';
import Calculator from '../components/calculator/calculator';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className="h-screen w-screen  flex items-center justify-center bg-slate-600">
      <Head>
        <title>Calculator</title>
      </Head>

      <div className="">
        <Calculator />
      </div>
    </div>
  );
}
