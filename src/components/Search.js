import React, { Component } from 'react'
class Search extends Component {
    
    constructor(props){  
        super(props);  
        if(!localStorage.getItem("userdata")){
            window.location = "/";
        } 
      }   

    
    state = {
        text : ''
    }
    onChange = e => this.setState({[e.target.name] : e.target.value });
    onSubmit(e){
        e.preventDefault();
        console.log(this.state.text);
        this.props.searchUsers(this.state.text);
    }
   
    handleClick = () => {
        localStorage.clear("userdata")
        window.location = "/";
      };

    render() {
        return (
            
            <div>
                <div onClick={ this.handleClick} class="logout">logout</div>
                <form onSubmit={this.onSubmit.bind(this)} className="form">
                    <input class="searchbox" type="text" name="text" value={this.state.text} placeholder="Search users...." onChange={this.onChange} />
                    <input type="submit" value="Search" className="btn btn-dark btn-block" />
                </form>

            </div>
        )
    }
}

export default Search
