const React = require('react');
const PropTypes = React.PropTypes;
const Board = require('./components/board');
const Draggable = require('react-draggable');

const App = React.createClass({

  render() {
    return (
      <div>
        <Board>
          <Draggable bounds="parent" grid={[60, 60]}>
            <div style={{
                width: 60,
                height: 60,
                backgroundColor: 'blue'
              }}></div>
          </Draggable>
        </Board>
      </div>
    );
  }
});

module.exports = App;
