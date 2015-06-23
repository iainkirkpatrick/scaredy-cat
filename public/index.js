var catStyle = {
  position: 'relative',
  left: '100px',
  top: '100px',
};

var Cat = React.createClass({
  getInitialState: function() {
    return {coords: [0,0]};
  },
  render: function() {
    return (<div style={catStyle} id='cat'><img src={'cat.png'}/></div>)
  }
});

React.render(
  <Cat />,
  document.getElementById('container')
);


var bodyMouseStream = Rx.Observable.fromEvent($('html'), 'mousemove')
  .map(function(e) {
    return [e.pageX, e.pageY];
  });

bodyMouseStream.subscribe(function(coords) {
  console.log(coords);
});
