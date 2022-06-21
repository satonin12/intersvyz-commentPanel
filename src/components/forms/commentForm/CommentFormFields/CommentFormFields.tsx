import React, { FC } from 'react';
import { Button } from '@mui/material';
import { Control } from 'react-hook-form';

import { CommentFormStyled } from '../style';
import { TCommentForm } from '../../../../types';
import { CommentFormFieldsStyled } from './style';
import TextFieldUI from '../../../../UI/TextField/TextFieldUI';
import FormFieldWithController from '../../../fields/withController/FormField';

interface ICommentFormFields {
	control: Control<TCommentForm>;
}

/**
 * Поля формы j
 * @param control
 * @constructor
 */
const CommentFormFields: FC<ICommentFormFields> = ({ control }) => {
	const { TextFieldSx, ContainerMUI } = CommentFormFieldsStyled();
	const { ColumnMUI, RowMUI } = CommentFormStyled();

	return (
		<ContainerMUI>
			<ColumnMUI>
				<ColumnMUI>
					<RowMUI>
						<FormFieldWithController
							controller={{
								name: 'name',
								control,
								defaultValue: '',
								rules: {
									required: true,
								},
							}}
						>
							<TextFieldUI
								inputProps={{
									placeholder: '',
									label: 'Введите имя',
									name: 'text',
									type: 'text',
									required: true,
								}}
							/>
						</FormFieldWithController>

						<FormFieldWithController
							controller={{
								name: 'email',
								control,
								defaultValue: '',
								rules: {
									required: true,
								},
							}}
						>
							<TextFieldUI
								inputProps={{
									placeholder: '',
									label: 'Введите почту',
									name: 'text',
									type: 'email',
									required: true,
								}}
							/>
						</FormFieldWithController>
					</RowMUI>
				</ColumnMUI>

				<RowMUI>
					<FormFieldWithController
						controller={{
							name: 'comment',
							control,
							defaultValue: '',
							rules: {
								required: true,
							},
						}}
					>
						<TextFieldUI
							inputProps={{
								placeholder: '',
								label: 'Текст комментария',
								name: 'text',
								type: 'text',
								required: true,
								sx: TextFieldSx,
							}}
						/>
					</FormFieldWithController>

					<Button variant="outlined" type="submit">
						Отправить
					</Button>
				</RowMUI>
			</ColumnMUI>
		</ContainerMUI>
	);
};

export default React.memo(CommentFormFields);
