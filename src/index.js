import React from 'react';

class Order extends React.Component{
  render(){
    return(
      <div className="order">
        <ul>
          <li>{this.props.cone ? 'Cone' : 'Cup'}</li>
          <li>{this.props.size}</li>
          <li>{this.props.scoops.length} scoops: {this.props.scoops.join(', ')}</li>
        </ul>
      </div>
    )
  }
}

Order.defaultProps{
  cone: true;
  size: 'regular'
}