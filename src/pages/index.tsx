import styles from '../styles/home.module.scss';

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>
        Olá <span>Dev!</span>
      </h1>
    </div>
  );
}
