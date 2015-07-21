var React = require('react');
var Rx = require('rx');
var Victor = require('victor');

var bodyMouseStream = Rx.Observable.fromEvent(document.querySelector('html'), 'mousemove')
  .map(function(e) {
    return [e.pageX, e.pageY];
  });

var catSize = 50;

var Cat = React.createClass({
  getInitialState: function() {
    return {
      path: {
        coords: [100, 100],
        vector: new Victor(0, -1) //backwards-pointing vector, randomise later
      }
    };
  },
  componentDidMount: function() {
    this.watchMouse();
  },
  watchMouse: function() {
    self = this;
    bodyMouseStream.subscribe(function(mouseCoords) {
      var trackProximity = 500;
      var pounceProximity = 100;
      var currentProximity = self.calculateDistanceBetween(mouseCoords, self.state.path.coords, catSize)
      if (currentProximity < pounceProximity) {
        self.pounce(mouseCoords);
      } else if (currentProximity < trackProximity) {
        self.track(mouseCoords)
      };
    });
  },
  track: function(mouseCoords) {
    console.log('tracking');
    self = this;
    this.setState({
      path: {
        coords: mouseCoords.map(function(coord, i) {
          return  self.state.path.coords[i] + (coord - self.state.path.coords[i]) / 50;
        }),
      } 
    }); 
  },
  pounce: function(mouseCoords) {
    console.log('pouncing');
    self = this;
    this.setState({
      path: {
        coords: mouseCoords.map(function(coord, i) {
          return  self.state.path.coords[i] + (coord - self.state.path.coords[i]) / 5;
        }),
      } 
    }); 
  },
  render: function() {
    var catStyle = {
      position: 'relative',
      left: this.state.path.coords[0] - catSize/2,
      top: this.state.path.coords[1] - catSize/2,
    };
    var imgStyle = {
      width: catSize + 'px',
      height: 'auto'
    }
    return (
      <div style={catStyle} id='cat'>
        <img style={imgStyle} src={'cat.png'}/>
      </div>
    )
  },
  calculateDistanceBetween: function(mouseCoords, catCoords, catSize) {
    // var catCentreCoords = catCoords.map(function(e) {
    //   return e + catSize/2
    // })
    var xDist = Math.abs(catCoords[0] - mouseCoords[0])
    var yDist = Math.abs(catCoords[1] - mouseCoords[1])
    var centreDistance = Math.sqrt(xDist * xDist + yDist * yDist);
    return centreDistance - catSize / 2;
  },
});

React.render(
  <Cat />,
  document.getElementById('container')
);
