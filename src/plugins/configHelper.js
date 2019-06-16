import gamesDataJSON from './../gamesData/grid-app-data.json';

export default {
    /** title variable for GridViewHeader */
    title: 'CATEGORY TITLE',

    /** number of dots for loading animation */
    dotsForAnimation: 12,

    /** extracted list of needed data for manipulation and visialisation */
    gamesList:  gamesDataJSON.categories[0].games,
};