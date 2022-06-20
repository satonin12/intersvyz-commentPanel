import {useContext} from 'react';
import {useForm} from 'react-hook-form';
import {TCommentForm} from '../../../types';
import {CommentCTX} from '../../../store/Context/CommentProvider';

export const useCommentForm = () => {
	const {
		setComment
	} = useContext(CommentCTX);

	const {
		control,
		handleSubmit,
	} = useForm<TCommentForm>({
		defaultValues: {
			comment: '',
		}
	});

	const onSubmit = async (data: TCommentForm) => {
		try {
			console.log('data: ', data);
			const sendObject = {
				comment: data.comment,
				time: Date.now(),
				name: 'Vladislav'
			}
			setComment(prevState => [...prevState, sendObject]);
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
