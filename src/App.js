import React from 'react';
import axios from 'axios';

class App extends React.Component {
  // State of your application
  state = {
    orderItems: [],
    error: null,
  };

  // Fetch your restaurants immediately after the component is mounted
  componentDidMount = async () => {
    try {
      const response = await axios.get('http://localhost:1337/order-items');
      console.log("response.data: ", response.data)
      this.setState({ orderItems: response.data });
    } catch (error) {
      this.setState({ error });
    }
  };

  render() {
    const { error, orderItems } = this.state;
    console.log("orderItems: ", orderItems)
    // Print errors if any
    if (error) {
      return <div>An error occured: {error.message}</div>;
    }

    return (
      <div className="App">
        <ul>
          {this.state.orderItems.map(item => (
            <div>
              <li key={item.id}>{item.firstname}</li>
              <li key={item.id}>{item.lastname}</li>
              <li key={item.id}>{item.email}</li>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;