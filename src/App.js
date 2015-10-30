const React = require('react');
const PropTypes = React.PropTypes;
const Board = require('./components/board');
const Draggable = require('react-draggable');

const App = React.createClass({

  render() {
    return (
      <div>
        <Board>
          <Draggable
            start={{x: 0, y: 0}}
            grid={[60, 60]}>
            <div style={{
                width: 60,
                top: 9,
                height: 60,
                position: 'absolute',
                backgroundColor: 'blue'
              }}>
            </div>
          </Draggable>
        </Board>
      </div>
    );
  }
});

module.exports = App;
