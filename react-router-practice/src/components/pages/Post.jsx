import { NavLink, useParams, useLocation, useHistory } from "react-router-dom";
import styled from "styled-components";

export const Post = (props) => {
  // const id = Number(props.match.params.id);
  const { id } = useParams();
  const page_id = Number(id);

  // console.log(useLocation());
  // console.log(useHistory());

  //投稿内容 //実際はidからデータを取得処理
  const post = pages.find((post) => post.id === page_id);

  //undifind データが見つからない
  //console.log(post);

  return (
    <PostContainer>
      {typeof post === "undefined" ? (
        <p>記事が見つかりません</p>
      ) : (
        <>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
        </>
      )}
      <NavLink to="/posts">一覧に戻る</NavLink>
    </PostContainer>
  );
};

//実際はAPI等によるデータ取得
const pages = [
  { id: 1, title: "React", content: "React Tutorial" },
  { id: 2, title: "Vue", content: "Vue.js Tutorial" },
  { id: 3, title: "Laravel", content: "Laravel Tutorail" },
];

const PostContainer = styled.div`
  margin:8px;
  box-shadow: 0 0 4px #ccc;
`