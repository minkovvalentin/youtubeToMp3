import React, { useState, useEffect } from 'react';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import RadioButton from './RadioButton';
import { linkTypes } from '../../enums/linkTypes.enum';

const text = {
	video: 'Enter video url',
	playlist: 'Enter playlist code'
};

function EnterLink({ setCode, setCodeType }) {

	const [radioValue, setRadioValue] = useState(linkTypes.VIDEO);
	const [inputValue, setInputValue] = useState('');
	const [inputHelperText, setInputHelperText] = useState('');
	const [inputError, setInputError] = useState(false);
	setCodeType(radioValue);

	function onInputChange(event) {
		if (event.target.value.length < 1) {
			setInputHelperText('This field cannot be empty.');
			setInputError(true);
		} else {
			setInputHelperText('');
			setInputError(false);
		}
		setCode(event.target.value);
		setInputValue(event.target.value);
	}

	function onRadioChange(change) {
		setCodeType(change);
		setCode('');
		setRadioValue(change);
		setInputValue('');
		setInputHelperText('');
		setInputError(false);
	}

	return (
		<div className="enter-link-container">
			<style jsx>
				{
					`.enter-link-container{
						display: grid;
						justify-content:center;
						justify-items: center;
					}
					.radio-buttons{
						display: flex;
						justify-content: center;
					}
					.radio-button-container{
						margin: 10px 10px;
					}
					`
				}
			</style>


			<p>{radioValue === linkTypes.VIDEO ? text.video : text.playlist}</p>
			<TextField
				error={inputError}
				requiredlabel=""
				helperText={inputHelperText}
				value={inputValue}
				onChange={onInputChange}
			/>

			<div className="radio-buttons">
				{
					[linkTypes.VIDEO, linkTypes.PLAYLIST].map((item, i) => (
						<div key={i} className="radio-button-container">
							<RadioButton
								checked={Boolean(radioValue === item)}
								name={'video-type'}
								id={item}
								label={item}
								value={item}
								change={onRadioChange}
							/>
						</div>
					))
				}
			</div>

		</div>

	);
}

export default EnterLink;