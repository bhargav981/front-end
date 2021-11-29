import React, { useState, useEffect } from 'react';
import styles from './simUserProfile.module.sass';
import getSkin from './skin.js';
import { css } from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';
import UserProfile from 'svgComponents/userProfile';
import UpArrow from 'svgComponents/upArrow';
import DownArrow from 'svgComponents/downArrow';
import urls from 'constants/urls/urls';
import { getUserName } from 'util/utilFunctions';
import analyticsUtil from 'util/segmentUtil';

const userProfileRef = React.createRef();

const SimUserProfile = (props) => {
	const [isUserProfileOpen, setIsUserProfileOpen] = useState(false);
	const [isUserProfileOnHover, setIsUserProfileOnHover] = useState(false);

	console.log("User Profile", props.userState)

	useEffect(() => {
		if (isUserProfileOpen) {
			document.addEventListener('mousedown', handleClick, false);
		} else {
			document.removeEventListener('mousedown', handleClick, false);
		}
		return () => {
			document.removeEventListener('mousedown', handleClick, false);
		}
	});

	const handleClick = (e) => {
		if (userProfileRef.current.contains(e.target)) {
			//do nothing
			return;
		}
		setIsUserProfileOpen(false);
	}

	const onClickLogout = () => {
		setIsUserProfileOpen(false);
		
		//Segment integartion
        analyticsUtil.reset();
		analyticsUtil.track("LOGOUT",{ userDetails : props.userDetails });
		
		window.location.href = urls.LOG_OUT;
	}

	// const onClickOnboarding = () => {
	// 	setIsUserProfileOpen(false);
	// }

	const toggleUserProfile = () => {
		setIsUserProfileOpen(!isUserProfileOpen);
	}

	const myStyles = getSkin(props.skinGuide);
	const skin = props.skinGuide.globalProfiles.palette;
	return (
		<div
			styleName="user-profile-container-with-options"
			onMouseEnter={() => { setIsUserProfileOnHover(true); }}
			onMouseLeave={() => { setIsUserProfileOnHover(false); }}
			onClick={() => {
				toggleUserProfile();
			}}
			ref={userProfileRef}
		>
			<div styleName="user-profile-container">
				<div styleName="user-profile-image-container">
					<UserProfile
						svgColor={isUserProfileOnHover || isUserProfileOpen ? skin.grayColor5 : skin.white}
					/>
				</div>
				<div styleName="user-profile-arrow-container">
					{
						isUserProfileOpen
							? <UpArrow
								svgColor={isUserProfileOnHover || isUserProfileOpen ? skin.grayColor5 : skin.white}
							/>
							: <DownArrow
								svgColor={isUserProfileOnHover || isUserProfileOpen ? skin.grayColor5 : skin.white}
							/>
					}

				</div>
			</div>
			{
				isUserProfileOpen
					? <div className={css(myStyles.userProfileOptionContainer)} styleName="user-profile-option-container">
						<div styleName="user-name-container">
							<div className={css(myStyles.userName)} styleName="user-name">
								{props.getLabel('label_hello_username', "", {
									USER_NAME: getUserName(props.userDetails)
								})}
							</div>
						</div>
						{/* <div
							className={css(myStyles.customOption)}
							styleName="each-option"
							onClick={() => { onClickOnboarding(); }}
						>
							{props.getLabel('label_onboarding')}
						</div> */}
						{
							props.userState.returnType.toLowerCase() == 'normal'
								? <div
									className={css(myStyles.customOption)}
									styleName="each-option"
									onClick={() => { onClickLogout(); }}
								>
									{props.getLabel('label_logout')}
								</div>
								: null
						}

					</div>
					: null
			}

		</div>
	);
}

export default applyWrappers(SimUserProfile, styles);