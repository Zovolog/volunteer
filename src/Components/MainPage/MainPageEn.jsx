import { Link } from "react-router-dom";
import "./MainPage.css";
export function MainPageEn() {
  return (
    <div>
      <header className="header-wrapper">
        <Link to="/">
          <img src="/img/logo.png" height="100px" />
        </Link>
        <div className="header-container">
          <Link className="main-page-link" to="/want-helpEn">
            Want help!
          </Link>
          <Link className="main-page-link" to="/need-helpEn">
            Need help!
          </Link>
          <Link className="main-page-link" to="/">Укр/Eng</Link>
        </div>
      </header>
      <div className="main-content">
        <p className="main-text">
          <span
            style={{ marginBottom: "20px", color: "red", fontSize: "32px" }}
          >
            WHO WE ARE?{" "}
          </span>{" "}
          <p>
          Hello, we are a volunteer organization that collects and
            by donating clothes to the needy. You can share clothes with us, or
            find it for yourself and other people who need it.
            The organization was created in 2018 and has gained particular activity
            in 2022. Remember that goodness begins with you!</p>
        </p>
        <p className="main-text">
        The founder of the movement is Mykhailyna Nechuy. In 2016, worried about questions
          ecology and social situation, she launched a charity
          sale of unwanted clothes. Then I decided with a team of friends
          turn it into a movement that will help others. Over time, the idea grew into
          an important circle of goodness, support and help.
        </p>
        <img
          src="/img/main-content-img.jpeg"
          style={{ borderRadius: "25px", marginLeft: "100px" }}
          height="75%"
        />
      </div>
      <div className="main-info-block">
        <p className="main-logo-text">Our activity</p>
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
          First, there is a process of collecting clothes. It is sorted, by
            washed and repaired if necessary. Sorting is in progress
            according to seasonality, size and age if it is children's clothing. Here
            you can hand in your own clothes or those of friends
          </p>
          <p className="txt-row-text">
          After that, the clothes undergo a proper inspection and are sent to
            appropriate storage locations. Next, everyone who needs certain things
            turn to volunteers, they give out clothes. Here you can take clothes for
            himself, or family members or friends.
          </p>
          <p className="txt-row-text">
          It is an important request to bring clothes in good condition so that no
            to complicate the work of volunteers, or to indicate that things are needed
            washing or repairing. Anyone who needs it can ask for help
            really needed
          </p>
        </div>
      </div>
      <div className="result-block">
        <p className="result-text">
          <span style={{ fontSize: "24px" }}>WHAT HAVE WE ALREADY DONE?</span>
          <p style={{ marginTop: "30px" }}>
          Over the 5 years of the organization's existence, we have helped more than 55,000
            people, more than 15,000 were able to prepare for the cold season,
            find the necessary clothing and support. Helped the environment by reducing
            number of emissions. For the period of 2022-2023, we put on more than
            30,000 thousand displaced persons and other residents affected by
            war They also handed over more than one thousand military clothes and
            equipment. More than 30 successful projects that differed in seasonality
            and needs. Thousands of happy and calm people and good in everyone
            hands
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
