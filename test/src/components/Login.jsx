import React , {Component}from 'react';
// import {connect} from 'react-redux';

export default class Login  extends Component {
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
      handleSignIn(e) {
        e.preventDefault()
        let username = this.refs.username.value
        let password = this.refs.password.value
        this.props.onSignIn(username, password)
      }

    render() {
    return (
        <form onSubmit={this.handleSignIn.bind(this)} className="login">
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
                            {/* <button className="btn">SIGN IN</button> */}
                            <input type="submit" value="Login" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </form>
    )
}
}
