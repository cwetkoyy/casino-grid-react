import React from 'react';
import styles from './GridViewHeader.module.scss';

const GridViewHeader = ({title}) => {
    return (
        <div id={styles.GridHeader}>
            {/* title which is passed as a prop */}
            <div id={styles.GridTitle}>{title}</div>
            {/* horizontal line under title */}
            <div id={styles.GridHr}></div>
        </div>
    );
}

export default GridViewHeader;