import { Link } from "react-router-dom";
import "./MainPage.css";
export function MainPage() {
  return (
    <div>
      <header className="header-wrapper">
        <Link to="/">
          <img src="/img/logo.png" height="100px" />
        </Link>
        <div className="header-container">
          <Link className="main-page-link" to="/want-help">
            Хочу допомогти!
          </Link>
          <Link className="main-page-link" to="/need-help">
            Потрібна допомога!
          </Link>
          <Link className="main-page-link">Укр/Eng</Link>
        </div>
      </header>
      <div className="main-content">
        <p className="main-text">
          <span
            style={{ marginBottom: "20px", color: "red", fontSize: "32px" }}
          >
            ХТО МИ?{" "}
          </span>{" "}
          <p>
            Привіт, ми волонтерська організація, що займається збором і
            передачею одягу потребуючим. В нас ти можеш поділитися одягом, або
            знайти його для себе та інших людей, яким він необхідний.
            Організація була створена в 2018 року та особливої активносні набула
            в 2022 році. Пам’ятай, що добро починається з тебе!
          </p>
        </p>
        <p className="main-text">
          Засновнецею руху є Нечуй Михайлина. В 2016 році, стурбована питаннями
          екології та соціального становища, вона запустила благодійний
          розпродаж не потрібного одягу. Потім з командою друзів вирішила
          перетворити це на рух, що допоможе іншим. З часом ідея переросла у
          важливе коло добра, підтримки та допомоги.
        </p>
        <img
          src="/img/main-content-img.jpeg"
          style={{ borderRadius: "25px", marginLeft: "100px" }}
          height="75%"
        />
      </div>
      <div className="main-info-block">
        <p className="main-logo-text">Наша діяльність</p>
        <div className="img-row">
          <img
            src="/img/img-1.jpg"
            width="25%"
            style={{ borderRadius: "25px" }}
          />
          <img
            src="/img/img-2.jpg"
            width="25%"
            style={{ borderRadius: "25px" }}
          />
          <img
            src="/img/img-3.jpg"
            width="25%"
            style={{ borderRadius: "25px" }}
          />
        </div>
        <div className="txt-row">
          <p className="txt-row-text">
            Спочатку відбувається процес збору одягу. Його сортують, за
            необхідності перуть та ремонтують. Сортування відбувається
            відповідно до сезонності, розміру та віку, якщо це дитячий одяг. Тут
            можна здати власний одяг, або одяг знайомих
          </p>
          <p className="txt-row-text">
            Після цього одяг проходе належну перевірку та відправляється до
            відповідних місць зберігання. Далі всі, хто потребує певних речей
            звертаються до волонтерів, ті видають одяг. Тут можна взяти одяг для
            себе, або члелів родити чи друзів.
          </p>
          <p className="txt-row-text">
            Важливе прохання, приносити одяг в належному стані, щоб не
            ускладнювати роботу волонтерів, або зазначити, що речі потребують
            прання чи ремонту. За допомогою може звернутися будь-хто, кому вона
            дійсно потрібна
          </p>
        </div>
      </div>
      <div className="result-block">
        <p className="result-text">
          <span style={{ fontSize: "24px" }}>ЩО МИ ВЖЕ ЗРОБИЛИ ?</span>
          <p style={{ marginTop: "30px" }}>
            За 5 років існування організації ми допомогли більше ніж 55000
            людей, більше 15 000 змогли підготуватися до холодниої пори року,
            знайти необхідний одяг і підтримку. Допомогли екології, зменшивши
            кількість викидів. За період 2022-2023 року ми вдягнули більше ніж
            30000 тисячам переселенців та інших жителів, що постраждали від
            війни. Також передали не одну тисячу військового одягу та
            спорядження. Більше 30 успішних проектів, що відрізнялися сезонністю
            та потребами. Тисячі щасливих і заспокоєних людей і добро в кожні
            руки.
          </p>
        </p>
      </div>
      <footer>
        <div className="footer-container">
          <div>
            <ul className="list-hours">
              <li>
                {" "}
                <img src="/img/TG.png" height="30px" />
                TG:@dobroinUA
              </li>
              <li>
                <img src="/img/INST.png" height="30px" />
                instagram:@dobroinUA
              </li>
              <li>
                <img src="/img/LOC.png" height="30px" />
                Офіс:м. Львів, вул. Героїв УПА, 73, 7 корпус, 7 поверх
              </li>
              <li>
                <img src="/img/LOC.png" height="30px" />
                Офіс:м. Львів, вул. Героїв УПА, 73, 7 корпус, 7 поверх
              </li>
              <li>
                <img src="/img/TEL.png" height="30px" />
                <ul className="list-hours">
                  <li>ТЕЛЕФОНИ:</li>
                  <li>+38(095)578-90-60</li>
                  <li>+38(063)466-66-54</li>
                  <li>+38(063)466-66-54</li>
                </ul>
              </li>
            </ul>
          </div>
          <div>
            <ul className="list-hours">
              <li>РЕЖИМ РОБОТИ:</li>
              <li>Пн-Пт з 9:00 до 17:00</li>
              <li>Сб, Нд - вихідні</li>
            </ul>
          </div>
          <div style={{ display: "flex" }}>
            <span className="list-hours" style={{ marginRight: "20px" }}>
              Поширити у соц мережах:{" "}
            </span>
            <ul>
              <li>
                <img src="/img/INST.png" height="20px" />
              </li>
              <li style={{ marginTop: "20px" }}>
                <img src="/img/TG.png" height="20px" />
              </li>
              <li style={{ marginTop: "20px" }}>
                <img src="/img/YT.png" height="20px" />
              </li>
              <li style={{ marginTop: "20px" }}>
                <img src="/img/FC.png" height="20px" />
              </li>
              <li style={{ marginTop: "20px" }}>
                <img src="/img/SMS.png" height="20px" />
              </li>
            </ul>
          </div>
        </div>
        <p
          className="list-hours"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: "20px",
          }}
        >
          ПІДПИСКА НА РОЗСИЛКУ:
          <img src="/img/MAIL.png" />
        </p>
      </footer>
    </div>
  );
}
