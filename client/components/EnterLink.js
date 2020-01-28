import React, { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import RadioButton from './RadioButton';
import { linkTypes } from '../enums/linkTypes.enum';

const text = {
	video: 'Enter video url',
	playlist: 'Enter playlist code'
};

function EnterLink() {
	const [radioValue, setRadioValue] = useState(linkTypes.VIDEO);
	const [inputValue, setInputValue] = useState('');
	const [inputHelperText, setInputHelperText] = useState('');
	const [inputError, setInputError] = useState(false);


	function onInputChange(event) {
		if (event.target.value.length < 1) {
			setInputHelperText('This field cannot be empty.');
			setInputError(true);
		} else {
			setInputHelperText('');
			setInputError(false);
		}
		setInputValue(event.target.value);
	}

	function onRadioChange(change) {
		setRadioValue(change);
		setInputValue('');
		setInputHelperText('');
		setInputError(false);
	}

	return (
		<div>
			<style jsx>
				{
					`
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

			<Button
				disabled={inputValue.length < 1 ? true : false}
				style={{ width: '100%' }}
				color="primary"
				variant="outlined">
				Submit
			</Button>
		</div>

	);
}

export default EnterLink;