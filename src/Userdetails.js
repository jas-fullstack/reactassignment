import React, { Component } from "react";
import "./App.css";
 
import Users from "./components/Users";
import axios from "axios";
import Search from "./components/Search";

class userDetails extends Component {
  state = {
    users: [],
    loading: false
  };
  async componentDidMount() {
    this.setState({
      loading: true
    });
    const user = await axios.get(
      `https://api.github.com/users?client_id=${
        process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({
      users: user.data,
      loading: false
    });
  }
  searchUsers = async text => {
    this.setState({
      loading: true
    });
    const user = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${
        process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    console.log("user", user.data);

    this.setState({
      users: user.data.items,
      loading: false
    });
  };
  render() {
    return (
      <div>
       
        <Search searchUsers={this.searchUsers} />
        <div className="container">
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default userDetails;
