import { StyleSheet } from 'aphrodite';
import { hexToRgbA } from 'util/styleUtil';
import typography from 'defaults/typography';

const getSkin = (theme) => {
    const globalProfiles = theme.globalProfiles;
	const skin = globalProfiles.palette;
	const myTypography = typography(theme);

    return StyleSheet.create({
		featureCard: {
			boxShadow: '0 0 14px 0 rgba(0, 0, 0, 0.06)',
  			border: `solid 0.5px ${skin.grayColor6}`,
  			backgroundColor: skin.white
		},
		featureTitle: {
			...myTypography.body1,
			fontSize: '15px',
			fontWeight: 600,
			lineHeight: 1.4,
			color: hexToRgbA(skin.grayColor1, 0.8)
		},
		featureDescription: {
			...myTypography.body1,
			fontSize: '10px',
			fontWeight: 300,
			lineHeight: 1.4,
			color: hexToRgbA(skin.grayColor1, 0.7),
			textAlign: 'left'
		},
		confirmationCard: {
			backgroundColor: skin.white
		},
		confirmationTitle: {
			...myTypography.body1,
			fontSize: '20px',
			fontWeight: 600,
			lineHeight: 'normal',
			color: hexToRgbA(skin.primaryVariantColor, 0.8)
		},
		greyCircle: {
			backgroundColor: hexToRgbA(skin.primaryVariantColor, 0.5)
		},
		planningPhaseName: {
			...myTypography.body1,
			fontSize: '18px',
			lineHeight: 'normal',
			textTransform: 'uppercase',
			color: hexToRgbA(skin.primaryVariantColor, 0.7)
		},
		orageCircle: {
			backgroundImage: 'linear-gradient(to bottom, #f8c43f, #f7a23f)'
		},
		executionPhaseName: {
			...myTypography.body1,
			fontSize: '20px',
			fontWeight: 600,
			lineHeight: 'normal',
			textTransform: 'uppercase',
			color: '#fabc42',
			// backgroundImage: 'linear-gradient(to bottom, #fabc42, #fa9a42)',
			// backgroundClip: 'text',
			// textShadow: '0 4px 24px rgba(0, 0, 0, 0.12)',
			// textFillColor: 'transparent'
		},
		selectedPrdMessage: {
			...myTypography.body1,
			fontSize: '15px',
			lineHeight: 1.67,
			color: hexToRgbA(skin.black, 0.6)
		},
		dayBudgetContainer: {
			boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
  			backgroundImage: 'linear-gradient(to bottom, rgba(248, 196, 63, 0.2), rgba(247, 162, 63, 0.2))'
		},
		dayBudgetTitle: {
			...myTypography.body1,
			fontSize: '12px',
			fontWeight: 600,
			lineHeight: 'normal',
			color: hexToRgbA(skin.primaryVariantColor, 0.8)
		},
		dayBudgetValue: {
			...myTypography.body1,
			fontSize: '18px',
			fontWeight: 'bold',
			lineHeight: 'normal',
			color: hexToRgbA(skin.primaryVariantColor, 0.8)
		}
	});
}

export default getSkin;