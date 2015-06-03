var Cat = React.createClass({
  render: function() {
    return (
      <div id='cat'>
        <img src={'cat.png'} />
      </div>
    )
  }
});

React.render(
  <Cat />,
  document.getElementById('container')
);
