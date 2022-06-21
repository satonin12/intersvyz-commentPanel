import React, { FC } from 'react';
import { Avatar } from '@mui/material';
import Time from '../../Time/Time';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { ICommentItemComponent } from '../../../types';
import { CommentItemStyled } from './style';

const CommentItemView: FC<ICommentItemComponent> = ({
	id,
	name,
	time,
	avatar,
	comment,
	rating,
	increment,
	dicrement,
}) => {
	return (
		<>
			<Avatar variant='rounded' alt='Cindy Baker' src={avatar} />
			<BodyMUI>
				<HeaderMUI>
					<NameMUI>{name}</NameMUI>
					<TimeMUI>
						<Time date={time} />
					</TimeMUI>
				</HeaderMUI>
				<TextMUI>{comment}</TextMUI>

				<RatingMUI>
					{/*// @ts-ignore*/}
					<ArrowMUI component='span' onClick={increment(id)}>
						<AddIcon sx={{ width: '20' }} />
					</ArrowMUI>
					{rating}
					{/*// @ts-ignore*/}
					<ArrowMUI component='span' onClick={dicrement(id)}>
						<RemoveIcon sx={{ width: '20' }} />
					</ArrowMUI>
				</RatingMUI>
			</BodyMUI>
		</>
	);
};

const { ArrowMUI, RatingMUI, BodyMUI, HeaderMUI, TextMUI, NameMUI, TimeMUI } =
	CommentItemStyled();

export default React.memo(CommentItemView);
