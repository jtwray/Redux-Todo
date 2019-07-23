import {ADD_TODO, TOGGLE_COMPLETED} from "../actions";

const initialState = {
	taskslistarray: [
		{task: "addRedux", id: 1563302463662, completed: false},
		{task: "addProvider", id: 1563302535730, completed: false},
		{task: "addConsole", id: 1563302567764, completed: false},
	],
};
const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case "CLEAR_COMPLETED": {
			const completedTasks = state.taskslistarray.filter(
				(item) => !item.completed === true
			);
			return {
				...state,
				taskslistarray: completedTasks,
			};
		}
		case TOGGLE_COMPLETED: {
			const {taskslistarray} = this.props;
			return {
				...state,
				taskslistarray: taskslistarray.map((itemObj) => {
					if (itemObj.id === state.id) {
						return {
							...itemObj,
							completed: !itemObj.completed,
						};
					}
					return itemObj;
				}),
			};
		}

		default:
			return state;
	}
};

export default rootReducer;
