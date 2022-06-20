import React, {FC} from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

interface ICommentItem {
	id: string,
	name: string,
	date: number,
	comment: string,
	rating: number,
	increment: (id: string) => void;
	dicrement: (id: string) => void;
}

const CommentItem: FC<ICommentItem> = ({id, name, date, comment, rating, increment, dicrement}) => {
	return (
		<>
			{name}
			<br/>
			{date}
			<br/>
			{comment}
			<br/>
			<div>
				<KeyboardArrowUpIcon onClick={increment(id)}/>
				{rating}
				<KeyboardArrowDownIcon onClick={dicrement(id)}/>
			</div>
			<br/>
			<br/>
		</>
	);
};

export default React.memo(CommentItem);
