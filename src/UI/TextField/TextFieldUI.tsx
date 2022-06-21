import React, { FC } from 'react';
import { TextField, TextFieldProps } from '@mui/material';

interface ITextFieldUI {
	value?: string;
	onChange?: () => void;
	inputProps: TextFieldProps;
}

/**
 * Кастомный компонент поля ввода
 * @param value
 * @param onChange
 * @param inputProps
 * @constructor
 */
const TextFieldUI: FC<ITextFieldUI> = ({ value, onChange, inputProps }) => {
	return (
		<TextField
			variant="outlined"
			{...inputProps}
			value={value}
			onChange={onChange}
		/>
	);
};

export default React.memo(TextFieldUI);
