import React from 'react';
import styles from './LoadingAnimation.module.scss'
import SingleDot from './SingleDot';
import MapComponent from './../../../../hoc/MapComponent';
import Helper from  '../../../../plugins/helperPlugin';
import Config from '../../../../plugins/configHelper';

/** AnimationComponent is used to populate as many single dots as the animation needs. This
 * is possible with the help of the Higher Order Function - MapComponent, which was used to 
 * map the smaller icons in GridView component */
const AnimationComponent = props => {
    return (
        <div className={Helper.concatStyles(styles,
            [`sk-fading-circle`,'animationBody'])}>
                {props.children}
        </div>
    );
}

export default MapComponent(
    AnimationComponent, 
    /** component to map */
    SingleDot, 
    /** creates array from 1 to N, N is number of dots needed for animation */
    Helper.createArrayToN(Config.dotsForAnimation)
);