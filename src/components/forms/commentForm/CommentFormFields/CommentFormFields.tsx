import React, {FC} from 'react';

import {CommentFormStyled} from '../style';
import FormFieldWithController from '../../../fields/withController/FormField';
import TextFieldUI from '../../../../UI/TextField/TextFieldUI';
import {TCommentForm} from '../../../../types';
import {Control} from 'react-hook-form';

interface ICommentFormFields {
	control: Control<TCommentForm>
}

const CommentFormFields: FC<ICommentFormFields> = ({control}) => {
	return (
		<>
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
					}}
				/>
			</FormFieldWithController>
		</>
	);
};

const {} = CommentFormStyled();

export default React.memo(CommentFormFields);
