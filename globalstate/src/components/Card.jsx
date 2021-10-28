import {EditButton} from "./EditButton";
import { ExForm } from "./ExForm";

const style = {
  width: "300px",
  height: "200px",
  margin: "8px",
  borderRadius: "8px",
  backgroundColor: "#e9bdb0",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
};

export const Card = () => {
  // const { isAdmin } = props;

  return (
    <div style={style}>
      <p>タナカタロウ</p>
      <ExForm />
      <EditButton/>
    </div>
  );
};
