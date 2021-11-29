import { connect } from 'react-redux';
import defaultSkinGuide from 'defaults/skins';

const mapStateToProps = ((state) => {
    const skin = state.colorProfiles;

    let skinGuide = defaultSkinGuide;
    if (skin !== undefined) {
        // skinGuide = skinGuide.mergeDeep(skin);
        skinGuide = {
            globalProfiles: {
                ...skinGuide.globalProfiles,
                ...skin.globalProfiles
            },
            entityProfiles: [],
            fontFamily: {
                ...skinGuide.fontFamily,
                ...skin.fontFamily
            }
        }
    }

    return {
        skinGuide
    };
});

const mapDispatchToProps = () => ({})

const mergeProps = (propsFromState, propsFromDispatch, ownProps) =>({
    ...propsFromState,
    ...propsFromDispatch,
    ...ownProps
})

const applySkin = (WrappedComponent) => connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(WrappedComponent);

export default applySkin;