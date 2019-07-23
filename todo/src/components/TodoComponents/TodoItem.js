import React from "react";
import {connect} from 'react-redux';
import {TOGGLE_COMPLETED} from './../../actions.js'
const TodoItem = ({toggleItemObj, itemObj}) => {
	console.log(itemObj, toggleItemObj);
 
	return (
		<div
			className={`itemObj${itemObj.completed ? " completed" : ""}`}
			onClick={() => toggleItemObj(itemObj.id)}>
			<p>{itemObj.task}</p>
		</div>
	);
};
const mapDispatchToProps=( dispatch ) => {
	return {
		
	}
}
export default connect(mapDispatchToProps)(TodoItem);
