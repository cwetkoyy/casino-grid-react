import React from 'react';
import SmallIcon from './SmallIcon.jsx';
import styles from './Icons.module.scss';
import MapComponent from './../../../hoc/MapComponent';
import Config from './../../../plugins/configHelper';

/** OtherIcons is the component which renders the smaller icons inside GridView
 *  with the help of the Higher Order Component - MapComponent */
const OtherIcons = props => <div id={styles.GridOtherGames}>{props.children}</div>;          

export default MapComponent(
    OtherIcons,
    /** component to map */
    SmallIcon,
    /** gets all game data without the first element */
    Config.gamesList.slice(1)
);