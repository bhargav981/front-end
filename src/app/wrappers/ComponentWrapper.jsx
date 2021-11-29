import applySkin from 'providers/SkinProvider';
import applyLabel from 'providers/LabelProvider';
import applyImages from 'providers/ImagesProvider'
import CSSModules from 'react-css-modules';

const applyWrappers = (WrappedComponent, styles) => {
	return applySkin(
		applyLabel(
			applyImages(
				CSSModules(
					WrappedComponent,
					styles,
					{
						allowMultiple: true
					}
				)
			)
		)
	);
}

export default applyWrappers;