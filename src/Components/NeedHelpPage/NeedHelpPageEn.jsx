import { Link } from "react-router-dom";
export function NeedHelpPageEn() {
  return (
    <div style={{ backgroundColor: "#3A7B44" }}>
      <header className="header-wrapper" style={{ backgroundColor: "#3A7B44" }}>
        <Link to="/en">
          <img src="/img/logo.png" height="100px" />
        </Link>
        <div className="header-container">
          <Link className="main-page-link" to="/want-helpEn">
            Want help!
          </Link>
          <Link className="main-page-link" to="/need-helpEn">
            Need help!
          </Link>
          <Link className="main-page-link" to="/want-help">Укр/Eng</Link>
        </div>
      </header>
      <div className="page-form">
      <div className="input-block">
          Contacts: <input type="text" placeholder="Adres and other..." />
        </div>
        <div className="input-block">
          Name: <input type="text" placeholder="John..." />
        </div>
        <div className="input-block">
          Email: <input type="text" placeholder="Email..." />
        </div>
        <div className="input-block">
          Phone: <input type="text" placeholder="+38 (099) 9..." />
        </div>
        <div className="input-block">
          Comment: <input type="text" placeholder="I need a..." />
        </div>
        <button className="bt-send"><Link to="/en">Save</Link></button>
      </div>
      <p className="text-center">HOW CAN YOU HELP?</p>
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
        <p className="txt-info">You can help physically</p>
        <p className="txt-info">You can help with clothes</p>
        <p className="txt-info">You can help with money</p>
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
                Office: Lviv city, UPA Heroes st., 73, 7 corp., 7 flour
              </li>
              <li>
                <img src="/img/LOC.png" height="30px" />
                Office: Lviv city, UPA Heroes st., 73, 7 corp., 7 flour
              </li>
              <li>
                <img src="/img/TEL.png" height="30px" />
                <ul className="list-hours">
                  <li>PHONES:</li>
                  <li>+38(095)578-90-60</li>
                  <li>+38(063)466-66-54</li>
                  <li>+38(063)466-66-54</li>
                </ul>
              </li>
            </ul>
          </div>
          <div>
            <ul className="list-hours">
              <li>WORKS:</li>
              <li>Mon-Fri grom 9:00 AM to 5:00 PM</li>
              <li>Sut,Sun - weekend</li>
            </ul>
          </div>
          <div style={{ display: "flex" }}>
            <span className="list-hours" style={{ marginRight: "20px" }}>
              Share:{" "}
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
          NEWSLETTER SUBSCRIPTION:
          <img src="/img/MAIL.png" />
        </p>
      </footer>
    </div>
  );
}
