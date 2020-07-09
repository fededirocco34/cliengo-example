import React from 'react';

import { CARDS } from './constants';
import CardList from './components/CardList';

import styles from './styles.module.scss';
import '../../../scss/application.scss';

function Home({ currentUser }) {
  return (
    <div className={styles.app}>
      <h1 className="title-primary">
        Respuestas frecuentes
      </h1>
      <span className="title-description-bold">
        Cliengo detecta las preguntas más frecuentes que hacen los clientes.
      </span>
      <p className={`title-description ${styles.description}`}>
        Optimiza el diálogo con ellos, configurando respuestas a estas preguntas desde aquí.
      </p> 
      <a href="/">
        <p className="title-description">
            Cómo configurar respuestas automáticas
        </p>
      </a>
      <CardList cards={CARDS} />
    </div>
  );
}

export default Home;
