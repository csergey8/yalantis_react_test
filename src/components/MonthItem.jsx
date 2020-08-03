import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import moment from 'moment';


const MonthItem = ({ name, users }) => {
    const [open, setOpen] = React.useState(false)

    let color;

    if (users) {
        switch (true) {
            case (users.length <= 2):
                color = '9e9e9e'
                break;
            case (users.length <= 6):
                color = '#2196f3'
                break;
            case (users.length <= 10):
                color = '#4caf50'
                break;
            case (users.length >= 11):
                color = '#f44336'
                break;
        }
    }

    return (
        <React.Fragment>
            <ListItem
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
                button
                style={{
                    backgroundColor: color
                }}>
                <ListItemText primary={name} />
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {users && users.map(user => (
                        <ListItem button key={user.id}>
                            <ListItemText primary={`${user.firstName} ${user.lastName} - ${moment(user.dob).format('DD, MMM, YYYY')}`} />
                        </ListItem>
                    ))}
                </List>
            </Collapse>
        </React.Fragment>
    )
}

export { MonthItem }
