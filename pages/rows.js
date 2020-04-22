import React from  'react';
import css from './block.module.css';

class Rows extends React.Component {
    state = {
        stateColors: this.props.colors
    }

    changeBackground = (row, col) => {
        const arr = this.state.stateColors;
        arr[row][col] = "white";
        this.setState({stateColors: arr});
    }
    
    handleClick = (e) => {
        const col = e.target.dataset.colindex;
        const row = e.target.dataset.rowindex;

        const currentColor = this.state.stateColors[row][col];
        const maxRowLength = this.state.stateColors.length;
        const maxColLength = this.state.stateColors[0].length;

        //check adjacent cols
        if (col-1 >= 0 && this.state.stateColors[row][col-1] === currentColor) {
            console.log('column to the left');
            this.changeBackground(row,col-1);
        }

        if (maxColLength > parseInt(col)+1 && this.state.stateColors[row][parseInt(col)+1] === currentColor) {
            console.log('column to the right');
            this.changeBackground(row,parseInt(col)+1);
        }

        // // check adjacent rows
        if (row-1 >= 0 && this.state.stateColors[row-1][col] === currentColor) {
            console.log('row on top');
            this.changeBackground(row-1,col);
        }

        if (maxRowLength > parseInt(row)+1 && this.state.stateColors[parseInt(row)+1][col] === currentColor) {
            console.log('row on bottom');
            this.changeBackground(parseInt(row)+1,col);
        }

        this.changeBackground(row,col);
    }

    render() {
        const createBox = (color, row, col) => {
            return (<div data-colindex={col} data-rowindex={row} style={{
              height: '50px',
              width: '50px',
              backgroundColor: color,
              border: 'white 1px solid',
            }}>
            </div>)
        }

        const block = this.props.colors.map((row, i) => {
            return (
                <div key={i+30}>
                    <div key={i}>
                        {
                            row.map((color, j) => {
                                return (
                                    <div className={css.columnContainer} key={j+10} onClick={this.handleClick}>{createBox(color, i, j)}</div>
                                )
                            })
                        }
                    </div>
                    <div className={css.rowClear}></div>
                </div>
            )
        })

    
        return (
            block      
        )
    }

}

export default Rows;