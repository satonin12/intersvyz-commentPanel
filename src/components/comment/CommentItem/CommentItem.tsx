import React, { FC, useMemo } from 'react';

import { useCommentItem } from './useCommentItem';
import { CommentItemStyled } from './style';
import CommentItemView from './CommentItemView';
import { ICommentItemData } from '../../../types';

interface ICommentItemComponent {
	commentItem: ICommentItemData;
	increment: (id: string) => void;
	dicrement: (id: string) => void;
}

const CommentItem: FC<ICommentItemComponent> = ({
	commentItem,
	increment,
	dicrement,
}) => {
	const { open, toggleState } = useCommentItem();

	const { id, name, time, avatar, rating, comment } =
		commentItem as ICommentItemData;

	/**
	 * рейтинг не включаем в зависимости потому что
	 * при обновлении рейтинга в режиме лайв он автоматически скроется
	 */
	const hasOpen = useMemo(() => rating < -10 && !open, [open]);

	return (
		<CardMUI>
			{hasOpen ? (
				<TextMUI onClick={toggleState}>Открыть комментарий</TextMUI>
			) : (
				<CommentItemView
					id={id}
					name={name}
					time={time}
					rating={rating}
					comment={comment}
					avatar={avatar}
					increment={increment}
					dicrement={dicrement}
				/>
			)}
		</CardMUI>
	);
};

const { CardMUI, TextMUI } = CommentItemStyled();

export default React.memo(CommentItem);
