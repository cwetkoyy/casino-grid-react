import React from 'react';
import SidePanelBody from './Body/SidePanelBody.jsx';
import SidePanelHeader from './Header/SidePanelHeader.jsx';
import styles from './SidePanel.module.scss';

/** SidePanel component visualizes the thumbnail, title and description of the game user opened */
const SidePanel = ({name, thumb, description}) => {
    return (
        <div id={styles.SidePanel}>
            {/* here is visualized the thumbnail with title of the game user has opened */}
            <SidePanelHeader thumb={thumb} name={name} />
            {/* here is visualized the description of the game user has opened */}
            <SidePanelBody description={description} />
        </div>
    );
}

export default SidePanel;