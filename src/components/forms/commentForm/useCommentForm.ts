import { useForm } from 'react-hook-form';
import { IComment, TCommentForm } from '../../../types';
import uniqid from 'uniqid';
import { useAppDispatch } from '../../../hooks/useReduxHooks';
import { addComment } from '../../../store/reducers/commentReducer/commentSlice';

export const useCommentForm = () => {
	const dispatch = useAppDispatch();
	const { control, handleSubmit } = useForm<TCommentForm>({
		defaultValues: {
			comment: '',
			name: '',
			email: '',
		},
	});

	const onSubmit = async (data: TCommentForm) => {
		try {
			const avatarUrl = await fetch(
				'https://avatars.dicebear.com/api/male/:seed.svg'
			);

			const sendObject = {
				...data,
				id: uniqid(),
				time: Date.now(),
				rating: 0,
				avatar: avatarUrl.url,
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
		formHandlers: {},
	};
};
