import { useState } from "react"
import { useFetchUsers } from "./hooks/useFetchUsers"
import styled from 'styled-components'
import { UserList } from "./UserList";

const style = {
  padding : "8px",
  marginRight: "8px",
  borderRadius: "8px"
};

export const App = () =>{  
  //objectの分割代入
  const { userList, setUserList,isLoading, setIsLoading, isError, onClickFetchUserList } =
    useFetchUsers();

  const zeroUser = () => {
    setIsLoading(true);
    setUserList();
  }

  return (
    <div>
      <Button style={style} onClick={onClickFetchUserList}>
        ユーザー一覧取得
      </Button>
      <Button style={style} onClick={zeroUser}>
        削除
      </Button>
      {isError && <span style={{ color: "red" }}>エラーが発生しました。</span>}

      {isLoading ? <p>データ取得中です</p> : <UserList users={userList} />}
    </div>
  );
}


const Button = styled.button`
  padding: 8px;
  border-radius: 8px;
  border: none;
  background-color: skyblue;
  color: #fff;
  &:hover {
    background-color: gray;
    transition: .3s;
  }
`;