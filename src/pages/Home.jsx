import background from "../assets/black_bg.jpg";
import church from "../assets/church.png";
import flyer from "../assets/flyer.png";
import compound from "../assets/compound.png";
import AOS from "aos";
import "aos/dist/aos.css";
// import { motion } from "motion/react";

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
      {/* flyer section */}
      <section className="flex justify-center items-center">
        <img
          src={flyer}
          alt="flyer"
          className="mt-[3rem] h-[35rem] w-[1080px]"
        />
      </section>
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

      {/* upocoming events */}
      <div className="mx-6 mb-6 flex flex-col items-center md:items-stretch">
        <h1 className="text-4xl capitalize font-bold  text-center mb-12">
          upcoming events
        </h1>
        <section>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 md:grid-cols-2 ">
            <section className="border border-solid border-[#7e7a7a] w-fit rounded-2xl overflow-hidden md:rounded-md">
              <img
                src={church}
                alt="church_pic1"
                className="h-[15rem] w-full"
              />
              <p className="p-4 text-center  text-xl">
                Love Feast - Tuesday service
              </p>
              <p className="p-4 text-[15px] text-center font-light">
                Physical meeting - Mellanby OSR
              </p>
            </section>

            <section className="border border-solid border-[#5c5656] w-fit rounded-2xl overflow-hidden md:rounded-md">
              <img
                src={church}
                alt="church_pic1"
                className="h-[15rem] w-full"
              />
              <p className="p-4 text-center  text-xl">
                Celebration service - Sunday service
              </p>
              <p className="p-4 text-[15px] text-center font-light">
                Physical meeting - Mellanby OSR
              </p>
            </section>

            <section className="border border-solid border-[#5c5656] w-fit rounded-2xl overflow-hidden md:rounded-md">
              <img
                src={church}
                alt="church_pic1"
                className="h-[15rem] w-full"
              />
              <p className="p-4 text-center  text-xl">
                Prayer meeting - Friday service
              </p>
              <p className="p-4 text-[15px] text-center font-light">
                Physical meeting - Chapel
              </p>
            </section>
          </div>
        </section>
      </div>

      {/* short intro to pastors */}
      <div className="px-6 mb-10">
        <h1 className="text-4xl font-bold  text-left mb-2">
          We&apos;re Glad You Found Us
        </h1>
        <p className="text-xl font-semibold text-gray-500">
          We are Pastor Rebecca surname and Pastor Ay surname, the Presiding
          Pastor and the assistant pastor of WHA and we are so excited to
          connect with you through this website. It is not an accident that you
          found us, God orchestrated this connection to transform your life for
          the better.
        </p>
      </div>

      {/* service times */}
      <div className=" text-white px-10 mb-4 flex flex-col justify-center items-center bg-cover"
  style={{ backgroundImage: `url(${compound})` }}>
    

  {/* Content */}
  <div className="text-center">
    <h1 className="text-[3rem] font-bold mb-4">Service Times</h1>
    <section className="leading-8 text-[1.2rem] mb-4 font-semibold">
      <p>Sundays {"(celebrate Jesus)"} | 12:30pm - 3:00pm</p>
      <p>Tuesdays {"(Bible study)"} | 6:00pm - 8:00pm</p>
      <p>Fridays {"(Prayer meeting)"} | 7:00pm - 8:00pm</p>
    </section>
    <section className="flex flex-col items-center md:grid md:grid-cols-2 md:gap-8 mb-4">
      <button className="font-bold w-[6rem] py-3 px-4 bg-red-600 mb-4 sm:mb-[9rem] text-white hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
        Latest Sermon
      </button>
      <button className="font-bold w-[6rem] py-3 px-4 bg-transparent border border-solid text-white sm:mb-[9rem] hover:bg-red-700 hover:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
        Learn more
      </button>
    </section>
  </div>
</div>

    </>
  );
};

export default Home;
