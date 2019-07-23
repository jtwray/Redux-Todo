import React from "react";
import {connect} from "react-redux";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import "./index.css";

class App extends React.Component {
	// constructor() {
	// 	super();
	// 	this.state = {
	// 		taskslistarray: [],
	// 	};
	// }

	addItem = (item) => {
		const {taskslistarray} = this.props;
		const newItem = {
			task: item,
			id: Date.now(),
			completed: false,
		};
		const copiedTasks = [...taskslistarray, newItem];
		console.log(copiedTasks);
		this.setState({taskslistarray: copiedTasks});
	};

	clearCompleted = () => {
		this.props.clear_completed();
		// const {taskslistarray} = this.state;
		// const copiedTasks = [...taskslistarray];
		// const completedTasks = copiedTasks.filter(
		// 	(item) => !item.completed === true
		// );
		// this.setState({taskslistarray: completedTasks});
	};
	toggleItemObj = (id) => {
		const {taskslistarray} = this.props;
		this.setState({
			taskslistarray: taskslistarray.map((itemObj) => {
				if (itemObj.id === id) {
					return {
						...itemObj,
						completed: !itemObj.completed,
					};
				}
				return itemObj;
			}),
		});
	};

	render() {
		const {toggleItemObj, addItem, clearCompleted} = this;
		const {taskslistarray} = this.props;
		return (
			<div className="App">
				<div className="header">
					<h1> ToDoList</h1>
					<TodoForm addItem={addItem} />
				</div>
				<TodoList
					taskslistarray={taskslistarray}
					toggleItemObj={toggleItemObj}
				/>
				<button onClick={clearCompleted}>ClearCompleted</button>
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		taskslistarray: state.taskslistarray,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		clear_completed: (item) => {
			dispatch({type: "CLEAR_COMPLETED", task: item});
		},
		toggle_completed: (id) => {
			dispatch({type: "TOGGLE_COMPLETED", id: id});
		},
	};
};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
