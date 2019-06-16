import React, {Component} from 'react';

const MapComponent = (WrappedComp, MappableComp, list)  => {
    return class extends Component {
        /** Gives the right component to be mapped, conditionally */
        chooseComp = (attrs, index, openActiveView) => {
            return typeof attrs === 'number' ?
            /** for the LoadingAnimation component */
            <MappableComp key={index} num={attrs}/> :
            /** for the OtherIcons component */
            <MappableComp key={`${attrs}-${index}`} {...attrs} openActiveView={openActiveView}/>
        }

        render() {
            return ( 
                <WrappedComp>
                    {list.map((attr, index) => 
                        this.chooseComp(attr, index, this.props.openActiveView))}
                </WrappedComp>
            );
        }
    }
}

export default MapComponent;