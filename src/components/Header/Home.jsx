import React from "react";

const Home = () => {
  return (
    <section>
      {/* Start Carousel */}
      <div className="w-full h-screen carousel ">
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <img src="../../../public/header-img/1.png" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <div className="flex-col justify-center items-center text-white text-center w-3/4">
                <h1 className="text-2xl md:text-7xl uppercase font-bold mb-5">
                  The Biggest{" "}
                  <span className="text-indigo-700">Movie Platform</span>
                </h1>
                <p className="text-base md:text-xl leading-10 mb-5">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Pariatur aut explicabo quia iste molestiae officia, minima
                  eveniet nam dolores <br /> accusamus beatae necessitatibus
                  earum vitae quaerat vero cumque laboriosam fugit sed?
                </p>
                <div className="flex flex-wrap gap-4 justify-center ">
                  <button className="btn-secondary">Movies</button>
                  <button className="btn-outline">Learn More</button>
                </div>
              </div>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src="../../../public/header-img/2.png" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <div className="flex-col justify-center items-center text-white text-center w-3/4">
                <h1 className="text-2xl md:text-7xl uppercase font-bold mb-5">
                  The Biggest{" "}
                  <span className="text-indigo-700">Movie Platform</span>
                </h1>
                <p className="text-base md:text-xl leading-10 mb-5">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Pariatur aut explicabo quia iste molestiae officia, minima
                  eveniet nam dolores <br /> accusamus beatae necessitatibus
                  earum vitae quaerat vero cumque laboriosam fugit sed?
                </p>
                <div className="flex flex-wrap gap-4 justify-center ">
                  <button className="btn-secondary">Movies</button>
                  <button className="btn-outline">Learn More</button>
                </div>
              </div>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src="../../../public/header-img/3.png" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <div className="flex-col justify-center items-center text-white text-center w-3/4">
                <h1 className="text-2xl md:text-7xl uppercase font-bold mb-5">
                  The Biggest{" "}
                  <span className="text-indigo-700">Movie Platform</span>
                </h1>
                <p className="text-base md:text-xl leading-10 mb-5">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Pariatur aut explicabo quia iste molestiae officia, minima
                  eveniet nam dolores <br /> accusamus beatae necessitatibus
                  earum vitae quaerat vero cumque laboriosam fugit sed?
                </p>
                <div className="flex flex-wrap gap-4 justify-center ">
                  <button className="btn-secondary">Movies</button>
                  <button className="btn-outline">Learn More</button>
                </div>
              </div>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img src="../../../public/header-img/1.png" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <div className="flex-col justify-center items-center text-white text-center w-3/4">
                <h1 className="text-2xl md:text-7xl uppercase font-bold mb-5">
                  The Biggest{" "}
                  <span className="text-indigo-700">Movie Platform</span>
                </h1>
                <p className="text-base md:text-xl leading-10 mb-5">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Pariatur aut explicabo quia iste molestiae officia, minima
                  eveniet nam dolores <br /> accusamus beatae necessitatibus
                  earum vitae quaerat vero cumque laboriosam fugit sed?
                </p>
                <div className="flex flex-wrap gap-4 justify-center ">
                  <button className="btn-secondary">Movies</button>
                  <button className="btn-outline">Learn More</button>
                </div>
              </div>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* End Carousel */}
    </section>
  );
};

export default Home;
