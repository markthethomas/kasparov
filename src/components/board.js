const React = require('react');

const Board = React.createClass({
  render() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const grid = letters.map((letter) => {
      return numbers.map((number, index) => letter + numbers[index])
    })
    return (
      <div>
        {
          grid.map((row, rowIndex) => {
            return row.map((square, index) => {
              const darkGreen = '#6A9037';
              const lightGreen = '#85AF34';
              const evenBg = index % 2 === 0 ? darkGreen : lightGreen;
              const oddBg = index % 2 === 1 ? darkGreen : lightGreen;
              return (
                  <span id="board">
                    <div style={{
                        width: 60,
                        height: 60,
                        display: 'inline-block',
                        backgroundColor: rowIndex % 2 === 0 ? evenBg : oddBg
                      }} key={square}>
                      {square}
                    </div>
                    {index === 7 ? <br/> : null}
                  </span>
              );
            })
          })
        }
        {this.props.children}
      </div>
    );
  }
});

module.exports = Board;
