export const ADD_TODO = "ADD_TODO";
export const TOGGLE_COMPLETED = "TOGGLE_COMPLETED";

export const add_todo = (text) => ({
	type: "ADD_TODO",
	payload: {
		task: text,
		id: Date.now(),
		completed: false,
	},
});

export const toggle_completed = (id) => ({
	type: "TOGGLE_COMPLETED",
	payload: id,
});
