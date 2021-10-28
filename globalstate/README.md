## global state   useContextの練習

globalに管理するstateを
providerで作成し、コンポーネントに挟む

1. `React.createContext()` でContextの器を作成する
2. 作成した Contextの Provider でグローバルstateを扱いたいコンポーネントを挟む
3. Stateを参照したいコンポーネントで `React.useContext()` を使う

1.2の為に新規で`****Provider.jsx`というコンポーネントを作成

``` javascript
// 下層コンポーネントで読み込む際に参照するContext名
export const AdminFlagContext = createContext({});

export const AdminFlagProvider = (props) => {
  //子要素の出力として childrenを渡す
  const { children } = props;

  // 管理者フラグ stateの作成
  const [isAdmin, setIsAdmin] = useState(false);

  // ContextオブジェクトとしてisAdmin:変数とsetIsAdmin:fn() を格納
  return (
    <AdminFlagContext.Provider value={{ isAdmin, setIsAdmin }}>
      {children}
    </AdminFlagContext.Provider>
  );
};

```

実際に下層のコンポーネントで呼び出す

``` javascript

// useContextの使用を宣言
import {useContext} from "react";
// 呼び出すContextを指定
import { AdminFlagContext } from "./providers/AdminFlagProvider";

export const EditButton = () => {

  // AdminFlagContextからglobal stateを取得しisAdminに分割代入
  const { isAdmin } = useContext(AdminFlagContext);
  return (
    <button style={style} disabled={!isAdmin}>
      編集
    </button>
  );
};


```

## 注意事項
- 1つのContextオブジェクトの値が何か更新されると
useContext()で参照しているコンポーネントは再レンダリングされる
- 1つのContextに属性の異なる色んなstateをまとることは避ける
