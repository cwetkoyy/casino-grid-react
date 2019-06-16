import React from 'react';
import styles from './Icons.module.scss';

const Small = ({thumb, name, openActiveView}) => {
    return (
        <div id={styles.GridSmallImg} onClick={()=> openActiveView(name)}>
            {/* here is visualized the icon */}
            <div id={styles.GridSmallIcon}><img src={thumb} alt={name}/></div>
            {/* here is visualized the title */}
            <div id={styles.GridSmallTitle}>{name}</div>
        </div>
    );
}

export default Small;