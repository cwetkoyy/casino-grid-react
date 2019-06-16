import React from 'react';
import styles from './SidePanelHeader.module.scss';

const SidePanelHeader = ({thumb, name}) => {
    return (
        <div id={styles.SidePanelHeader}>
            {/* here is visualized the thumbnail */}
            <div id={styles.SidePanelThumb}><img src={thumb} alt={name} /></div>
            {/* here is visualized the title */}
            <div id={styles.SidePanelTitle}>{name}</div>
        </div>
    );
}

export default SidePanelHeader;