import React from 'react';
import styles from './GridViewHeader.module.scss';
import Config from './../../../plugins/configHelper';

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

GridViewHeader.defaultProps = {
    title: Config.missing,
};

export default GridViewHeader;