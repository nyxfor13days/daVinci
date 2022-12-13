import { useState, useEffect } from "react";
import { PostT } from "../../types";
import "./Home.css";

const Home = () => {
  const [posts, setPosts] = useState<PostT[]>([]);

  useEffect(() => {
    // use fetch to get first 20 posts from api
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data.slice(0, 20)));
  }, []);

  return (
    <div className="container">
      <div className="page">
        <section className="posts__container">
          {posts.map((post) => (
            <article className="post" key={post.id}>
              <h3 className="post__title">{post.title}</h3>
              <p className="post__description">{post.body}</p>
            </article>
          ))}
        </section>

        <aside className="sidebar">
          <div className="sidebar__container">aside</div>
        </aside>
      </div>
    </div>
  );
};

export default Home;
