import Image from 'next/image';
import styles from './page.module.css';
import AuthForm from './components/AuthForm';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Archivo messenger</h1>
      <aside>
        <Image width={100} height={100} src={'images/logo.svg'} alt="Логотип" />
      </aside>
      <p>Войдите в приложение под своим аккаунтом</p>
      <AuthForm />
    </main>
  );
}
