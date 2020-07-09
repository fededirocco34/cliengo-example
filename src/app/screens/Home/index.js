import React from 'react';
import { t } from 'i18next';

import { CARDS } from './constants';
import CardList from './components/CardList';

import styles from './styles.module.scss';
import '../../../scss/application.scss';

function Home({ currentUser }) {
  return (
    <div className={styles.app}>
      <h1 className="title-primary">
        {t('Home:frequentAnswers')}
      </h1>
      <span className="title-description-bold">
        {t('Home:cliengoQuestions')}
      </span>
      <p className={`title-description ${styles.description}`}>
      {t('Home:optimizeDialog')}
      </p> 
      <a href="/">
        <p className="title-description">
        {t('Home:automaticAnswers')}
        </p>
      </a>
      <CardList cards={CARDS} />
    </div>
  );
}

export default Home;
