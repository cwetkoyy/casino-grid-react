export default {
    /** creates array that contain elemnts with value from 1 to N */
    createArrayToN : numberOfDots => Array.from({length: numberOfDots}, (value, key) => key + 1),

    /** concatinates dynamically passed class and links them with scss module classes */
    concatStyles: (styles, params) => params.map(style => styles[style]).join(' '),

    /** filters by name game data for single game */
    filterSingleGame: (gamesList, name) => gamesList.filter(singleGame => singleGame.name === name)[0],
};