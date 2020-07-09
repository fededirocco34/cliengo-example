import React, { useState } from 'react';
import Switch from "react-switch";

import Logo from '../../../../../assets/conversacion.svg';

import CardEditModal from '../CardEditModal';

import { ON_SWITCH_COLOR, OFF_SWITCH_COLOR, SWITCH_HEIGHT, SWITCH_WIDTH } from './constants';
import styles from './styles.module.scss';

function Card({ title, description, enabled }) {
  const [isOpen, setModalOpen] = useState(false); 
  const [isEnabledOption, setEnabledOption] = useState(enabled); 

  const handleModal = () => {
    if (isEnabledOption) {
    setModalOpen(!isOpen);
    }
  }

  const handleEditOption = () => setEnabledOption(!isEnabledOption);
  
  return (
    <>
      <div className={`column ${styles.container}`}>
        <div className={`row ${styles.titleContainer}`}>
          <img src={Logo} alt="Logo pregunta" />
          <h3 className="title-card">{title}</h3>
        </div>
        <div className={styles.content}>
          <p className={`description-card ${styles.description}`}>{description}</p>
        </div>
        <hr className={styles.line} />
        <div className={`row end ${styles.footer}`}>
          <i className="fa fa-pencil link" aria-hidden="true" onClick={handleModal} />
          <Switch 
            onChange={handleEditOption} 
            checked={isEnabledOption} 
            offColor={OFF_SWITCH_COLOR}
            onColor={ON_SWITCH_COLOR}
            uncheckedIcon={false}
            checkedIcon={false}
            height={SWITCH_HEIGHT}
            width={SWITCH_WIDTH}
            className={styles.switch}
          />
        </div>
      </div>
      {isOpen && <CardEditModal title={title} description={description} isOpen={isOpen} handleClose={handleModal} />}
    </>
  );
}

export default Card;