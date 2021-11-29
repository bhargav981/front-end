import React from 'react';
import styles from './infoIcon.module.sass';
import applyWrappers from 'wrappers/ComponentWrapper';
import { checkIfPresent } from 'util/utilFunctions';

const InfoIcon = (props) => {
    const skin = props.skinGuide.globalProfiles.palette
    let color = skin.grayColor4;
    if (checkIfPresent(props.svgColor)) {
        color = props.svgColor;
    }
    return (
        <div styleName="main-component">
            <svg width="100%" height="100%" viewBox="0 0 12 12" fill="none">
                <path d="M6 0C4.81331 0 3.65328 0.351894 2.66658 1.01118C1.67989 1.67047 0.910851 2.60754 0.456726 3.7039C0.00259972 4.80026 -0.11622 6.00666 0.115291 7.17054C0.346802 8.33443 0.918247 9.40353 1.75736 10.2426C2.59648 11.0818 3.66558 11.6532 4.82946 11.8847C5.99335 12.1162 7.19975 11.9974 8.2961 11.5433C9.39246 11.0892 10.3295 10.3201 10.9888 9.33342C11.6481 8.34673 12 7.18669 12 6C11.9983 4.40923 11.3656 2.88411 10.2407 1.75926C9.1159 0.634414 7.59077 0.00172054 6 0V0ZM6 9.5C5.85167 9.5 5.70666 9.45601 5.58333 9.3736C5.45999 9.29119 5.36386 9.17406 5.30709 9.03701C5.25033 8.89997 5.23548 8.74917 5.26441 8.60368C5.29335 8.4582 5.36478 8.32456 5.46967 8.21967C5.57456 8.11478 5.7082 8.04335 5.85368 8.01441C5.99917 7.98547 6.14997 8.00033 6.28702 8.05709C6.42406 8.11386 6.54119 8.20999 6.62361 8.33332C6.70602 8.45666 6.75 8.60166 6.75 8.75C6.75 8.94891 6.67099 9.13968 6.53033 9.28033C6.38968 9.42098 6.19892 9.5 6 9.5ZM6.8 6.46C6.7108 6.49893 6.6349 6.56305 6.58161 6.6445C6.52832 6.72594 6.49996 6.82117 6.5 6.9185C6.5 7.05111 6.44732 7.17829 6.35356 7.27205C6.25979 7.36582 6.13261 7.4185 6 7.4185C5.86739 7.4185 5.74022 7.36582 5.64645 7.27205C5.55268 7.17829 5.5 7.05111 5.5 6.9185C5.49996 6.6266 5.58509 6.34102 5.74495 6.09678C5.90481 5.85255 6.13247 5.66026 6.4 5.5435C6.56526 5.47138 6.70794 5.35591 6.81295 5.20933C6.91795 5.06274 6.98137 4.8905 6.99648 4.71082C7.0116 4.53114 6.97785 4.35072 6.89882 4.18865C6.81978 4.02659 6.69839 3.88891 6.54751 3.79018C6.39662 3.69146 6.22185 3.63537 6.0417 3.62785C5.86154 3.62034 5.68271 3.66167 5.52412 3.74747C5.36554 3.83328 5.2331 3.96037 5.14084 4.11529C5.04857 4.27021 4.99991 4.44719 5 4.6275C5 4.76011 4.94732 4.88729 4.85356 4.98105C4.75979 5.07482 4.63261 5.1275 4.5 5.1275C4.36739 5.1275 4.24022 5.07482 4.14645 4.98105C4.05268 4.88729 4 4.76011 4 4.6275C4 4.26692 4.09747 3.91304 4.28212 3.60332C4.46676 3.29361 4.7317 3.03957 5.0489 2.86809C5.3661 2.69662 5.72376 2.61409 6.08402 2.62924C6.44428 2.64438 6.79375 2.75665 7.09544 2.95414C7.39712 3.15164 7.6398 3.42702 7.79779 3.75115C7.95579 4.07527 8.02322 4.43608 7.99294 4.79539C7.96267 5.1547 7.83582 5.49914 7.62582 5.79225C7.41582 6.08537 7.13048 6.31627 6.8 6.4605V6.46Z"
                fill={color}/>
            </svg>
        </div>
    );
}



export default applyWrappers(InfoIcon, styles);