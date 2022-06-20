import {useForm} from 'react-hook-form';

export const useCommentForm = () => {

	const {
		control,
		handleSubmit,
	} = useForm({
		defaultValues: {}
	});

	const onSubmit = async (data: any) => {
		try {
			console.log('data: ', data);
		} catch (e) {
			console.log('onSubmit-error: ', e);
		}
	};

	return {
		useForm: {
			control,
			onSubmit,
			handleSubmit,
		},
		formValues: {},
		formHandlers: {}
	};
};
