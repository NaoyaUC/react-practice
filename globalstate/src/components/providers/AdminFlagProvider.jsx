import { createContext, useState,useEffect } from "react";

export const AdminFlagContext = createContext({});

export const AdminFlagProvider = (props) => {
  const { children } = props;

  // 管理者フラグ
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
     console.log(isAdmin) 
  }, [isAdmin]);

  // ContextオブジェクトとしてisAdminとsetIsAdminを設定(オブジェクトの省略記法)
  return (
    <AdminFlagContext.Provider value={{ isAdmin, setIsAdmin }}>
      {children}
    </AdminFlagContext.Provider>
  );
};