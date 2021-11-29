import environment from 'util/environment';
import {
	checkIfPresent,
	validateEmail
} from 'util/utilFunctions';

const getFreshdeskString = (emailID) => {
	let stringQ = '';
	const freshDeskId = environment.REACT_APP_FRESHDESK_ID;
	const simulation = environment.REACT_APP_FRESHDESK_SIM_NAME;

	if (checkIfPresent(freshDeskId) && validateEmail(emailID)) {
		stringQ = ''
			+ ('&widgetType=popup'
				+ '&submitThanks=Thank+you.+Our+Agent+will+contact+you+in+less+than+48+hours'
				+ '&helpdesk_ticket[requester]=')
			+ emailID     //+ validEmail
			+ '&disable[requester]=true'
			+ '&helpdesk_ticket[subject]='
			+ ('&helpdesk_ticket[product]='
				+ freshDeskId
				+ '&helpdesk_ticket[custom_field][simulation_104707]='
				+ simulation
				+ '&disable[custom_field][simulation_104707]')
			+ '&disable[product_id]=true'
			+ '&searchArea=no';

	} else if (validateEmail(emailID) === false && checkIfPresent(freshDeskId) === true) {
		stringQ = ''
			+ ('&widgetType=popup'
				+ '&submitThanks=Thank+you.+Our+Agent+will+contact+you+in+less+than+48+hours'
				+ '&helpdesk_ticket[requester]=')
			+ emailID     //+ validEmail
			+ '&helpdesk_ticket[subject]='
			+ ('&helpdesk_ticket[product]='
				+ freshDeskId
				+ '&helpdesk_ticket[custom_field][simulation_104707]='
				+ simulation
				+ '&disable[custom_field][simulation_104707]')
			+ '&disable[product_id]=true'
			+ '&searchArea=no';

	} else if (checkIfPresent(freshDeskId) === false && validateEmail(emailID) === true) {
		stringQ = ''
			+ ('&widgetType=popup'
				+ '&submitThanks=Thank+you.+Our+Agent+will+contact+you+in+less+than+48+hours'
				+ '&helpdesk_ticket[requester]=')
			+ emailID     //+ validEmail
			+ '&disable[requester]=true'
			+ '&helpdesk_ticket[subject]='
			+ '&helpdesk_ticket[custom_field][simulation_104707]='
			+ simulation
			+ '&disable[custom_field][simulation_104707]'
			+ '&disable[product_id]=true'
			+ '&searchArea=no';

	} else {
		stringQ = ''
			+ ('&widgetType=popup'
				+ '&submitThanks=Thank+you.+Our+Agent+will+contact+you+in+less+than+48+hours'
				+ '&helpdesk_ticket[requester]=')
			+ emailID     //+ validEmail
			+ '&helpdesk_ticket[subject]='
			+ '&helpdesk_ticket[custom_field][simulation_104707]='
			+ simulation
			+ '&disable[custom_field][simulation_104707]'
			+ '&disable[product_id]=true'
			+ '&searchArea=no';
	}
	return stringQ;
}

const initializeFreshdesk = (emailID) => {

	const buttonColor = '#232882';
	const textColor = '#FFFFFF'

	let stringQ = getFreshdeskString(emailID);


	var freshdeskObj = {
		loadOnEvent: 'immediate',
		queryString: stringQ,
		utf8: 'âœ“',
		widgetType: "popup",
		buttonType: 'text',
		buttonText: 'Support',
		buttonColor: textColor,
		buttonBg: buttonColor,
		alignment: "4",
		offset: "550px",
		formHeight: "550px",
		url: 'https://knolskape.freshdesk.com'
	};
	window.FreshWidget.init('', freshdeskObj);
}

export default initializeFreshdesk;