import React,{ useState } from 'react';
import './App.css';
import { connect ,useSelector, useDispatch } from 'react-redux';
import { loginAction , listUsers } from './actions/myaction';
import { Button, Form, FormGroup, Label, Input,Alert } from 'reactstrap';
import { useHistory } from 'react-router-dom';

const Login = (props) => {
  const history = useHistory();
  console.log("props=====>",props)
  const [email, setEmail] = useState("");
  const [ password, setPassword] = useState("");

  const selector_data = useSelector((state) => state);
  console.log("selector_data--->",selector_data)
  const dispatch = useDispatch();
  
  var login_msg = ""
  selector_data.login.map((item, key) =>{
    login_msg = item['error_msg']
  })

 
  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.loginAction({ email, password })
  

    if(localStorage.getItem("userdata")){
      history.push("/Userdetails");
    }else{
      history.push("/");
    }
    //dispatch(listUsers())
  }
  
  return (
    <div className="App container w-50">
      { login_msg &&
        <Alert>
          {console.log(login_msg)}
        {login_msg}
        </Alert>
      }
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input 
           type="email" 
           name="email" 
           id="exampleEmail"
           onChange={ e => setEmail(e.target.value)}  
           placeholder="sanjeevkumar@smartdatainc.net" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
           type="password" 
           name="password" 
           id="examplePassword"
           onChange={ e => setPassword(e.target.value)}   
           placeholder="password" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>

    </div>
  );
}
//To get data from store....
const mapStateToProps = (state) => {
  console.log("state--->",state)
  return {
      login_err : state.login.error_msg,
      loginData : state.login
  }
}

//To modify data into store...
const mapDispatchToProps = (dispatch) => {
  return {
    loginAction :  (email,password) => dispatch(loginAction({email :  email , password : password })),
    listUsers :  () => dispatch(listUsers())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
