import React from 'react';
import styles from './LoadingAnimation.module.scss';
import Helper from './../../../../plugins/helperPlugin';

/** SingleDot component is used to be mapped and animated for the Loading animation */
const SingleDot = ({num}) => 
        <div className={Helper.concatStyles(styles, [`sk-circle${num}`,'sk-circle'])}></div>
        
export default SingleDot;