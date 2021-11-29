import React, { useState, useEffect, useRef } from 'react';
import styles from './customSelect.module.sass';
import getSkin from './skin.js';
import { css } from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';
import DownArrow from 'svgComponents/downArrow';
import UpArrow from 'svgComponents/upArrow';

const CustomSelect = (props) => {

	const [openDropDown, setOpenDropDown] = useState(false);
	const [selectedItem, setSelectedItem] = useState(props.optionList[0].value);
	const [selectedItemName, setSelectedItemName] = useState(props.optionList[0].name);

	const myRef = useRef(null);

	useEffect(() => {
		if (openDropDown) {
			document.addEventListener('mousedown', handleClick, false);
		} else {
			document.removeEventListener('mousedown', handleClick, false);
		}
		return () => {
			document.removeEventListener('mousedown', handleClick, false);
		}
	});

	const handleClick = (e) => {
		if (myRef.current.contains(e.target)) {
			//do nothing
			return;
		}
		setOpenDropDown(false);
	}

	const toggleDropDown = () => {
		setOpenDropDown(!openDropDown);
	};

	const setSelectedFilter = (value, name) => {
		setOpenDropDown(false);
		setSelectedItem(value);
		setSelectedItemName(name);
		onChangeHandler(value);
	};

	const onChangeHandler = (value) => {
		props.onChangeHandler(value);
	};

	const myStyles = getSkin(props.skinGuide);
	const optionList = props.optionList;
	const optionDivs = optionList.map((eachOption) => {
		return (
			<div
				className={eachOption.value === selectedItem ? css(myStyles.customOption, myStyles.highlightSelected) :  css(myStyles.customOption)}
				styleName="each-option"
				onClick={(e) => {
					e.stopPropagation();
					setSelectedFilter(eachOption.value, eachOption.name);
				}}
			>
				{eachOption.name}
			</div>
		);
	});
	return (
		<div styleName="select-container" ref={myRef}>
			<div className={css(myStyles.heading)} styleName="heading">{props.heading}</div>
			<div className={css(myStyles.customSelect)} styleName="custom-select"
				onClick={() => {
					toggleDropDown();
				}}
			>
				<div className={css(myStyles.customSelectSelectedValue)}>
					{selectedItemName}
				</div>
				<div styleName="down-arrow-container">
					{openDropDown ? <UpArrow /> : <DownArrow />}
				</div>
			</div>
			{
				openDropDown
					? <div className={css(myStyles.optionContainer)} styleName="custom-option-container">
						{/* {
							checkIfPresent(props.optionHeading)
							?	<div className={css(myStyles.optionHeading)} styleName="option-heading">{props.optionHeading}</div>
							:	null
						} */}
						{optionDivs}
					</div>
					: null
			}
		</div>
	);
}

export default applyWrappers(CustomSelect, styles);