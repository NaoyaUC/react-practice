import styled from "styled-components";
import { useState, ChangeEvent, FC, useCallback, FormEvent } from "react";
import { MemoList } from "./MemoList";
import dayjs from "dayjs"; 

export type Memo = {
  text: string;
  date: string;
};

export const App:FC = () => {
  //textbox State String
  const [text, setText] = useState<string>("");
  //memo一覧 String型の配列
  const [memos, setMemos] = useState<Memo[]>([]);

  //入力内容をstateにset
  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => setText(e.target.value);
  
  // 追加ボタン押下時
  const onClickMemoAdd = () => {
    if (text !== '') {
      // State 変更を正常に検知させるため新しい配列を生成
      const newMemos = [...memos];

      const now  = dayjs() // 現在の日付情報を取得
      newMemos.push({ text: text, date: now.format('YYYY年MM月DD日') });

      setMemos(newMemos);
      // Stateを空に
      setText("");
    }else{
      alert("未入力です");
    }
  }

  const onDeleteMemo = useCallback((index:number) => {
    const newMemos = [...memos];

    newMemos.splice(index,1);

    setMemos(newMemos);    
  },[memos]);

  const EnterOk = (event: FormEvent<HTMLFormElement>) => {
    onClickMemoAdd();
    event.preventDefault();
  };

  return (
    <SContainer>
      <h1>簡単メモアプリ</h1>

      <InputArea>
        <form onSubmit={EnterOk}>
          <SInput type="text" value={text} onChange={onChangeText} />
        </form>
        <SButton onClick={onClickMemoAdd}>追加</SButton>
      </InputArea>

      <hr />

      <p>メモ一覧</p>
      <MemoList memos={memos} onDeleteMemo={onDeleteMemo} />
    </SContainer>
  );
}

const SContainer = styled.div`
  margin:8px;
  box-shadow: 0 0 8px #ccc;
  padding:8px;
  border-radius: 8px;
`
const SInput = styled.input`
  padding: 8px;
`

const SButton = styled.button`
  padding:8px 12px;
  margin-left: 8px;
  cursor: pointer;
  border-radius: 8px;
  border:none;
  background-color: #6186ec;
  color: #fff;
`

const InputArea = styled.div`
  display: flex;
`