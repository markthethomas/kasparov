const React = require('react');
const PropTypes = React.PropTypes;
const Board = require('./components/board');
const boardData = require('./data/board');
const Draggable = require('react-draggable');
const chess = require('chess.js');
const game = new chess();

const App = React.createClass({
  getInitialState: function() {
    return {
      game,
      pieces: boardData.squares.map((row) => {
          return row.map((square) => {
            const fetchPiece = game.get(square);
            let piece = (fetchPiece && {
              type: fetchPiece.type,
              color: fetchPiece.color
            })
            return piece;
          })
        })
    };
  },
  componentDidMount: function() {
    this.setState({
      pieces: boardData.squares.map((row) => {
          return row.map((square) => {
            const fetchPiece = game.get(square);
            let piece = (fetchPiece && {
              type: fetchPiece.type,
              color: fetchPiece.color
            })
            return piece;
          })
        })
    });
  },
  handleMove() {
    this.state.game.move({
      from: 'g2',
      to: 'g3'
    });
    this.state.game.move({
      from: 'h2',
      to: 'h4'
    });
    this.state.game.move({
      from: 'g4',
      to: 'g5'
    });
    this.setState({
      game,
      pieces: this.state.pieces
    });
  },
  render() {
    return (
      <div>
        <button onClick={this.handleMove} className="btn btn-primary">
          Test move
        </button>
        <Board>
          <pre>
            {this.state.game.ascii()}
          </pre>
          <h2>History</h2>
          <pre>
            {
              this.state.game
              .history({ verbose: true })
              .map((move) => {
                return (
                  <span>
                    Color: <strong>{move.color}</strong><br/>
                    To: {move.to} <br/>
                    From: {move.from} <br/>
                  </span>
                );
              })
            }
          </pre>
          {
            this.state.pieces.map((row, rowIndex) => {
            return row.map((piece, colIndex) => {
              let coords = boardData.coordinates[rowIndex][colIndex]
              return (
                <Draggable
                  start={coords}
                  grid={[60, 60]}>
                  <div style={{
                    width: 60,
                    top: 9,
                    height: 60,
                    position: 'absolute'
                  }}>
                    {piece !== null || undefined
                      ? <h1>
                          {piece.type}
                        </h1>
                      : null
                    }
                  </div>
                </Draggable>
              );
            });
          })
        }
        </Board>
      </div>
    );
  }
});

module.exports = App;
