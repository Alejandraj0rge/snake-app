import './App.css';
import React, {useReducer} from 'react';

const PROPERTIES = {
	FORMATING: {snake: 'snake-dot', cell: 'dot', food: 'food-dot'},
	COLUMNS: 10,
	ROWS: 10,
	FOOD_COORDENATES: {column: Math.floor(Math.random() * 10), row: Math.floor(Math.random() * 10)}
} 

function manageCell(e){
	e.currentTarget.className = 'food-dot';
}

function getKey(e){
	switch (e.code) {
		case 'ArrowRight':
		/* 	e.currentTarget.dataset.column
			e.currentTarget.dataset.row
			
			 */
			break;

		case 'ArrowLeft':
			
			break;

		case 'ArrowUp':
			
			break;

		case 'ArrowDown':
			
			break;
	}
}

function reducer({row, column, cell}, action){
}

function App() {
	const [{row, column, cell}, dispatch] = useReducer(reducer, 0);
	let board = [];

	for(let x = 0; x < PROPERTIES.ROWS; x++) {
		for(let i = 0; i < PROPERTIES.COLUMNS; i++) {
			board.push(<div className='dot' id={i + '_snake_dot'}  data-column={i} data-row={x} onClick={manageCell}></div>);
		}
	}

/* 	board.forEach(element => {
	 	( (element.props.dataset.column == PROPERTIES.FOOD_COORDENATES.column) && (element.props.dataset.row == PROPERTIES.FOOD_COORDENATES.row) )
	 		? element.className = PROPERTIES.FORMATING.food : null ;
	}); */
		
	return (
		<div className="App">
		<body>
			<div className='square'>
				{board}
			</div>
			<input onKeyDown={getKey}></input>
		</body>
		</div>
	);
}

export default App;
