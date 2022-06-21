import {useForm} from 'react-hook-form';
import {IComment, TCommentForm} from '../../../types';
import uniqid from 'uniqid';
import {useAppDispatch} from '../../../hooks/useReduxHooks';
import {addComment} from '../../../store/reducers/commentReducer/commentSlice';

export const useCommentForm = () => {
	const dispatch = useAppDispatch();
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
			const sendObject = {
				id: uniqid(),
				comment: data.comment,
				time: Date.now(),
				name: 'Vladislav',
				rating: 0,
			} as IComment;
			dispatch(addComment(sendObject));
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
