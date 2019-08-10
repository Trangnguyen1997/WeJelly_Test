import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Header from './components/Header';

const Welcome = ({user, onSignOut})=> {
    // This is a dumb "stateless" component
    return (
        <div className="home">
        <div className="home_image">
            <img src="./img/box-thong-tin.png" alt="" />
      <div>
          <div className="HomeContent">
                <div className="container">
                    <h3 className="homeContent_title">THỂ LỆ</h3>
                    <div className="homeContent_item">
                        <p>Mini Game <span className="home_item_red">“Gửi yêu thương đến phái đẹp”</span> là món quà chúng tôi gửi tặng một nửa ACB nhân ngày 8/3
yêu thương. Cùng chúng tôi trải qua ngày đặc biệt này với những món quà bất ngờ đang chờ bạn nhé.</p>
                    </div>

                    <div className="row">
                        <div className="khung col-lg">
                            <img src="./img/frame.png" alt="" />
                        </div>
                        <div className="suatam">
                            <img src="./img/sua-tam.png" alt="" />
                            <p className="text-center"><b>Sửa tắm</b></p>
                        </div>
                        <div className="right col-lg">
                            <p className="home_item_title">Bạn có muốn nhận thêm phần quà đặc biệt Set trang điểm của thương hiệu Chanel?</p>
                            <ul>
                                <li>Bước 1: Bạn hãy chụp ảnh màn hình và chia
                                sẻ tất cả món quà bạn nhận được (bao gồm cả lời
                chúc) trên FB cá nhân và hashtag <span className="home_item_red">#ACB #guiyeuthuongdenphaidep</span> và tag ít nhất 10 người bất kì trên FB.</li>
                                <li>Bước 2: Chụp màn hình FB của bạn đã thực
                                hiện và gửi về mail về pqtttth@acb.com.vn. Hạn
                chót gửi hình về là 23h59 ngày 09.03.2019</li>
                                <li>Bước 3: Ngày 11.03.2019, chúng tôi sẽ công Sữa tắm bố KQ set quà đặc biệt tại ACB Home</li>
                            </ul>
                            <button className="btn">Bắt đầu</button>
                        </div>
                    </div>
          
                   
                </div>
            </div>
            Welcome <strong>{user.username}</strong>!
       <a href="javascript:;" onClick={onSignOut}>Sign out</a> 
      </div>
      </div>
      </div>
    )
  }
  
  class LoginForm extends React.Component {
    
    // Using a class based component here because we're accessing DOM refs
   
    handleSignIn(e) {
      e.preventDefault()
      let username = this.refs.username.value
      let password = this.refs.password.value
      this.props.onSignIn(username, password)
    }
    
    render() {
      return (
        <form className="login" onSubmit={this.handleSignIn.bind(this)}>
            <div class="container">
                <div class="row">
                    <div className="img1 col-sm-9 col-md-6 col-lg-8">
                        <img src="./img/kv.png" alt="" />
                    </div>
                    <div className="img2 col-sm-3 col-md-6 col-lg-4">
                        <img src="./img/kv1.png" alt="" />

                        <div className="mt-4">
                            <div className="form-group">
                                <input ref="username" type="text" className="form-control" id="usr" placeholder="USER ID" onChange={this.handleInput}/>
                            </div>
                            <div className="form-group">
                                <input ref="password" type="password" className="form-control" id="pwd" placeholder="PASSWORD" onChange={this.handleInput}/>
                            </div>
                            <div className="form-group">
                            <button type="submit" value="Login" className="btn">SIGN IN</button>
                            {/* <input type="submit" value="Login" /> */}
                            </div>
                        </div>

                    </div>
                </div>
            </div>



          {/* <h3>Sign in</h3>
          <input type="text" ref="username" placeholder="enter you username" />
          <input type="password" ref="password" placeholder="enter password" />
          <input type="submit" value="Login" /> */}
        </form>
      )
    }
  
  }
  
  
  class App1 extends React.Component {
    
    constructor(props) {
      super(props)
      // the initial application state
      this.state = {
        user: null
      }
    }
    
    // App "actions" (functions that modify state)
    signIn(username, password) {
      // This is where you would call Firebase, an API etc...
      // calling setState will re-render the entire app (efficiently!)
      this.setState({
        user: {
          username,
          password,
        }
      })
    }
    
    signOut() {
      // clear out user from state
      this.setState({user: null})
    }
    
    render() {
      // Here we pass relevant state to our child components
      // as props. Note that functions are passed using `bind` to
      // make sure we keep our scope to App
      return (
        <div>
         <Header/>
          { 
            (this.state.user) ? 
              <Welcome 
               user={this.state.user} 
               onSignOut={this.signOut.bind(this)} 
              />
            :
              <LoginForm 
               onSignIn={this.signIn.bind(this)} 
              />
          }
        </div>
      )
      
    }
    
  }
ReactDOM.render(<App1 />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
