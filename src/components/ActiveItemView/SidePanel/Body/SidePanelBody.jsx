import React from 'react';
import styles from './SidePanelBody.module.scss';

const SidePanelBody = ({description}) => {
    return (
        <div id={styles.SidePanelBody}>
            {/* here is visualized the description */}
            <div id={styles.SidePanelText}>{description}</div>
        </div>
    );
}

export default SidePanelBody;