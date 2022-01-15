import React from "react";
import { Link } from "react-router-dom";

import logo from "../img/footer-brand-logo.png";
import send from "../img/send.png";
import telegram from "../img/svgicons/telegram.svg";
import twitter from "../img/twitter.png";
import insta from "../img/insta.png";
import youtube from "../img/youtube.png";
import headerLogo from "../img/header-brand-logo.png";
import linkedIn from "../img/linkedin.png";

import down from "../img/arrow-down.png";
import up from "../img/up.png";
import menuIcon from "../img/menu.png";

export default class CookiePolicy extends React.Component {
  constructor() {
    super();
    this.state = {
      menu: false,
      subMenu1: false,
      subMenu2: false,
      subMenu3: false,
      community: false,
      developers: false,
      individuals: false,
    };
    this.handleMenu = this.handleMenu.bind(this);
    this.subMenu1 = this.subMenu1.bind(this);
    this.subMenu2 = this.subMenu2.bind(this);
    this.subMenu3 = this.subMenu3.bind(this);
    this.community = this.community.bind(this);
    this.developers = this.developers.bind(this);
    this.individuals = this.individuals.bind(this);
  }

  handleMenu() {
    this.setState({ menu: !this.state.menu });
    console.log("menu-cliccked");
  }

  subMenu1() {
    this.setState({ subMenu1: !this.state.subMenu1 });
  }

  subMenu2() {
    this.setState({ subMenu2: !this.state.subMenu2 });
  }

  subMenu3() {
    this.setState({ subMenu3: !this.state.subMenu3 });
  }

  community() {
    this.setState({ community: !this.state.community });
    this.setState({ developers: false });
    this.setState({ individuals: false });
  }

  developers() {
    this.setState({ developers: !this.state.developers });
    this.setState({ community: false });
    this.setState({ individuals: false });
  }

  individuals() {
    this.setState({ individuals: !this.state.individuals });
    this.setState({ developers: false });
    this.setState({ community: false });
  }

  render() {
    return (
      <div>
        <div className="cookie">
          <div className="header">
            <div className="container">
              <Link to="/" className="l-div">
                <img alt="asdfd" src={headerLogo} />
                <span>Vangold</span>
              </Link>

              <div className="r-div">
                <Link className="a1" to="/about">
                  About
                </Link>
                <div className="link-wrap">
                  <span onClick={this.community} className="a1">
                    Community
                  </span>
                  {this.state.community ? (
                    <div className="link-menu">
                      <a href="https://drive.google.com/file/d/1RnIm59CoclsjOOtYGOBii8aZ_2TL3w_x/view?usp=drivesdk">
                        Whitepaper
                      </a>
                      <Link to="/roadmap">Roadmap</Link>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="link-wrap doc-menu">
                  <span onClick={this.developers} className="a1">
                    Documentation
                  </span>

                  {this.state.developers ? (
                    <div className="link-menu  doc-menu">
                      <a href="https://t.me/vangoldtoken1">Telegram</a>
                      <a href="https://twitter.com/vangoldfinance">Twitter</a>
                      <a href="https://www.reddit.com/user/vangoldtoken">
                        Reddit
                      </a>
                      <a href="https://discord.gg/s3vVfBEFrc">Discord</a>
                      <a href="https://www.youtube.com/channel/UCpRE6nyI3DVxIYz6uDBJwkw">
                        Youtube
                      </a>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="link-wrap">
                  <span onClick={this.individuals} className="a1">
                    Markets
                  </span>
                  {this.state.individuals ? (
                    <div className="link-menu markets">
                      <a
                        href="https://vangoldswap.finance/"
                        className="stake-p"
                      >
                        Stake & Farm
                      </a>
                      <a href="https://pancakeswap.finance/swap?outputCurrency=0x487ecd4cFa635D1a9409E86Cd22d33d5abEb7b44">
                        Buy VGD
                      </a>
                      {/* <Link to="/terms">Terms</Link>
                      <Link to="/cookie-policy">Cookie Policy</Link>
                      <Link to="/landing-page">Landing Page</Link>
                      <Link to="/privacy-policy">Privacy Policy</Link> */}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <a className="a1" href="mailto:vangoldtoken@vangold.finance">
                  Contact
                </a>
                <a href="https://t.me/vangoldtoken1" className="join-btn">
                  Join the Network
                </a>
              </div>
            </div>
          </div>

          <div className="sub-heading">
            <div className="contain">
              <h1>Cookie Policy</h1>
            </div>
          </div>
          <div className="sec1">
            <h2>Introduction</h2>
            <p>
              Like most websites, we may use “cookies” or similar technologies.
              This Cookie Policy describes the use of cookies and similar
              technologies on website www.vangoldservices.com.
            </p>
            <p>
              When you first visit website in a certain jurisdiction, you will
              be notified that cookies and similar technologies are being used.
              By continuing to browse the site, you confirm that you understand
              and agree to the use of this technology, as described in this
              Cookie Policy.
            </p>
            <p>
              You don’t have to to accept cookies and the consent can be revoked
              at any time. You can reject or limit cookies by changing your
              browser settings, and you can delete them at any time after they
              are placed on your device. If you do not accept or delete cookies,
              parts of the site you open may take longer or may not function as
              expected.
            </p>

            <h3>WHAT IS A COOKIE</h3>
            <p>
              Cookies are small files that contain a sequence of characters that
              can be stored on your computer or mobile device when you visit a
              website. Cookies allow us to identify your browser when you visit
              the site again. Cookies may store your preferences and other
              information, but they cannot read data off your ha rd drive or
              read cookies created by other websites.
            </p>
            <p>
              We may use cookies to provide you with content tailored to your
              interests. We use the information collected through cookies to
              statistically analyze the use of our site and to improve and
              modify our content and other offerings.
            </p>

            <h3>HOW DO WE USE COOKIES?</h3>
            <p>
              The following explains information on how we use the different
              categories of cookies and the options to manage your settings for
              the data these technologies collect.
            </p>

            <p>
              Necessary Cookies: These cookies are used to provide users with
              services provided through the website, and to use some of its
              features ,such as login and access to secure areas, providing
              pop-up notifications, and accept languages upon from sign up
              forms. These cookies are essential for the use and navigation of
              the site. Without them, the main features of our site will not
              work. These cookies are essential to provide the basic services of
              our site and cannot be rejected.
            </p>
            <p>
              Functionality Cookies: These cookies are used to remember certain
              choices made by the user (e.g. user name, user language or
              country/region, etc.) and to provide these users with enhanced
              personalized functionality based on this information.
            </p>
            <p>
              Performance Analytics cookies: These cookies are used to identify
              and count the number of visitors to our website, collect
              statistics about how visitors move around the site (including no.
              of page views and time spent per page) and conversion tracking.
              This can improve website performance and improve user experience.
              For example, these cookies allow users to easily find the
              information they need.
            </p>
            <p>
              Advertising Cookies (Ad Cookies): These cookies are used to
              display advertisements relevant to you.
            </p>
            <p>
              Cookies used to integrate third party services: These cookies are
              used to incorporate third party features such as videos, maps or
              social media plugins into the site.
            </p>

            <h3>HOW TO CONTROL COOKIES</h3>
            <p>
              Most browsers accept cookies by default. If you wish, you can
              disable cookies or configure your browser to be notified when a
              cookie is saved. If you disable cookies or refuse a site's request
              to set cookies, some parts of this site may not function properly
              or may not work at all.
            </p>
            <p>
              For more information on cookies, please visit
              www.aboutcookies.org.
            </p>

            <h3>CONTACT US</h3>
            <p>
              If you have any questions or concerns, please contact us at
              support@vangoldservices.com.
            </p>
          </div>

          <div className="footer">
            <div className="container">
              <div className="col1">
                <Link to="/" className="brand-wrap">
                  <img alt="asdfd" className="brand-img" src={logo} />
                  <span>Vangold</span>
                </Link>

                <p className="p1">Copyright © 2021 Vangold Finance.</p>
                <p className="p2">All rights reserved</p>
                <div className="socials">
                  <a
                    href="https://instagram.com/vangoldfinance?r=nametag"
                    className="circle"
                  >
                    <img alt="asdfd" src={insta} />
                  </a>
                  <a target="_blank" rel="noreferrer" className="circle" href="https://t.me/vangoldtoken1">
                    <img src={telegram} className="telegram" />
                  </a>
                  <a
                    href="https://twitter.com/vangoldfinance"
                    className="circle"
                  >
                    <img alt="asdfd" src={twitter} />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/vangold-finance"
                    className="circle"
                  >
                    <img alt="asdfd" src={linkedIn} />
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCpRE6nyI3DVxIYz6uDBJwkw"
                    className="circle"
                  >
                    <img alt="asdfd" src={youtube} />
                  </a>
                </div>
              </div>
              <div className="col2">
                <h6>Company</h6>
                <div className="links">
                  <Link to="/about">About us</Link>
                  <a href="https://vangoldfinance.medium.com/">Blog</a>
                  <Link to="/contact-us">Contact us</Link>
                  <a href="https://drive.google.com/file/d/1RnIm59CoclsjOOtYGOBii8aZ_2TL3w_x/view?usp=drivesdk">
                        Whitepaper
                      </a>
                  
                </div>
              </div>
              <div className="col3">
                <h6>Support</h6>
                <div className="links">
                  <a href="Mailto:vangoldtoken@vangold.finance">Help center</a>
                  <Link to="/terms">Terms of service</Link>
                  <Link to="/cookie-policy">Cookie Policy</Link>
                  <Link to="/privacy-policy">Privacy policy</Link>
                </div>
              </div>
              <div className="col4">
                <h6>Stay up to date</h6>
                <label htmlFor="email" className="e-input">
                  <input
                    id="email"
                    type="text"
                    placeholder="Your email address"
                  />
                  <img alt="asdfd" src={send} />
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="cookie-mobile">
          <div className="header">
            <div className="container">
              <Link to="/" className="l-div">
                <img alt="asdfd" src={headerLogo} />
                <span>Vangold</span>
              </Link>
              <div className="r-div">
                <a href="https://t.me/vangoldtoken1" className="join-btn">
                  Join the Network
                </a>
                <img alt="asdfd" onClick={this.handleMenu} src={menuIcon} />
              </div>
            </div>
          </div>

          {this.state.menu === true ? (
            <div className="menu">
              <div className="menu-wrap">
                <Link className="a1" to="/about">
                  About
                </Link>
                <div onClick={() => this.subMenu1()} className="menu-head">
                  {" "}
                  <p>Community</p>
                  {this.state.subMenu1 === true ? (
                    <img alt="asdfd" src={up} />
                  ) : (
                    <img alt="asdfd" src={down} />
                  )}
                </div>
                {this.state.subMenu1 === true ? (
                  <div className="menu-items">
                    <a href="https://t.me/vangoldtoken1">Telegram</a>
                    <a href="https://twitter.com/vangoldfinance">Twitter</a>
                    <a href="https://www.reddit.com/user/vangoldtoken">
                      Reddit
                    </a>
                    <a href="https://discord.gg/s3vVfBEFrc">Discord</a>
                    <a href="https://www.youtube.com/channel/UCpRE6nyI3DVxIYz6uDBJwkw">
                      Youtube
                    </a>
                  </div>
                ) : (
                  ""
                )}

                <div onClick={() => this.subMenu2()} className="menu-head">
                  <p>Documentation</p>
                  {this.state.subMenu2 === true ? (
                    <img alt="asdfd" src={up} />
                  ) : (
                    <img alt="asdfd" src={down} />
                  )}
                </div>
                {this.state.subMenu2 === true ? (
                  <div className="menu-items doc-menu">
                    <a href="https://drive.google.com/file/d/1RnIm59CoclsjOOtYGOBii8aZ_2TL3w_x/view?usp=drivesdk">
                      Whitepaper
                    </a>
                    <Link to="/roadmap">Roadmap</Link>
                  </div>
                ) : (
                  ""
                )}
                <div onClick={() => this.subMenu3()} className="menu-head">
                  <p>Markets</p>
                  {this.state.subMenu3 === true ? (
                    <img alt="asdfd" src={up} />
                  ) : (
                    <img alt="asdfd" src={down} />
                  )}
                </div>
                {this.state.subMenu3 === true ? (
                  <div className="menu-items">
                    <a href="https://vangoldswap.finance/">Stake & Farm</a>
                    <a href="https://pancakeswap.finance/swap?outputCurrency=0x487ecd4cFa635D1a9409E86Cd22d33d5abEb7b44">
                      Buy VGD
                    </a>
                    {/* <Link to="/terms">Terms</Link>
                      <Link to="/cookie-policy">Cookie Policy</Link>
                      <Link to="/landing-page">Landing Page</Link>
                      <Link to="/privacy-policy">Privacy Policy</Link> */}
                  </div>
                ) : (
                  ""
                )}
                <a className="a1" href="mailto:vangoldtoken@vangold.finance">
                  Contact{" "}
                </a>
                <button>Create Account</button>
              </div>
            </div>
          ) : (
            <div>
              <div className="main-content">
                <div className="container ">
                  <div className="sub-heading">
                    <h1>Cookie Policy</h1>
                  </div>
                </div>
                <div className="sec1">
                  <h2>Introduction</h2>
                  <p>
                    Like most websites, we may use “cookies” or similar
                    technologies. This Cookie Policy describes the use of
                    cookies and similar technologies on website
                    www.vangoldservices.com.
                  </p>
                  <p>
                    When you first visit website in a certain jurisdiction, you
                    will be notified that cookies and similar technologies are
                    being used. By continuing to browse the site, you confirm
                    that you understand and agree to the use of this technology,
                    as described in this Cookie Policy.
                  </p>
                  <p>
                    You don’t have to to accept cookies and the consent can be
                    revoked at any time. You can reject or limit cookies by
                    changing your browser settings, and you can delete them at
                    any time after they are placed on your device. If you do not
                    accept or delete cookies, parts of the site you open may
                    take longer or may not function as expected.
                  </p>

                  <h3>WHAT IS A COOKIE</h3>
                  <p>
                    Cookies are small files that contain a sequence of
                    characters that can be stored on your computer or mobile
                    device when you visit a website. Cookies allow us to
                    identify your browser when you visit the site again. Cookies
                    may store your preferences and other information, but they
                    cannot read data off your ha rd drive or read cookies
                    created by other websites.
                  </p>
                  <p>
                    We may use cookies to provide you with content tailored to
                    your interests. We use the information collected through
                    cookies to statistically analyze the use of our site and to
                    improve and modify our content and other offerings.
                  </p>

                  <h3>HOW DO WE USE COOKIES?</h3>
                  <p>
                    The following explains information on how we use the
                    different categories of cookies and the options to manage
                    your settings for the data these technologies collect.
                  </p>

                  <p>
                    Necessary Cookies: These cookies are used to provide users
                    with services provided through the website, and to use some
                    of its features ,such as login and access to secure areas,
                    providing pop-up notifications, and accept languages upon
                    from sign up forms. These cookies are essential for the use
                    and navigation of the site. Without them, the main features
                    of our site will not work. These cookies are essential to
                    provide the basic services of our site and cannot be
                    rejected.
                  </p>
                  <p>
                    Functionality Cookies: These cookies are used to remember
                    certain choices made by the user (e.g. user name, user
                    language or country/region, etc.) and to provide these users
                    with enhanced personalized functionality based on this
                    information.
                  </p>
                  <p>
                    Performance Analytics cookies: These cookies are used to
                    identify and count the number of visitors to our website,
                    collect statistics about how visitors move around the site
                    (including no. of page views and time spent per page) and
                    conversion tracking. This can improve website performance
                    and improve user experience. For example, these cookies
                    allow users to easily find the information they need.
                  </p>
                  <p>
                    Advertising Cookies (Ad Cookies): These cookies are used to
                    display advertisements relevant to you.
                  </p>
                  <p>
                    Cookies used to integrate third party services: These
                    cookies are used to incorporate third party features such as
                    videos, maps or social media plugins into the site.
                  </p>

                  <h3>HOW TO CONTROL COOKIES</h3>
                  <p>
                    Most browsers accept cookies by default. If you wish, you
                    can disable cookies or configure your browser to be notified
                    when a cookie is saved. If you disable cookies or refuse a
                    site's request to set cookies, some parts of this site may
                    not function properly or may not work at all.
                  </p>
                  <p>
                    For more information on cookies, please visit
                    www.aboutcookies.org.
                  </p>

                  <h3>CONTACT US</h3>
                  <p>
                    If you have any questions or concerns, please contact us at
                    support@vangoldservices.com.
                  </p>
                </div>
              </div>

              <div className="footer">
            <div className="container">
              <div className="col1">
                <Link to="/" className="brand-wrap">
                  <img alt="asdfd" className="brand-img" src={logo} />
                  <span>Vangold</span>
                </Link>

                <h6>Stay up to date</h6>
                <label for="email" className="e-input">
                  <input
                    id="email"
                    type="text"
                    placeholder="Your email address"
                  />
                  <img src={send} />
                </label>

                <p className="p1">Copyright © 2021 Vangold Finance.</p>
                <p className="p2">All rights reserved</p>
                <div className="socials">
                  <a
                    href="https://instagram.com/vangoldfinance?r=nametag"
                    className="circle"
                  >
                    <img alt="asdfd" src={insta} />
                  </a>
                  <a target="_blank" rel="noreferrer" className="circle" href="https://t.me/vangoldtoken1">
                    <img src={telegram} className="telegram" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/vangold-finance"
                    className="circle"
                  >
                    <img alt="asdfd" src={linkedIn} />
                  </a>
                  <a
                    href="https://twitter.com/vangoldfinance"
                    className="circle"
                  >
                    <img alt="asdfd" src={twitter} />
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCpRE6nyI3DVxIYz6uDBJwkw"
                    className="circle"
                  >
                    <img alt="asdfd" src={youtube} />
                  </a>
                </div>
              </div>
              <div className="col2">
                <h6>Company</h6>
                <div className="links">
                  <Link to="/about">About us</Link>
                  <a href="https://vangoldfinance.medium.com/">Blog</a>
                  <Link to="/contact-us">Contact us</Link>
                  <a href="https://drive.google.com/file/d/1RnIm59CoclsjOOtYGOBii8aZ_2TL3w_x/view?usp=drivesdk">
                        Whitepaper
                      </a>
                  
                </div>
              </div>
              <div className="col3">
                <h6>Support</h6>
                <div className="links">
                  <a href="Mailto:vangoldtoken@vangold.finance">Help center</a>
                  <Link to="/terms">Terms of service</Link>
                  <Link to="/cookie-policy">Cookie Policy</Link>
                  <Link to="/privacy-policy">Privacy policy</Link>
                </div>
              </div>
            </div>
          </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
