import './App.css';
import React, {useReducer, useState, useEffect} from 'react';

const PROPERTIES = {
	FORMATING: {snake: 'snake-dot', cell: 'dot', food: 'food-dot'},
	COLUMNS: 10,
	ROWS: 10,
	FOOD_COORDENATES: {column: Math.floor(Math.random() * 10), row: Math.floor(Math.random() * 10)}
} 

function manageCell(e){
	console.log(e.currentTarget);
}

function getKey(board, row, e){
	switch (e.code) {
		case 'ArrowRight':
			board.forEach(element => {
				if(element.props.className == PROPERTIES.FORMATING.snake) {
					// useEffect(() => {row = row + 1});
					// {row + 1}
					// console.log(row);
				} 
			});	
			break;

		case 'ArrowLeft':
			
			break;

		case 'ArrowUp':
			
			break;

		case 'ArrowDown':
			
			break;
	}
}

const initialState = {row: 2, column: 4, lenght: 1};

function reducer({row, column, lenght}, action){
	
}

function App() {
	const [{row, column, lenght}, dispatch] = useReducer(reducer, initialState);

	let board = [];

	useEffect(() => {
		for(let x = 0; x < PROPERTIES.ROWS; x++) {
			for(let i = 0; i < PROPERTIES.COLUMNS; i++) {
				if( (i == PROPERTIES.FOOD_COORDENATES.column) && (x == PROPERTIES.FOOD_COORDENATES.row) ){
					var formatName = PROPERTIES.FORMATING.food;
				} else if(i == 3 && x == 5){
					var formatName = PROPERTIES.FORMATING.snake;
				} else {
					var formatName = PROPERTIES.FORMATING.cell;
				}
	
				board.push(<div className={formatName} id={i + '_snake_dot'}  data-column={i} data-row={x} onClick={manageCell}></div>);
			}
		}
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

			board.push(<div className={formatName} id={i + '_snake_dot'}  data-column={i} data-row={x} onClick={manageCell}></div>);
		}
	}

	return (
		<div className="App">
		<body>
			<div className='square'>
				{board}
			</div>
			<input onKeyDown={(e) => getKey(board, row, e)}></input>
		</body>
		</div>
	);
}
 

/* function Example() {
	const [count, setCount] = useState(0);
  
	useEffect(() => {    document.title = `You clicked ${count} times`;  });
	return (
	  <div>
		<p>You clicked {count} times</p>
		<button onClick={() => setCount(count + 1)}>
		  Click me
		</button>
	  </div>
	);
  } */
export default App;
