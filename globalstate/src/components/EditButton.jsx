
import {useContext} from "react";
import { AdminFlagContext } from "./providers/AdminFlagProvider";

const style = {
  width: "100px",
  borderRadius: "8px",
  padding: "8px"
};

export const EditButton = () => {
  // const { isAdmin } = props;

  const { isAdmin } = useContext(AdminFlagContext);

  //useContextの引数に参照するContextを指定する
  // const contextValue = useContext(AdminFlagContext);
  // console.log(contextValue);
  
  return (
    <button style={style} disabled={!isAdmin}>
      編集
    </button>
  );
};
