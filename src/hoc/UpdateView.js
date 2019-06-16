import React, {Component} from 'react';

const UpadateView = (WrappedComponent, StartView, EndView) => {
    return class extends Component {
        /** default text if something went wrong */
        currentView = <p>No connection...</p>;
        state = { clickedGame: false };      
        
        /** triggered on game icon click inside the Start view */
        getClickedGame = singleGameData => {
            /* updates the state, when game icon is clicked */
            this.setState({ clickedGame: true });
            /* on update re-renders the component with the End view */
            this.currentView = <EndView singleGameData={singleGameData} />;
        };
        
        componentWillMount() {
           /* sets the Start view just before mounting and re-render the component */
           this.currentView = <StartView emitSingleGame={this.getClickedGame}/>;
        }
    
        render = () => <WrappedComponent currentView={this.currentView} />
    }
}

export default UpadateView;
