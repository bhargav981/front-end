import { connect } from 'react-redux';
// import getImages from 'defaults/images';

const mapStateToProps = ((state) => {
    const images = state.images.images;

    return {
    
        getImage: (key, defaultValue = "", vars = {}) => {

            // key = key.toUpperCase();

            let image = defaultValue;

            if (images !== undefined && images[key] !== undefined) {
                image = images[key];
            }

            if (key === null || key === undefined) {
                image = defaultValue;
            }

            return image;
        }

    };
})

const mapDispatchToProps = () => ({})

const mergeProps = (propsFromState, propsFromDispatch, ownProps) => ({
    ...propsFromState,
    ...propsFromDispatch,
    ...ownProps
})

const applyImages = (WrappedComponent) => connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(WrappedComponent);

export default applyImages;