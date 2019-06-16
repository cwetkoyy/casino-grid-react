import React from 'react';
import GridViewHeader from './Header/GridViewHeader.jsx';
import GridViewBody from './Body/GridViewBody.jsx';
import styles from './GridView.module.scss';
import Helper from '../../plugins/helperPlugin';
import Config from '../../plugins/configHelper';

/** GridView component is the view at the start. It contains header with title and
 * body with clickable icons, which leads to ActiveItemView.*/
const GridView = ({emitSingleGame}) => {  
  /** separates first game from the others */
  const [gameOnFocus, ...otherGames] = Config.gamesList; 

  /** sends single game data to the parent, filters it by game name */
  const getNameHandler = name => emitSingleGame(Helper.filterSingleGame(Config.gamesList, name));

  return (
    <div id={styles.GridView}>
      {/* header with title */}
      <GridViewHeader title={Config.title}/>
      {/* body with visualized games */}
      <GridViewBody gameOnFocus={gameOnFocus} otherGames={otherGames} getGameName={getNameHandler}/>     
    </div>
  );
}

GridView.defaultProps = {
  emitSingleGame: Config.noCallback
};

export default GridView;
