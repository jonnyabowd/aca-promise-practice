import React, { Component, Fragment } from 'react'
import { Button } from '@material-ui/core'
import { connect } from 'react-redux'
import { getUsersFromAPI } from './actions'

class Users extends Component {

  getUsers = () => {
      this.props.getUsers()
  }

  render() {
    return (
      <Fragment>
        <div>
          <h3>Press the button to get users and display them below</h3>
          <Button onClick={this.getUsers} variant="contained" color="primary">Get Users</Button>
        </div>
        <div className="users-block">
          {/* Map through users here */}
          {
            this.props.users.map(user => (
              <p>{user.name}</p>
            ))
          }
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => dispatch(getUsersFromAPI())
  }
}

export default connect (mapStateToProps, mapDispatchToProps) (Users)