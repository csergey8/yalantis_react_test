import React from 'react';
import moment from 'moment';
import { MonthItem } from './components/MonthItem';
import styles from './App.module.scss';
import List from '@material-ui/core/List';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      months: moment.months(),
      users: null
    }
  }
  getUsers = async () => {
    try {
      let response = await fetch('https://yalantis-react-school-api.yalantis.com/api/task0/users')
      const users = await response.json()
      this.setState({
        users
      })
    } catch (e) {
      console.log(e)
    }
  }
  componentDidMount() {
    this.getUsers()
  }
  render() {
    return (
      <div className={styles.container}>
        <List>
          {this.state.months.map(month => {
            const users = this.state.users && this.state.users.filter(user => moment(user.dob).format('MMMM') === month)
            return <MonthItem key={month} name={month} users={users} />
          })}
        </List>
      </div>
    );
  }
}

export default App;
