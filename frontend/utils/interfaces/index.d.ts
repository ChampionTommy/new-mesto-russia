interface IAuth {
	email: string;
	password: string;
}
interface IValues {
	email: string;
	password: string;
}

export type authorizeType = 'auth' | 'register';

interface PropsAuth {
	authorizetype: authorizeType;
}

interface ImageData {
	title?: string | null;
	imageUrl: string | null;
}
interface CardData {
	data: {
		imageUrl: string;
		title: string;
	};
}
interface SlicesState {
	auth: AuthState;
	images: ImagesState;
	modal: ModalState;
}
interface UserData {
	email: string;
	password: string;
}

export interface AuthState {
	status: 'loaded' | 'loading' | 'error';
	data: UserData | null;
}

export interface ImagesState {
	items: any;
	status: 'loading' | 'loaded' | 'error';
}

export interface ModalState {
	isOpen: boolean;
	modalType: string;
}
