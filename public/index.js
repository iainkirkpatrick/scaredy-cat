var bodyMouseStream = Rx.Observable.fromEvent($('html'), 'mousemove')
  .map(function(e) {
    return [e.pageX, e.pageY];
  });

var Cat = React.createClass({
  getInitialState: function() {
    return {coords: [0,0]};
  },
  componentDidMount: function() {
    self = this;
    bodyMouseStream.subscribe(function(coords) {
      console.log(coords);
      self.setState({
        coords: coords
      });
    });
  },
  render: function() {
    var catStyle = {
      position: 'relative',
      left: this.state.coords[0],
      top: this.state.coords[1],
    };
    return (<div style={catStyle} id='cat'><img src={'cat.png'}/></div>)
  }
});

React.render(
  <Cat />,
  document.getElementById('container')
);
