import React from 'react';

import { CARDS } from './constants';
import CardList from './components/CardList';

import styles from './styles.module.scss';
import '../../../scss/application.scss';

function Home({ currentUser }) {
  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Respuestas frecuentes</h1>
      <span className={styles.titleDescription}>Cliengo detecta las preguntas más frecuentes que hacen los clientes.</span>
      <p className={styles.description}>Optimiza el diálogo con ellos, configurando respuestas a estas preguntas desde aquí.</p> 
      <p className={styles.description}>
        <a href="/">
          Cómo configurar respuestas automáticas
        </a>
      </p>
      <CardList cards={CARDS} />
    </div>
  );
}

export default Home;
