import styled from 'styled-components'

export const UserList = (props) =>{  
    // object分割代入
    const {users} = props;

    return (
    <List>
        { users.map(user => 
            <ListItem key={user.id}>{`${user.id}: ${user.name} ${user.email}`} </ListItem>
        )}
    </List>
    );
}

const List = styled.ul`
    padding: 8px;
    border-radius: 8px;
    background-color: #c0c0c0;
    list-style: none;
`;

const ListItem = styled.li`
    padding: 4px;
    margin-bottom: 8px;
    color: #fafafa;
`;