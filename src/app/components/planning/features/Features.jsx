import React from 'react';
import styles from './features.module.sass';
import getSkin from './skin.js';
import { css } from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';
import PlanningHeader from '../planningHeader';
import { checkIfPresent } from 'util/utilFunctions';

const features = (props) => {

    const myStyles = getSkin(props.skinGuide);

    const renderFeatureImage = (feature) => {
        if (checkIfPresent(feature.imageKey)) {
            return <img alt={feature.imageKey} styleName="feature-image" src={props.getImage(feature.imageKey)} />;
        }
        
        return <img alt="default-feature" styleName="feature-image" src={props.getImage('IMG_DEFAULT_FEATURE')} />;
    }

    const renderFeaturesList = () => {
        return props.features.featuresList.map(feature => {
            return (
                <div
                    key={feature.id}
                    className={css(myStyles.featureCard)}
                    styleName="feature-card"
                >
                    <div styleName="feature-card-header">
                        {renderFeatureImage(feature)}
                        <div className={css(myStyles.featureTitle)}>
                            {props.getLabel(feature.name)}
                        </div>
                    </div>
                    <div className={css(myStyles.featureDescription)} styleName="feature-description">
                        {props.getLabel(feature.description)}
                    </div>
                </div>
            );
        });
    }

    return (
        <div styleName="feature-container">
            <div styleName="feature-content">
                <PlanningHeader selectedTabNumber={1} />
                <div styleName="features-list-container">
                    <div styleName="features-list">
                        {renderFeaturesList()}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default applyWrappers(features, styles);