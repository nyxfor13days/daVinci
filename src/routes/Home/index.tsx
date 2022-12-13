import "./Home.css";

const Home = () => {
  return (
    <div className="container">
      <div className="page">
        <section className="posts__container">
          <article className="post">
            <h3 className="post__title">title</h3>
            <p className="post__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
              neque tempora! Quod corporis amet deleniti quas, placeat,
              explicabo commodi est, mollitia rem animi unde? Tenetur,
              molestias? Eligendi expedita iste vero!
            </p>
          </article>

          <article className="post">
            <h3 className="post__title">title</h3>
            <p className="post__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
              neque tempora! Quod corporis amet deleniti quas, placeat,
              explicabo commodi est, mollitia rem animi unde? Tenetur,
              molestias? Eligendi expedita iste vero!
            </p>
          </article>

          <article className="post">
            <h3 className="post__title">title</h3>
            <p className="post__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
              neque tempora! Quod corporis amet deleniti quas, placeat,
              explicabo commodi est, mollitia rem animi unde? Tenetur,
              molestias? Eligendi expedita iste vero!
            </p>
          </article>
        </section>

        <aside className="sidebar">
          <div className="sidebar__container">aside</div>
        </aside>
      </div>
    </div>
  );
};

export default Home;
