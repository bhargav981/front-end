import React from 'react';
import styles from './flagIcon.module.sass';
import applyWrappers from 'wrappers/ComponentWrapper';

const FlagIcon = (props) => {
    const color = props.color || '#407078';

    return (
        <div styleName="main-component">
            <svg width="100%" height="100%" viewBox="0 0 16 16">
                <g opacity="0.5">
                    <path d="M15.588 1.44947C15.431 1.34261 15.2481 1.28003 15.0585 1.2683C14.8689 1.25657 14.6797 1.29612 14.5107 1.3828C13.6353 1.73859 12.7043 1.93827 11.76 1.9728C10.6828 1.89353 9.62049 1.67413 8.6 1.32013C6.362 0.6668 5.58667 0.512133 3.87067 0.733466C3.6296 0.764909 3.40823 0.883095 3.24799 1.06592C3.08774 1.24875 2.99958 1.48369 3 1.7268V11.7401C3.00001 11.8811 3.02984 12.0205 3.08752 12.1492C3.1452 12.2778 3.22944 12.3928 3.3347 12.4866C3.43996 12.5804 3.56386 12.6509 3.69829 12.6935C3.83271 12.736 3.97461 12.7496 4.11467 12.7335C5.618 12.5608 6.318 12.7075 8.40934 13.3195C9.491 13.6943 10.6178 13.9232 11.76 14.0001C12.9268 13.9568 14.0753 13.6964 15.1467 13.2321C15.5947 13.0615 16 12.8321 16 12.2135V2.2668C16.0013 2.1076 15.9647 1.95039 15.893 1.80823C15.8213 1.66607 15.7168 1.54307 15.588 1.44947ZM12.0087 7.09147L9.23467 10.5581C9.21083 10.5878 9.1784 10.6093 9.14184 10.6197C9.10528 10.6301 9.06638 10.629 9.0305 10.6164C8.99462 10.6038 8.96351 10.5805 8.94146 10.5495C8.9194 10.5185 8.90748 10.4815 8.90734 10.4435V7.98347C8.90734 7.93926 8.88978 7.89687 8.85852 7.86562C8.82726 7.83436 8.78487 7.8168 8.74067 7.8168H7.53334C7.49624 7.81563 7.46019 7.80416 7.42924 7.78367C7.39829 7.76318 7.37366 7.73448 7.35809 7.70078C7.34252 7.66709 7.33664 7.62972 7.3411 7.59287C7.34555 7.55603 7.36018 7.52114 7.38334 7.49213L10.158 4.02547C10.1817 3.99572 10.2141 3.9741 10.2507 3.96358C10.2872 3.95307 10.3262 3.95419 10.3621 3.96679C10.398 3.97939 10.429 4.00285 10.451 4.03391C10.473 4.06496 10.4847 4.10209 10.4847 4.14013V6.60013C10.4847 6.64434 10.5022 6.68673 10.5335 6.71798C10.5647 6.74924 10.6071 6.7668 10.6513 6.7668H11.862C11.8991 6.76797 11.9351 6.77944 11.9661 6.79993C11.997 6.82042 12.0217 6.84912 12.0373 6.88282C12.0528 6.91651 12.0587 6.95388 12.0542 6.99073C12.0498 7.02757 12.0352 7.06246 12.012 7.09147H12.0087Z" fill={color} />
                    <path d="M1 0C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1L0 15C0 15.2652 0.105357 15.5196 0.292893 15.7071C0.48043 15.8946 0.734784 16 1 16C1.26522 16 1.51957 15.8946 1.70711 15.7071C1.89464 15.5196 2 15.2652 2 15V1C2 0.734784 1.89464 0.48043 1.70711 0.292893C1.51957 0.105357 1.26522 0 1 0V0Z" fill={color} />
                </g>
            </svg>
        </div>
    );
}



export default applyWrappers(FlagIcon, styles);
