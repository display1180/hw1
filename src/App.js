import React, {Component} from 'react';
import './App.css';
class App extends Component {
  id = 1;
  state = {
    username: '',
    password: '',
    list: []
  }
  handleChange = e => {
    const {value, name}  = e.target;
    this.setState({
      [name] : value
    })
  }

  handleInsert = () =>{
    const {username, password, list} = this.state;
    this.setState({
      username : '',
      password: '',
      list : list.concat({id: this.id, username, password})
    });
    this.id += 1;
  };
  isSafe = () => {
    var {password, username} = this.state;
  
    let a = password.length < 6;
    let b = password.includes(username);
    return  a && b;
    
  }
  render() {
    const {username, password, list} = this.state;
    
    
    return (
      <div>
        <input name="username" value={username} onChange={this.handleChange} />
        <input name="password" type="password" value={password} onChange={this.handleChange} />
        <button disabled={this.isSafe()} onClick={this.handleInsert}>추가하기</button>
        
        {list.map((item) => (
          <li key={item.id}>
            {item.username} : ({item.password})
          </li>
        ))}
      </div>
    );
  }
    
  
}
  


export default App;