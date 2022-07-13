class Toggle extends React.Component {
    constructor() {
        const PROPERTIES = {
            FORMATING: {snake: 'snake-dot', cell: 'dot', food: 'food-dot'},
            COLUMNS: 10,
            ROWS: 10,
            FOOD_COORDENATES: {column: Math.floor(Math.random() * 10), row: Math.floor(Math.random() * 10)}
        } 

        for(let x = 0; x < PROPERTIES.ROWS; x++) {
            for(let i = 0; i < PROPERTIES.COLUMNS; i++) {
                return board.push(<div className={
                ( (i == PROPERTIES.FOOD_COORDENATES.column) && (x == PROPERTIES.FOOD_COORDENATES.row) )
                    ? PROPERTIES.FORMATING.food 
                    : PROPERTIES.FORMATING.cell
                } id={i + '_snake_dot'}  data-column={i} data-row={x} onClick={manageCell}></div>);
            }
        }
    }
}