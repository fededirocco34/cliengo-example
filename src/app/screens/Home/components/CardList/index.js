import React from 'react';

import Card from '../Card';

import styles from './styles.module.scss';

function CardList({ cards }) {
  return (
    <div className={`row ${styles.container}`}>
      {cards.map(({ name, responseText, enabled }, index) => 
        <Card key={index} title={name} description={responseText} enabled={enabled} />
      )}
    </div>
  );
}

export default CardList;