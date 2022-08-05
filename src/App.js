import './App.css';
import React, {useReducer, useEffect, useState} from 'react';

const PROPERTIES = {
	FORMATING: {snake: 'snake-dot', cell: 'dot', food: 'food-dot'},
	COLUMNS: 20,
	ROWS: 20,
	FOOD_COORDENATES: {column: Math.floor(Math.random() * 20), row: Math.floor(Math.random() * 20)}
} 

const initialState = {row: 2, column: 4, direction: {axis: '', quadrant: ''}};

function reducer({row, column, direction}, action){
	switch (action.code) {

		case 'ArrowRight':
			return {row: row + 1, column: column, direction: {axis: 'row', quadrant: '+'}};

		case 'ArrowLeft':
			return {row: row - 1, column: column, direction: {axis: 'row', quadrant: '-'}};

		case 'ArrowUp':
			return {column: column - 1, row: row, direction: {axis: 'column', quadrant: '-'}};

		case 'ArrowDown':
			return {column: column + 1, row: row, direction: {axis: 'column', quadrant: '+'}};
	}
}

function App() {
	const [{row, column, direction}, dispatch] = useReducer(reducer, initialState);
	const [lenght, setNewLenght] = useState(0);
	let board = [];

	useEffect(() => {
		let newLenght = 0;
		let dot = document.getElementById(`${row}${column}_snake_dot`);
		if(dot.className == PROPERTIES.FORMATING.food) {
			PROPERTIES.FOOD_COORDENATES = {column: Math.floor(Math.random() * PROPERTIES.COLUMNS), row: Math.floor(Math.random() * PROPERTIES.ROWS)}
			document.getElementById(`control`).placeholder = setNewLenght(lenght + 1);
		}
		
		dot.className = PROPERTIES.FORMATING.snake;	
		
		let coordenates = 0;
		let newCoordenates = 0;

 		if(direction.axis == 'row'){
			coordenates = (direction.quadrant == '+') ? `${row - newLenght}${column}`  : `${row + newLenght}${column}`;
			newCoordenates = (direction.quadrant == '+') ? `${row - newLenght - 1}${column}`  : `${row + newLenght + 1}${column}`;
		} else {
			coordenates = (direction.quadrant == '+') ? `${row - newLenght}${column}`  : `${row + newLenght}${column}`;
			newCoordenates = (direction.quadrant == '+') ? `${row}${column - newLenght - 1}`: `${row}${column + newLenght + 1}`;
		}

		document.getElementById(`${coordenates}_snake_dot`).className = PROPERTIES.FORMATING.snake;
		document.getElementById(`${newCoordenates}_snake_dot`).className = PROPERTIES.FORMATING.cell;
	});

	for(let x = 0; x < PROPERTIES.ROWS; x++) {
		for(let i = 0; i < PROPERTIES.COLUMNS; i++) {
			if( (i == PROPERTIES.FOOD_COORDENATES.column) && (x == PROPERTIES.FOOD_COORDENATES.row) ){
				var formatName = PROPERTIES.FORMATING.food;
			} else if(i == row && x == column){
				var formatName = PROPERTIES.FORMATING.snake;
			} else {
				var formatName = PROPERTIES.FORMATING.cell;
			}

			board.push(<div className={formatName} id={`${i}${x}_snake_dot`} data-column={i} data-row={x}></div>);
		}
	}

	return (
		<div className="App">
		<body>
			<div className='square'>
				{board}
			</div>
			<input id="control" placeholder={lenght} className='control' onKeyDown={(e) => dispatch({code: e.code, row: row, column: column, direction: direction})}></input>
		</body>
		</div>
	);
}
 
export default App;
