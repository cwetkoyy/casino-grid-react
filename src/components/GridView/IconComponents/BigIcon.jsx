import React from 'react';
import styles from './Icons.module.scss';

const Big = ({thumb, name, openActiveView}) => {
    return (
        <div id={styles.GridGameOnFocus}>
            {/* here is the outside wrapper with onclick event listener */}
            <div id={styles.GridBigImg} onClick={()=> openActiveView(name)}>
                {/* here is visualized the icon */}
                <div id={styles.GridBigIcon}><img src={thumb} alt={name}/></div>
                {/* here is visualized the title */}
                <div id={styles.GridBigTitle}>{name}</div>
            </div>
        </div>
    );
}

export default Big;