
import {useContext} from "react";
import { AdminFlagContext } from "./providers/AdminFlagProvider";

const style = {
  width: "min-content",
  padding: "8px",
  margin: "0 auto"
};

export const ExForm = () => {
  //propsではなく useContextから参照する
  // const { isAdmin } = props;

  const { isAdmin } = useContext(AdminFlagContext);
  
  return (
    <div style={style}>
      <input type="text" name="name" disabled={!isAdmin}/>
      <input type="email" name="email"  disabled={!isAdmin}/>
      <input type="number" name="age"  disabled={!isAdmin}/>
    </div>
  );
};
