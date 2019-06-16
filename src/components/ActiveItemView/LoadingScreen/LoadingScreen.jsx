import React from 'react';
import styles from './LoadingScreen.module.scss'
import LoadingAnimation from './AnimationComponents/LoadingAnimation.jsx';

/** LoadingScreen component simulates loading of the game user has clicked. Animation is
 * completely dummy and fake for the purpose of the task */
const LoadingScreen = () => {
    return (
        <div id={styles.LoadingScreen}>
            {/* here is visualized the loading screen wrapper */}
            <div id={styles.LoadingAnimation}>
                {/* here is visualized the loading screen spinner */}
                <LoadingAnimation/>
                {/* here is visualized the loading screen title */}
                <div id={styles.LoadingText}>Loading...</div>
            </div>
        </div>
    );
}

export default LoadingScreen;