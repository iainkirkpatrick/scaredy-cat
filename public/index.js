var Cat = React.createClass({
  render: function() {
    return (
      <div id='cat'></div>
    )
  }
});

React.render(
  <Cat />,
  document.getElementById('container')
);
