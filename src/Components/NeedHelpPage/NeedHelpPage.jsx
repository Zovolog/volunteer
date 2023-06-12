import { Link } from "react-router-dom";
export function NeedHelpPage() {
  return (
    <div style={{ backgroundColor: "#3A7B44" }}>
      <header className="header-wrapper" style={{ backgroundColor: "#3A7B44" }}>
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
      <div className="page-form">
        <div className="input-block">
          Контакти: <input type="text" placeholder="Контакти..." />
        </div>
        <div className="input-block">
          Ім’я: <input type="text" placeholder="Ім’я..." />
        </div>
        <div className="input-block">
          Email: <input type="text" placeholder="Email..." />
        </div>
        <div className="input-block">
          Телефон: <input type="text" placeholder="Телефон..." />
        </div>
        <div className="input-block">
          Коментар: <input type="text" placeholder="Коментар..." />
        </div>
        <button className="bt-send">Зберегти</button>
      </div>
      <p className="text-center">ЧИМ ВИ МОЖЕТЕ ДОПОМОГТИ?</p>
      <div className="help-block-info">
        <img
          src="/img/Rectangle8.png"
          width="25%"
          style={{ borderRadius: "25px" }}
        />
        <img
          src="/img/Rectangle5.png"
          width="25%"
          style={{ borderRadius: "25px" }}
        />
        <img
          src="/img/Rectangle7.png"
          width="25%"
          style={{ borderRadius: "25px" }}
        />
      </div>
      <div className="txt-info-row">
        <p className="txt-info">Ви можете допомогти фізично</p>
        <p className="txt-info">Ви можете допомогти речами</p>
        <p className="txt-info">Ви можете допомогти фінансово</p>
      </div>
      <footer style={{ backgroundColor: "#3A7B44" }}>
        <div
          className="footer-container"
          style={{ backgroundColor: "#3A7B44" }}
        >
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
