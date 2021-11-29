import { connect } from 'react-redux';

const mapStateToProps = ((state) => {
    const labels = state.labels.labelsList;

    return {
    
        getLabel: (key, defaultValue = "", vars = {}) => {

            if(defaultValue === ""){
                defaultValue = key;
            }
            let label = defaultValue;

            if (labels !== undefined && labels[key] !== undefined) {
                label = labels[key];
            }

            if (key === null || key === undefined) {
                label = defaultValue;
            }

            for (var varKey in vars) {
                if (vars.hasOwnProperty(varKey)) {
                    label = label.replace(new RegExp(`%{${varKey}}`, 'g'), vars[varKey]);
                }
            }
            return label;
        }

    };
})

const mapDispatchToProps = () => ({})

const mergeProps = (propsFromState, propsFromDispatch, ownProps) => ({
    ...propsFromState,
    ...propsFromDispatch,
    ...ownProps
})

const applyLabel = (WrappedComponent) => connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(WrappedComponent);

export default applyLabel;