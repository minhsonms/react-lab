import React, { Component } from 'react';

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    // Thực hiện các thao tác khởi tạo khi component được mount lần đầu tiên
    console.log('Class: Component mounted');
  }

  componentDidUpdate(prevProps, prevState) {
    // Thực hiện các thao tác sau mỗi lần state hoặc props thay đổi
    console.log('Class: Component updated');
  }

  componentWillUnmount() {
    // Thực hiện các thao tác dọn dẹp trước khi component bị unmount
    console.log('Class: Component unmounted');
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h2>Class Component</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}

export default ClassComponent;
