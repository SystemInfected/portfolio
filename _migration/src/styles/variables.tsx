export const color = {
	mainBackgroundColor: '#0d0d0e',
	mainColorDark: '#1e1f2d',
	mainColorLight: '#a9b0e0',
	mainAccentColor: '#D4D379',
	mainColorDarkRGB: '30, 31, 45',
	mainColorLightRGB: '169, 176, 224',
	mainAccentRGB: '212, 211, 121',
	textLight: '#e3e3e3',
	textLightRGB: '227, 227, 227',
}

export const font = {
	headingsFont: `'Oswald', 'Helvetica Neue', sans-serif`,
	standardFont: `'Raleway', 'Helvetica Neue', sans-serif`,
}

export const breakpoint = {
	maxWidth: `1600px`,
	tabletBig: `860px`,
	tablet: `768px`,
	mobileBig: `580px`,
	mobile: `480px`,
}

export const components = {
	mainButton: `position: relative;
		border: none;
		padding: 1em 2.5em;
		font-size: 1.2rem;
		line-height: 1.6;
		letter-spacing: 0.1em;
		cursor: pointer;
		border-radius: 2em;
		font-weight: 800;
		text-transform: uppercase;
		box-shadow: 0 0.2em 0.2em rgba(0, 0, 0, 0.5);
		backface-visibility: hidden;
		transition: transform ease-out 0.3s;
		&:before {
			left: 0;
			top: 0;
			position: absolute;
			content: '';
			border-radius: 2em;
			width: 100%;
			height: 100%;
			box-shadow: 0 0.4em 1em rgba(0, 0, 0, 0.3);
			opacity: 0;
			backface-visibility: hidden;
			transition: opacity ease-out 0.15s;
		}
		&:hover,
		&:focus {
			transform: scale(1.1);
			&:before {
				opacity: 1;
			}
		}`,
	secondaryButton: `position: relative;
		border: 1px solid #fff;
		background:none;
		padding: 1em 2.5em;
		font-size: 1.2rem;
		line-height: 1.6;
		letter-spacing: 0.1em;
		cursor: pointer;
		border-radius: 2em;
		font-weight: 800;
		text-transform: uppercase;
		backface-visibility: hidden;
		transition: transform ease-out 0.3s;
		&:hover,
		&:focus {
			transform: scale(1.1);
		}`,
}
