import React, { FC } from 'react';
import { Control, Controller } from 'react-hook-form';
import { TCommentForm } from '../../../types';

interface IFormFieldWithController {
	controller: {
		name: string;
		control: Control<TCommentForm>;
		defaultValue: string;
		rules: {
			required: boolean;
		};
	};
	children: React.ReactElement;
}

/**
 * Компонент принимает контроллер react-hook-form и прибавляет обработчики value, onChange children (в него прокидывается TextField)
 * необходимо для того, чтобы react-hook-form стал контрорллируемым и сам все обрабатывал
 * @param controller
 * @param children
 * @constructor
 */
const FormFieldWithController: FC<IFormFieldWithController> = ({
	controller,
	children,
}) => {
	return (
		<Controller
			name={controller.name}
			control={controller.control}
			defaultValue={controller.defaultValue}
			rules={controller.rules}
			render={({ field: { value, onChange } }) => {
				const childrenWithControllerProps = React.cloneElement(children, {
					value,
					onChange,
				});

				return <>{childrenWithControllerProps}</>;
			}}
		/>
	);
};

export default React.memo(FormFieldWithController);
