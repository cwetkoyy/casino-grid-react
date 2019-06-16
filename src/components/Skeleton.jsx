import React from 'react';
import GridView from './GridView/GridView.jsx';
import ActiveItemView from './ActiveItemView/ActiveItemView.jsx';
import styles from './Skeleton.module.scss';
import UpdateView from './../hoc/UpdateView';

/** Skeleton holds the main two views of the game (GridView and ActiveItemView) */
const Skeleton = props => <div id={styles.Skeleton}>{props.currentView}</div>;
    
/** This HigherOrderComponent decides when to re-render and change the view inside Skeleton component */
export default UpdateView(Skeleton, GridView, ActiveItemView);