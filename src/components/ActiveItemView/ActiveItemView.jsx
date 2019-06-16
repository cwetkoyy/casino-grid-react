import React from 'react';
import SidePanel from './SidePanel/SidePanel.jsx';
import LoadingScreen from './LoadingScreen/LoadingScreen.jsx';
import styles from './ActiveItemView.module.scss';

/** ActiveItemView component is the end view, user can see it after he went through 
 * GridView, which is the at the start. ActiveItemView contains simualtion of 
 * loading game (Loading Screen) and side panel with information about the game
 * you have clicked. */
const ActiveItemView = ({singleGameData: {name, thumb, description}}) => {
    return (
        <div id={styles.ActiveItemView}>
            {/* loading screen simulation */}
            <LoadingScreen />
            {/* side panel with avatar, title and description about the game */}
            <SidePanel name={name} thumb={thumb} description={description} />            
        </div>
    );
}

export default ActiveItemView;
