import { useState } from 'react';

export const useCommentItem = () => {
	const [open, setOpen] = useState<boolean>(false);

	const toggleState = () => {
		setOpen(true);
	};

	return {
		open,
		toggleState,
	};
};
