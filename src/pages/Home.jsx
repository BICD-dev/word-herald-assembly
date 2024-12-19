import background from "../assets/black_bg.jpg";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import church from "../assets/image.png";

const Home = () => {
  AOS.init();

  return (
    <>
      {/* beginning section  */}
      <div
        className="h-screen bg-cover px-6 text-white flex justify-center items-center"
        style={{ backgroundImage: `url(${background})` }}
      >
        <h1 className="text-center">
          <b className="text-[6rem] text-yellow-400"> Living </b>
          <b className="text-white text-[3rem] bg-red-600"> for the</b>
          <b className="text-red-600 text-[6rem]"> Gospel </b>
        </h1>
      </div>
      {/* announcement section */}
      <div className="mt-9 mx-6 " data-aos="fade-up">
        <h2 className="text-4xl font-semibold text-center ">Announcements</h2>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 mb-12">
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
        <header className="flex justify-between mb-2">
          <h2 className="text-4xl font-semibold text-center ">Articles</h2>
          <button className="w-[full] py-2 px-4 sm:mx-6 mb-2 bg-black text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            <a href="/articlesList">See all Articles</a>
          </button>
        </header>
        <section className=" p-4  ">
          <span className=" shadow-lg">
            <h2 className="standard-h2 ">Suffering for being a Christian</h2>
            <p>
              Many Christians will most likely not want to listen to someone who
              tells them that they&apos;ll have to suffer in this world.
              You&apos;ll probably hear responses such as &quot;Christ has
              suffered so that i won&apos;t have to suffer&quot;, but what
              exactly does the bible say about this?
            </p>
            <h3 className="font-semibold ">Written by Victor</h3>
            <button className="bg-orange-600 text-white rounded-2xl p-1 px-2 mt-2">
              <a href="#">Read More..</a>.
            </button>
          </span>
        </section>
      </div>

      <div className="mx-6 mb-6 flex flex-col items-center md:items-stretch">
        <h1 className="text-4xl capitalize font-bold  text-center mb-12">
          upcoming events
        </h1>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 md:grid-cols-2 ">
          <section className="border border-solid border-[#7e7a7a] w-fit rounded-2xl overflow-hidden md:rounded-md">
            <img src={church} alt="church_pic1" className="h-[15rem] w-full" />
            <p className="p-4 text-center  text-xl">
              Love Feast - Tuesday service
            </p>
            <p className="p-4 text-[15px] text-center font-light">
              Physical meeting - Mellanby OSR
            </p>
          </section>

          <section className="border border-solid border-[#5c5656] w-fit rounded-2xl overflow-hidden md:rounded-md">
            <img src={church} alt="church_pic1" className="h-[15rem] w-full" />
            <p className="p-4 text-center  text-xl">
              Celebration service - Sunday service
            </p>
            <p className="p-4 text-[15px] text-center font-light">
              Physical meeting - Mellanby OSR
            </p>
          </section>

          <section className="border border-solid border-[#5c5656] w-fit rounded-2xl overflow-hidden md:rounded-md">
            <img src={church} alt="church_pic1" className="h-[15rem] w-full" />
            <p className="p-4 text-center  text-xl">
              Prayer meeting - Friday service
            </p>
            <p className="p-4 text-[15px] text-center font-light">
              Physical meeting - Chapel
            </p>
          </section>
        </div>
      </div>
      {/* short intro to pastors */}
      <div className="px-6">
        <h1 className="text-4xl font-bold  text-left mb-2">
          We&apos;re Glad You Found Us
        </h1>
        <p className="text-xl font-light">
          We are Pastor Rebecca surname and Pastor Ay surname, the Presiding
          Pastor and the assistant pastor of WHA and we are so excited to
          connect with you through this website. It is not an accident that you
          found us, God orchestrated this connection to transform your life for
          the better.
        </p>
      </div>

      {/* taking you to the telegram sermos page */}
      <div className="flex w-full justify-center">
        <button className="font-bold w-1/3 py-2 px-4 mt-5 mb-2 bg-red-600 sm:mb-[9rem] text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Latest Sermon
        </button>
      </div>
    </>
  );
};

export default Home;
