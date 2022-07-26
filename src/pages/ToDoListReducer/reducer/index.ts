import { ITask } from '../todolist';
import { ETASK } from './constants';

// An interface for our actions
interface IAction {
	type: ETASK;
	payload: any;
}

// An interface for our state
interface IState {
	task: ITask;
	tasks: Array<ITask>;
}

export const initialState: IState = {
	task: {
		name: '',
		status: false
	},
	tasks: []
};

export const reducer = (state: IState, action: IAction) => {
	const { type, payload } = action;

	switch (type) {
		case ETASK.CHANGE:
			return {
				...state,
				task: {
					name: payload,
					status: false
				}
			};
		case ETASK.SUBMIT:
			return {
				...state,
				tasks: [
					...state.tasks,
					{
						name: payload,
						status: false
					}
				]
			};
		case ETASK.CHECK:
			const newTasks = [...state.tasks];
			const newTask = { ...newTasks[payload] };
			newTask.status = !newTask.status;
			newTasks[payload] = newTask;
			return {
				...state,
				tasks: [...newTasks]
			};
		default:
			return {
				...state
			};
	}
};

export default reducer;
