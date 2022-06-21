export interface IChildren {
	children: React.ReactChild | React.ReactNode | React.ReactElement;
}

export type TCommentForm = {
	comment: string,
}

export interface IComment {
	readonly id: string,
	readonly name: string,
	readonly comment: string,
	readonly time: number,
	rating: number,
}
