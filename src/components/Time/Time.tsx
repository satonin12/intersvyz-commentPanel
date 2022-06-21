import React, { FC } from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import ruLocale from 'date-fns/locale/ru';

interface ITime {
	date: number;
}

/**
 * компонент возвращает время в формате (1 минуту, 1 час, 1 неделю... назад)
 * @param date
 * @constructor
 */
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
