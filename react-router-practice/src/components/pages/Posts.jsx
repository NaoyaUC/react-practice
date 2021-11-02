import { NavLink, useRouteMatch } from "react-router-dom";

export const Posts = (props) => {
  console.log(props.match.params.id);
  const id = props.match.params.id;

  // console.log(props);
  // const { path, url } = useRouteMatch();
  // console.log(path);
  // console.log(url);
  
  return (
    <div>
      <h1>Post {id}</h1>
      {pages.map((post) => (
        <li key={post.id}>
          <NavLink to={`/posts/${post.id}`}>{post.title}</NavLink>
        </li>
      ))}
    </div>
  );
};

const pages = [
  { id: 1, title: "React", content: "React Tutorial" },
  { id: 2, title: "Vue", content: "Vue.js Tutorial" },
  { id: 3, title: "Laravel", content: "Laravel Tutorail" },
];
