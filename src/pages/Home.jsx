// import chapel from "../assets/chapel.jpg";
import background from "../assets/black_bg.jpg";
const Home = () => {
  return (
    <>
      {/* beginning section  */}
      <div className="h-screen bg-cover text-white flex justify-center items-center" style={{ backgroundImage: `url(${background})` }}>
        <h1 className=" font-semibold text-7xl text-center">Building faith<br /> Spreading love <br /> Serving with hope</h1>
      </div>
      {/* announcement section */}
      <div className="mt-9 mx-6 ">
        <h2 className="text-4xl font-semibold text-center ">Announcements</h2>
        <section className="grid grid-cols-3 gap-6 mt-12 mb-12">
          <span className="announcement-span">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ea
              expedita repellendus vero eveniet, minima voluptatem ut quas,
              omnis architecto delectus sit, laborum quo voluptas necessitatibus
              in? Dolorum, voluptatum est?
            </p>
          </span>
          <span className="announcement-span">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ea
              expedita repellendus vero eveniet, minima voluptatem ut quas,
              omnis architecto delectus sit, laborum quo voluptas necessitatibus
              in? Dolorum, voluptatum est?
            </p>
          </span>
          <span className="announcement-span">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ea
              expedita repellendus vero eveniet, minima voluptatem ut quas,
              omnis architecto delectus sit, laborum quo voluptas necessitatibus
              in? Dolorum, voluptatum est?
            </p>
          </span>
          <span className="announcement-span">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ea
              expedita repellendus vero eveniet, minima voluptatem ut quas,
              omnis architecto delectus sit, laborum quo voluptas necessitatibus
              in? Dolorum, voluptatum est?
            </p>
          </span>
        </section>
      </div>
      {/* articles */}
      <div className="mt-9 mx-6 mb-6">
        <header className="flex justify-between">
          <h2 className="text-4xl font-semibold text-center ">Articles</h2>
          <button className="border border-black border-solid">
            <a href="/articlesList">See all articles {"=>"}{" "}</a>
          </button>
        </header>
        <section className="grid grid-cols-3 gap-6">
          <span className="announcement-span">
            <h2 className="standard-h2">Article one</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
              omnis recusandae autem illo deleniti ea quae? Perferendis
              dignissimos libero dolore facere eius eum non! Rerum ipsa libero
              illum vero quia.
            </p>
            <h3 className="font-semibold ">Written by Victor</h3>
            <button className="bg-orange-600 text-white rounded-2xl p-1 px-2 mt-2">
              <a href="/blogs">Read More..</a>.
            </button>
          </span>
        </section>
      </div>
    </>
  );
};

export default Home;
