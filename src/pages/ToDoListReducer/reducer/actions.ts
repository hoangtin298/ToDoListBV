import { ETASK } from './constants';

export const changeTask = (payload: string) => {
	return {
		type: ETASK.CHANGE,
		payload
	};
};
export const submitTask = (payload: string) => {
	return {
		type: ETASK.SUBMIT,
		payload
	};
};
export const checkTask = (payload: number) => {
	return {
		type: ETASK.CHECK,
		payload
	};
};
