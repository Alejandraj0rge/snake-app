import './App.css';
import React, {useReducer, useEffect} from 'react';

const PROPERTIES = {
	FORMATING: {snake: 'snake-dot', cell: 'dot', food: 'food-dot'},
	COLUMNS: 10,
	ROWS: 10,
	FOOD_COORDENATES: {column: Math.floor(Math.random() * 10), row: Math.floor(Math.random() * 10)}
} 

const initialState = {row: 2, column: 4, lenght: 1};

function reducer({row, column}, action){
	switch (action.code) {

		case 'ArrowRight':
			return {row: row + 1, column: column};

		case 'ArrowLeft':
			return {row: row - 1, column: column};

		case 'ArrowUp':
			return {column: column - 1, row: row};

		case 'ArrowDown':
			return {column: column + 1, row: row};
	}
}

function App() {
	const [{row, column, lenght}, dispatch] = useReducer(reducer, initialState);

	let board = [];

	useEffect(() => {
		let dot = document.getElementById(`${row}${column}_snake_dot`);

		if(dot.className == PROPERTIES.FORMATING.food) {
			PROPERTIES.FOOD_COORDENATES = {column: Math.floor(Math.random() * 10), row: Math.floor(Math.random() * 10)}
		}
	
		dot.className = PROPERTIES.FORMATING.snake;

		document.getElementById(`${row + 1}${column + 1}_snake_dot`).className = PROPERTIES.FORMATING.snake;
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

			board.push(<div className={formatName} id={`${i}${x}_snake_dot`}  data-column={i} data-row={x}></div>);
		}
	}

	return (
		<div className="App">
		<body>
			<div className='square'>
				{board}
			</div>
			<input onKeyDown={(e) => dispatch({code: e.code, row: row, column: column})}></input>
		</body>
		</div>
	);
}
 
export default App;
