export interface IChildren {
	children: React.ReactChild | React.ReactNode | React.ReactElement;
}

export type TCommentForm = {
	comment: string;
	name: string;
	email: string;
	[key : string]: string,
};

export interface IComment {
	readonly id: string;
	readonly name: string;
	readonly comment: string;
	readonly email: string;
	readonly time: number;
	readonly avatar: string;
	rating: number;
}

export interface ICommentItemData {
	id: string;
	name: string;
	time: number;
	comment: string;
	rating: number;
	avatar: string;
}

export interface ICommentHandlers {
	increment: (id: string) => void;
	dicrement: (id: string) => void;
}

export interface ICommentItemComponent
	extends ICommentItemData,
		ICommentHandlers {}
