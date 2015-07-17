var Victor = require('victor');

var bodyMouseStream = Rx.Observable.fromEvent($('html'), 'mousemove')
  .map(function(e) {
    return [e.pageX, e.pageY];
  });

var catSize = 50;

var Cat = React.createClass({
  getInitialState: function() {
    return {
      path: {
        coords: {
          x: 0,
          y: 0
        },
        vector: new Victor(0, -1) //backwards-pointing vector, randomise later
      }
    };
  },
  componentDidMount: function() {
    self = this;
    bodyMouseStream.subscribe(function(mouseCoords) {
      var pounceProximity = 100
      var currentProximity = self.calculateDistanceBetween(mouseCoords, self.state.path.coords, catSize)
      if (currentProximity < pounceProximity) {
        self.pounce(mouseCoords)
      }
    });
  },
  render: function() {
    var catStyle = {
      position: 'relative',
      left: this.state.path.coords[0],
      top: this.state.path.coords[1],
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
    catCentreCoords = catCoords.map(function(e) {
      return e + catSize/2
    })
    console.log(catCentreCoords);
    var xDist = Math.abs(catCentreCoords[0] - mouseCoords[0])
    var yDist = Math.abs(catCentreCoords[1] - mouseCoords[1])
    var centreDistance = Math.sqrt(xDist * xDist + yDist * yDist);
    return centreDistance - catSize / 2;
  },
  pounce: function(mouseCoords) {
    this.setState({
      path: {
        coords: mouseCoords.map(function(e) {
          return e - catSize / 2;
        }),
      } 
    }); 
  }
});

React.render(
  <Cat />,
  document.getElementById('container')
);
