import React from 'react';
import BigIcon from '../IconComponents/BigIcon.jsx';
import OtherIcons from '../IconComponents/OtherIcons.jsx';
import styles from './GridViewBody.module.scss';
import Config from './../../../plugins/configHelper';

const GridViewBody = ({gameOnFocus, otherGames, getGameName}) => {
    /** gets the game name of clicked icon to emit it to the parent and filter the data */
    const openActiveView = name => getGameName(name);

    return (
        <div id={styles.GridBody}>
            {/* Icon on focus */}
            <BigIcon thumb={gameOnFocus.thumb} name={gameOnFocus.name} openActiveView={openActiveView} />
            {/* Other, smaller Icons */}
            <OtherIcons otherGames={otherGames} openActiveView={openActiveView}/>
        </div>
    );
};

GridViewBody.defaultProps = {
    gameOnFocus: [],
    otherGames: [],
    getGameName: Config.noCallback
};


export default GridViewBody;