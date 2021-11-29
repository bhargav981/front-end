const walkthroughTabsList = [
	{
		key: 'planning',
		name: 'label_transition_planning',
		isSelected: true
	},
	{
		key: 'execution',
		name: 'label_transition_execution',
		isSelected: false
	},
	{
		key: 'launch',
		name: 'label_transition_launch',
		isSelected: false
	}
];

const planningSteps = [
	{
		key: 'kyt',
		number: 1,
		status: 'todo',	//allowed values: todo, inprogress, completed
		title: 'label_transition_kyt'
	},
	{
		key: 'kyc',
		number: 2,
		status: 'todo',
		title: 'label_transition_kyc'
	},
	{
		key: 'viewFeatures',
		number: 3,
		status: 'todo',
		title: 'label_transition_view_features'
	},
	{
		key: 'chosePrd',
		number: 4,
		status: 'todo',
		title: 'label_transition_choose_prd'
	}
];

const sprintSteps = [
	{
		key: 'sprintPlanning',
		number: 1,
		status: 'todo',
		title: 'label_transition_sprint_planning'
	},
	{
		key: 'sprintExecution',
		number: 2,
		status: 'todo',
		title: 'label_transition_sprint_execution'
	},
	{
		key: 'sprintLaunch',
		number: 3,
		status: 'todo',
		title: 'label_transition_sprint_launch'
	}
];

const sprintsSteps = [
	{
		key: 'sprint1',
		sprintNumber: 1,
		title: 'label_transition_sprint_label',
		isDisabled: true,
		steps: sprintSteps
	},
	{
		key: 'sprint2',
		sprintNumber: 2,
		title: 'label_transition_sprint_label',
		isDisabled: true,
		steps: sprintSteps
	},
	{
		key: 'sprint3',
		sprintNumber: 3,
		title: 'label_transition_sprint_label',
		isDisabled: true,
		steps: sprintSteps
	},
	{
		key: 'sprint4',
		sprintNumber: 4,
		title: 'label_transition_sprint_label',
		isDisabled: true,
		steps: sprintSteps
	}
];

export {
	walkthroughTabsList,
	planningSteps,
	sprintsSteps
};