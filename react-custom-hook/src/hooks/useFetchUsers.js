import {useState} from "react"
import axios from "axios";

//ユーザー一覧を取得するカスタムフック
export const useFetchUsers = () => {
  // const [userList, setUserList] = useState([{ id: 1 }]);
  // const onClickFetchUser = () => alert("関数実行");

  const [userList, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);


  //まとめて返却したいのでオブジェクトに設定する
  // return { userList, onClickFetchUser };

  //ユーザー取得ボタン
  const onClickFetchUserList = () => {
    //ボタン押下時にローディングフラグ on , エラーフラグoff
    setIsLoading(true);
    setIsError(false);

    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((result) => {
        //
        const users = result.data.map((user) => ({
          id: user.id,
          name: user.name,
          email: user.email,
        }));
        setUserList(users);
      })
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  };

  return { userList,setUserList,setIsLoading, isLoading, isError, onClickFetchUserList };
}

