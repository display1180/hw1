import React, {Component} from 'react';
import './App.css';
class App extends Component {
  cong = 2;
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
    var result = true;
    var {password, username} = this.state;
  
    let a = password.length > 6;
    let b = password.includes(username) !== true;
    let c = username.includes("@") ;
    let d = password.toLowerCase() !== password ? true : false;
    console.log(a,b,c,d);

    result = !a || !b || !c || d;
    let lastResult = (!result) || username == '' || password == '';
    console.log(result);
    console.log(lastResult);
    return  lastResult;

    //학생 코멘트
    //setState로 변경하고 싶습니다. (코드가 중구난방인것 같은데 시간이 있으면 변경해보겠습니다.)
     
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