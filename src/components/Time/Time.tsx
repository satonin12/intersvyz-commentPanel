import React, { FC } from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import ruLocale from 'date-fns/locale/ru';

interface ITime {
	date: number;
}

const Time: FC<ITime> = ({ date }) => {
	return (
		<>
			{formatDistanceToNow(new Date(date), {
				addSuffix: true,
				locale: ruLocale,
			})}
		</>
	);
};

export default React.memo(Time);
