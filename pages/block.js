import React from  'react';
import css from './block.module.css';

class Block extends React.Component {
    state = {
        stateColors: this.props.colors
    }
    
    handleClick = (e) => {
        console.log(e.target);
        console.log(e.target.dataset.colindex);
        console.log(e.target.dataset.rowindex);
        console.log(this.state.stateColors);

        const col = e.target.dataset.colindex;
        const row = e.target.dataset.rowindex;

        const currentColor = this.state.stateColors[row][col];
        console.log(currentColor);

        const maxRowLength = this.state.stateColors.length;
        const maxColLength = this.state.stateColors[0].length;

        //check adjacent cols
        if (col-1 >= 0 && this.state.stateColors[row][col-1] === currentColor) {
            console.log('column to the left');
            e.target.backgroundColor = "white";
        }

        if (maxColLength <= col+1 && this.state.stateColors[row][col+1] === currentColor) {
            console.log('column to the right');
        }

        // // check adjacent rows
        if (row-1 >= 0 && this.state.stateColors[row-1][col] === currentColor) {
            console.log('row on top');
        }

        if (maxRowLength <= row+1 && this.state.stateColors[row+1][col] === currentColor) {
            console.log('row on bottom');
        }
    }

    render() {
        const createBox = (color, row, col) => {
            return (<div data-ColIndex={col} data-RowIndex={row} style={{
              height: '50px',
              width: '50px',
              backgroundColor: color,
              border: 'white 1px solid',
            }}>
            </div>)
        }

        const block = this.props.colors.map((col, j) => {
            return (
                <div key={j} className={css.columnContainer}>
                    {
                        col.map((color, i) => {
                        return (
                            <div  key={i} onClick={this.handleClick}>{createBox(color, j, i)}</div>
                        )
                    })
                }

                </div>
            )
        })

    
        return (
            block      
        )
    }

}

export default Block;