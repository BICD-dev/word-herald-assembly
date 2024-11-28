const About = () => {
  return (
    <div className=" mt-[80px]">
      {/* // initial paragraph talking about the church, its mission and its vision */}
      <section className="bg-red-500 h-2/5 w-full p-[4rem]">
        <h2 className="font-bold text-7xl text-white">OUR STORY</h2>
      </section>

      <section className="mt-3 mx-6 ">
        <p className="standard-p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit officiis
          quod voluptate nisi aspernatur porro possimus dolor quia consectetur
          eos quo ratione, corporis esse tempora magni. Nostrum soluta
          exercitationem distinctio. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quo, odit. Obcaecati placeat necessitatibus iure
          magni? Exercitationem sit reprehenderit consequuntur voluptatibus
          voluptas quos iste harum inventore sunt modi, omnis excepturi. Dolor.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia animi
          impedit consectetur sint laborum, voluptatem tenetur est nemo sit
          ipsam ducimus. Fugiat expedita id, distinctio doloremque molestiae
          nulla enim quia? Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Provident id itaque illo enim! Placeat alias, autem excepturi
          itaque, error similique aliquid eligendi fugit temporibus, ipsam odio
          beatae voluptatibus voluptas facilis. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Laborum numquam saepe corporis dolore
          alias quos eos at repellendus esse necessitatibus vitae, quibusdam,
          praesentium voluptatem obcaecati nobis eius illum distinctio ab! Lorem
          ipsum, dolor sit amet consectetur adipisicing elit. Rem corporis,
          dolore non fuga ducimus modi atque dignissimos pariatur. Dicta
          repudiandae sapiente maiores qui tempora, iusto ipsum eum quasi amet
          deserunt. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea
          repellat esse perspiciatis? Culpa saepe aut harum doloribus
          accusantium, expedita incidunt temporibus accusamus magni numquam iure
          quisquam consectetur cupiditate recusandae rerum?
        </p>
      </section>
      {/* pastor section */}
        <h2 className="standard-h2">Meet the Pastors</h2>
      <section className="h-2/5 w-screen grid grid-cols-3">
        <span className="w-fit h-full text-blue-500 shadow-lg p-4 rounded-lg ">
          {/* <img src="" alt="pastor rebecca" /> */}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint hic
            nesciunt non suscipit. Asperiores unde ex accusantium quas eaque
            aut? Culpa suscipit nulla rerum, sequi deleniti officiis et
            voluptates earum.
          </p>
        </span>
        <span className="w-fit h-full text-blue-500 shadow-xl p-2 rounded-lg">
          {/* <img src="" alt="pastor rebecca" /> */}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint hic
            nesciunt non suscipit. Asperiores unde ex accusantium quas eaque
            aut? Culpa suscipit nulla rerum, sequi deleniti officiis et
            voluptates earum.
          </p>
        </span>
      </section>

      {/* section showing the founders and alumni pics*/}
    </div>
  );
};

export default About;
