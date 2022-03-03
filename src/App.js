import "./App.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper";
import { useEffect, useState } from "react";
function App() {
  const [windowDimenion, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  });

  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);

    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimenion]);

  const slidesPerView =
    windowDimenion.winWidth > 1200 ? 3 : windowDimenion.winWidth > 1000 ? 2 : 1;
  return (
    <div className="App">
      <header className="fixed-top">
        <nav className="navbar navbar-expand-lg  navbar-dark bg-dark ">
          <a className="navbar-brand" href="#0">
            Logo
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ml-auto ">
              <li className="nav-item">
                <a className="nav-link" href="#main">
                  Головна Сторінка
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#mainThing">
                  Що зараз найголовніше{" "}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  Про нас
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#whatDo">
                  Що ми робимо
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#gallery">
                  Галерея
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contacts">
                  Контакти
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <section id="main" className="main main__backgroundImage">
        <div class="container container__main">
          <div class="row ">
            <h1 class=" offset-sm-2 col-sm-8 ">Готовий змінювати світ?</h1>
            <h3 class=" offset-sm-1 col-sm-10 pt-3">
              Ми віримо, що добра дія має велику силу та прагнемо дати
              можливість кожному відчути її змінотворчий ефект
            </h3>
            <div class="row col-12 pt-5">
              <div class=" col-sm-6 pt-3">
                <button type="button" class="btn btn-warning btn-lg">
                  Хочу волонтерити!
                </button>
              </div>
              <div class=" col-sm-6 pt-3">
                <button type="button" class="btn btn-warning btn-lg">
                  Шукаю волонтерів
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="mainThing" className="main mainThing__backgroundImage">
        <div class="container  text-left ">
          <div class="row mainThing_content">
            <h2 class="  col-sm-12 ">Допомагай тим, що найкраще вмієш</h2>
            <div class="  col-sm-12 pt-3">
              ❗️ У зв'язку з російським вторгненням в Україні ми в ручному
              режимі координуємо всіх волонтерів. Після заповнення анкети тобі
              напишуть наші координатор(к)и, щоб зорієнтувати з наступних
              кроків.
            </div>
            <div class=" row col-12 pt-5">
              <div class=" col-sm-6 pt-3">
                <button type="button" class="btn btn-warning btn-lg">
                  Стати волонтером
                </button>
              </div>
              <div class=" col-sm-6 pt-3">
                <button type="button" class="btn btn-warning btn-lg">
                  Прес реліз УВС
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="about">
        <div className="container">
          <h1 className="pt-5">Українська Волонтерська Служба</h1>
          <h5 className="pt-3">
            Неприбуткова організація, місією якої є формування культури
            волонтерства та взаємодопомоги в Україні.
          </h5>
          <div className="row">
            <img
              src="https://lh3.googleusercontent.com/3n2aDuS9O8yYlhqNKrBu4MA0u4VAWaQII-ylrlL9bTOyE7-0FDMRKb3Q_t-gQIPIBF4_HYS6JrWk8ioL_m4O6cfBUXBfwRZNwQwzDfA"
              className="img-fluid col-lg-6 col-sm-12 pt-5"
              alt="Responsive image2"
            />
            <div className="col-lg-6 col-sm-12">
              <h1 className="pt-4">Чому саме волонтерство?</h1>
              <div className="text-left">
                <div className="pt-4">
                  Ми хочемо жити в успішній країні. А країну визначають люди.
                  Коли кожен небайдуже ставиться до свого оточення і вирішує
                  проблеми, які турбують, країна розвивається.
                </div>
                <div className="pt-4">
                  Волонтери — це звичайні люди, які вкладають свій час, талант
                  чи ресурси у втілення соціально корисних проєктів. Робити
                  добрі справи можуть усі: діти, дорослі, люди з підвищенними
                  потребами, компанії, агенції і навіть цілі країни.
                </div>
                <div className="pt-4">
                  Навіть одна добра справа здатна змінити суспільство, країну та
                  світ на краще.
                </div>
                <div className="pt-4">
                  На сьогодні волонтерські організації існують у 80-ти країнах
                  світу. Близько 110 мільйонів людей щорічно беруть участь у
                  добровільних програмах, де допомагають у сферах освіти,
                  охорони здоров'я, екології, соціального захисту та багатьох
                  інших.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="whatDo" className="container">
        <h1 className="pt-5">Що ми робимо?</h1>
        <div className="row col-12 text-left">
          <div className="col-sm-12 col-lg-4 ">
            <img
              src="https://cdn-icons-png.flaticon.com/512/6982/6982663.png"
              className=" pt-5"
              alt="Responsive image2"
              style={{ maxWidth: "150px", height: "150px" }}
            />
            <h4 className="pt-3">Допомагаємо творити добро</h4>
            <div className="pt-3">
              Пов'язуємо волонтерів із тими, хто потребує допомоги.
            </div>
          </div>
          <div className="col-sm-12 col-lg-4 ">
            <img
              src="https://cdn-icons-png.flaticon.com/512/6982/6982663.png"
              className=" pt-5"
              alt="Responsive image2"
              style={{ maxWidth: "150px", height: "150px" }}
            />
            <h4 className="pt-3">Допомагаємо творити добро</h4>
            <div className="pt-3">
              Пов'язуємо волонтерів із тими, хто потребує допомоги.
            </div>
          </div>
          <div className="col-sm-12 col-lg-4 ">
            <img
              src="https://cdn-icons-png.flaticon.com/512/6982/6982663.png"
              className=" pt-5"
              alt="Responsive image2"
              style={{ maxWidth: "150px", height: "150px" }}
            />
            <h4 className="pt-3">Допомагаємо творити добро</h4>
            <div className="pt-3">
              Пов'язуємо волонтерів із тими, хто потребує допомоги.
            </div>
          </div>
          <div className="col-sm-12 col-lg-4 ">
            <img
              src="https://cdn-icons-png.flaticon.com/512/6982/6982663.png"
              className=" pt-5"
              alt="Responsive image2"
              style={{ maxWidth: "150px", height: "150px" }}
            />
            <h4 className="pt-3">Допомагаємо творити добро</h4>
            <div className="pt-3">
              Пов'язуємо волонтерів із тими, хто потребує допомоги.
            </div>
          </div>
          <div className="col-sm-12 col-lg-4 ">
            <img
              src="https://cdn-icons-png.flaticon.com/512/6982/6982663.png"
              className=" pt-5"
              alt="Responsive image2"
              style={{ maxWidth: "150px", height: "150px" }}
            />
            <h4 className="pt-3">Допомагаємо творити добро</h4>
            <div className="pt-3">
              Пов'язуємо волонтерів із тими, хто потребує допомоги.
            </div>
          </div>
          <div className="col-sm-12 col-lg-4 ">
            <img
              src="https://cdn-icons-png.flaticon.com/512/6982/6982663.png"
              className=" pt-5"
              alt="Responsive image2"
              style={{ maxWidth: "150px", height: "150px" }}
            />
            <h4 className="pt-3">Допомагаємо творити добро</h4>
            <div className="pt-3">
              Пов'язуємо волонтерів із тими, хто потребує допомоги.
            </div>
          </div>
        </div>
      </section>
      <section id="gallery" className="mt-5">
        <h1 className="pt-3 pb-3">
          Фото галерея того, що ми вже встигли зробити.
        </h1>
        <Swiper
          watchSlidesProgress={true}
          slidesPerView={slidesPerView}
          className="mySwiper"
          autoplay={{
            delay: 2000,
          }}
          spaceBetween={0}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            {" "}
            <img
              src="https://media.istockphoto.com/photos/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-picture-id1093110112?k=20&m=1093110112&s=612x612&w=0&h=3OhKOpvzOSJgwThQmGhshfOnZTvMExZX2R91jNNStBY="
              alt="Responsive image2"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src="https://lh3.googleusercontent.com/3n2aDuS9O8yYlhqNKrBu4MA0u4VAWaQII-ylrlL9bTOyE7-0FDMRKb3Q_t-gQIPIBF4_HYS6JrWk8ioL_m4O6cfBUXBfwRZNwQwzDfA"
              alt="Responsive image2"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src="https://lh3.googleusercontent.com/3n2aDuS9O8yYlhqNKrBu4MA0u4VAWaQII-ylrlL9bTOyE7-0FDMRKb3Q_t-gQIPIBF4_HYS6JrWk8ioL_m4O6cfBUXBfwRZNwQwzDfA"
              alt="Responsive image2"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src="https://lh3.googleusercontent.com/3n2aDuS9O8yYlhqNKrBu4MA0u4VAWaQII-ylrlL9bTOyE7-0FDMRKb3Q_t-gQIPIBF4_HYS6JrWk8ioL_m4O6cfBUXBfwRZNwQwzDfA"
              alt="Responsive image2"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src="https://lh3.googleusercontent.com/3n2aDuS9O8yYlhqNKrBu4MA0u4VAWaQII-ylrlL9bTOyE7-0FDMRKb3Q_t-gQIPIBF4_HYS6JrWk8ioL_m4O6cfBUXBfwRZNwQwzDfA"
              alt="Responsive image2"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src="https://lh3.googleusercontent.com/3n2aDuS9O8yYlhqNKrBu4MA0u4VAWaQII-ylrlL9bTOyE7-0FDMRKb3Q_t-gQIPIBF4_HYS6JrWk8ioL_m4O6cfBUXBfwRZNwQwzDfA"
              alt="Responsive image2"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src="https://lh3.googleusercontent.com/3n2aDuS9O8yYlhqNKrBu4MA0u4VAWaQII-ylrlL9bTOyE7-0FDMRKb3Q_t-gQIPIBF4_HYS6JrWk8ioL_m4O6cfBUXBfwRZNwQwzDfA"
              alt="Responsive image2"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src="https://lh3.googleusercontent.com/3n2aDuS9O8yYlhqNKrBu4MA0u4VAWaQII-ylrlL9bTOyE7-0FDMRKb3Q_t-gQIPIBF4_HYS6JrWk8ioL_m4O6cfBUXBfwRZNwQwzDfA"
              alt="Responsive image2"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src="https://lh3.googleusercontent.com/3n2aDuS9O8yYlhqNKrBu4MA0u4VAWaQII-ylrlL9bTOyE7-0FDMRKb3Q_t-gQIPIBF4_HYS6JrWk8ioL_m4O6cfBUXBfwRZNwQwzDfA"
              alt="Responsive image2"
            />
          </SwiperSlide>
        </Swiper>
      </section>

      <footer id="contacts" class="page-footer font-small pt-3 mt-1">
        <div class="container-fluid text-center text-md-left">
          <div class="row">
            <div class="col-md-6 mt-md-0 mt-3">
              <h5 class="text-uppercase">Волонтери</h5>
              <p>
                Інформація про організацію. Інформація про організацію.
                Інформація про організацію. Інформація про організацію.
                Інформація про організацію.
              </p>
            </div>

            <div class="col-md-3 mb-md-0 mb-3">
              <h5 class="text-uppercase">Посилання</h5>

              <ul className="navbar-nav ml-auto ">
                <li className="nav-item">
                  <a className="nav-link" href="#main">
                    Головна Сторінка
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#mainThing">
                    Що зараз найголовніше{" "}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    Про нас
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#whatDo">
                    Що ми робимо
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#gallery">
                    Галерея
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contacts">
                    Контакти
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 class="text-uppercase font-weight-bold">Контаки</h6>
              <p>
                <i class="fas fa-home "></i> New York, NY 10012, US
              </p>
              <p>
                <i class="fas fa-envelope"></i> info@example.com
              </p>
              <p>
                <i class="fas fa-phone "></i> + 01 234 567 88
              </p>
              <p>
                <i class="fas fa-print "></i> + 01 234 567 89
              </p>
            </div>
          </div>
        </div>

        <div class="footer-copyright text-center py-3">
          Розроблено за допомогою небайдужого громадянина.
        </div>
      </footer>
    </div>
  );
}

export default App;
