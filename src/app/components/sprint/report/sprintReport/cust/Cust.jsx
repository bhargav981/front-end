import React from 'react';
import styles from './cust.module.sass';
// import getSkin from './skin.js.';
// import { css } from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';



const quote =
	{
		avatar: "https://knolskape-website.s3.amazonaws.com/misc/ashok_ramnath/2019/07/19/94/group_33.png"
	}; 

const Comments = (props) => {

	const {sprintReport, getLabel, customers} = props;

	// const pics = customers.customerList.find((cu) => cu.avatar);
	const userComments = () => {

		return sprintReport.customerSpeak.map((eachSpeak) => {
			return (
				<div styleName="comment-container">
					<div styleName="comment-image">
						{avatarGen(eachSpeak.customerId)}
					</div>
					<div styleName="comment" key={eachSpeak.id}>
						{props.getLabel(eachSpeak.message)}
					</div>
				</div>
			);
		})
	}

	const avatarGen = (customerId) => {
		let imgSrc = "https://knolskape-website.s3.amazonaws.com/misc/ashok_ramnath/2019/07/19/94/group_33.png";
		let imagePresent = false;
		customers.customerList.map((eachCustomer) => {
			if(eachCustomer.id == customerId) {
				imagePresent = true;
				imgSrc = eachCustomer.avatar;
			}
		});
		if(imagePresent) {
			return (
				<div styleName="comment-image">
					<div styleName="normal-chat-image">
						<img width="27px" height="27px" alt="avatar" src="https://knolskape-website.s3.amazonaws.com/misc/ashok_ramnath/2019/07/19/94/group_33.png" />
					</div>
					<img width="40px" height="40px" alt="avatar" src={imgSrc} />
				</div>
			);
		}
		return (
			<div styleName="comment-image">
				<img width="40px" height="40px" alt="avatar" src={imgSrc} />
			</div>
		);
	}

	const ele = userComments();
	// const avatars = [quote, ...customers.customerList].map((comment) => avatarGen(comment))
	return (
		<div>
			<div styleName="top">
				<div styleName="heading">
					{getLabel("label_report_customers speak")}
				</div>
				{/* <div styleName="avatar-wrap">
					{avatars}
				</div> */}
			</div>
			{ele}
		</div>
	);
}

export default applyWrappers(Comments, styles);