import styled from "styled-components";
import { FC } from "react";
import { Memo } from "../type/MemoType";

//Propsの型宣言
type Props = {
  memos: Memo[];
  onDeleteMemo: (index: number) => void; //関数 void
};

export const MemoList: FC<Props> = (props) => {
  const { memos, onDeleteMemo } = props;

  return (
    <MemoUl>
      {memos.map((memo: Memo, index: number) => (
        <MemoLi key={memo.text}>
          {memo.text}:{memo.date}
          <SButton onClick={() => onDeleteMemo(index)}>削除</SButton>
        </MemoLi>
      ))}
    </MemoUl>
  );
};

const SButton = styled.button`
  padding: 8px 12px;
  margin-left: 8px;
  cursor: pointer;
  border-radius: 8px;
  border: none;
  background-color: #6186ec;
  color: #fff;
`;

const MemoUl = styled.ul`
  padding: 0;
  list-style-type: none;
  background-color: #dbdbdb;
`;

const MemoLi = styled.li`
  padding: 4px;
  &:nth-child(2n) {
    background-color: #f5f5f5;
  }
`;
