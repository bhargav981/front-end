const typography = (skin) => {
	return {
		title: {
			fontFamily: skin.fontFamily.titleFamily,
			fontSize: '20px',
			fontWeight: 700,
			fontStyle: 'normal',
			fontStretch: 'normal',
			lineHeight: 1.4,
			letterSpacing: 'normal'
		},
		subtitle: {
			fontFamily: skin.fontFamily.titleFamily,
			fontSize: '16px',
			fontWeight: 400,
			fontStyle: 'normal',
			fontStretch: 'normal',
			lineHeight: 1.5,
			letterSpacing: 'normal'
		},
		body1: {
			fontFamily: skin.fontFamily.bodyFamily,
			fontSize: '14px',
			fontWeight: 400,
			fontStyle: 'normal',
			fontStretch: 'normal',
			lineHeight: 1.57,
			letterSpacing: 'normal'
		},
		body2: {
			fontFamily: skin.fontFamily.bodyFamily,
			fontSize: '12px',
			fontWeight: 400,
			fontStyle: 'normal',
			fontStretch: 'normal',
			lineHeight: 1.83,
			letterSpacing: 'normal'
		},
		caption: {
			fontFamily: skin.fontFamily.bodyFamily,
			fontSize: '12px',
			fontWeight: 400,
			fontStyle: 'normal',
			fontStretch: 'normal',
			lineHeight: 1.17,
			letterSpacing: 'normal'
		},
		timer: {
			fontFamily: skin.fontFamily.timerFamily,
			fontSize: '28px',
			fontWeight: 400,
			fontStyle: 'normal',
			fontStretch: 'normal',
			letterSpacing: 'normal'
		}
	}
};

export default typography;