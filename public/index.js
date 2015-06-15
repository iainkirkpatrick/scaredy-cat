var _ = highland;

var mouse = _('mousemove', document).map(function(m) {
  return m;
})

mouse.each(function(m) {
  console.log(m);
});

//array.map: it takes an array / list of things, applies an operation to each of them,
//and returns a new list with each of the things transformed

//so if i use array.map, i probably want to input a list of mousemove, and
//get back a list of mouse x,y coords

// var doubled = _([1, 2, 3, 4]).map(function (x) {
//     return x * 2;
// });
//
// doubled.each(function(n) {
//   console.log(n);
// });

var Cat = React.createClass({
  render: function() {
    return (<div id='cat'><img src={'cat.png'}/></div>)
  }
});

React.render(
  <Cat />,
  document.getElementById('container')
);
