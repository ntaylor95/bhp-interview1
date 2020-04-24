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

        var colArray = [];
        // transpose the array
        for (var j=0; j<this.state.stateColors[0].length; j++) {
            colArray.push([]);
            colArray[j].push(this.state.stateColors[0][j], this.state.stateColors[1][j], this.state.stateColors[2][j],
                this.state.stateColors[3][j], this.state.stateColors[4][j])

            if (colArray[j].includes('white')) {
                for (var i=colArray[j].length-1; i>=0; i--) {
                    console.log(colArray[j][i]);
                    if (colArray[j][i] === "white") {
                        colArray[j].splice(i, 1);
                    }
                }
            }

            if (colArray[j].length < 5) {
                do  {
                    colArray[j].unshift('white');
                } while (colArray[j].length < 5)
            }
        }

        console.log(colArray);

        var rowArray = [];
        for (var i=0; i<this.state.stateColors.length; i++) {
            rowArray.push([]);
            rowArray[i].push(colArray[0][i], colArray[1][i], colArray[2][i],
                colArray[3][i], colArray[4][i]);
        }

        console.log(rowArray);

        console.log('not');

        this.setState({stateColors: rowArray});

        console.log('Why');
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

        const block = this.state.stateColors.map((row, i) => {
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