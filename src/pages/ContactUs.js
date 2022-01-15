import React from "react";
import Particles from "react-tsparticles";
import { Link } from "react-router-dom";

import headerLogo from "../img/header-brand-logo.png";
import cardImg1 from "../img/card-img1.png";
import cardImg2 from "../img/card-img2.png";
import cardImg3 from "../img/card-img3.png";
import linkedIn from "../img/linkedin.png";

import logo from "../img/footer-brand-logo.png";
import send from "../img/send.png";
import basket from "../img/basket.png";
import telegram from "../img/svgicons/telegram.svg";
import twitter from "../img/twitter.png";
import insta from "../img/insta.png";
import youtube from "../img/youtube.png";

import down from "../img/arrow-down.png";
import up from "../img/up.png";
import menuIcon from "../img/menu.png";

export default class ContactUs extends React.Component {
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
    const particlesInit = (main) => {
      console.log(main);

      // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    };

    const particlesLoaded = (container) => {
      console.log(container);
    };

    return (
      <div>
        <div className="landing">
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
                    <div className="link-menu doc-menu">
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

          <div className="main-content">
            <Particles
              id="tsparticles"
              init={particlesInit}
              loaded={particlesLoaded}
              options={{
                background: {
                  color: {
                    value: "#0d47a1",
                  },
                },
                fpsLimit: 60,
                interactivity: {
                  modes: {
                    bubble: {
                      distance: 4000,
                      duration: 1.2,
                      opacity: 0.8,
                      size: 40,
                    },
                    push: {
                      quantity: 4,
                    },
                    repulse: {
                      distance: 2000,
                      duration: 0.4,
                    },
                  },
                },
                particles: {
                  color: {
                    value: "#ffffff",
                  },
                  collisions: {
                    enable: false,
                  },
                  move: {
                    direction: "none",
                    enable: true,
                    outMode: "bounce",
                    random: false,
                    speed: 1.4,
                    straight: false,
                  },
                  number: {
                    density: {
                      enable: true,
                      value_area: 1800,
                    },
                    value: 50,
                  },
                  opacity: {
                    value: 0.5,
                  },
                  shape: {
                    type: "circle",
                  },
                  size: {
                    random: true,
                    value: 8,
                  },
                },
                detectRetina: true,
              }}
            />

            <div className="container">
              <div className="sec5">
                <h2>Get in touch with the Vangold team</h2>
                <div className="boxes">
                  <div className="box">
                    <img alt="asdfd" src={cardImg3} />
                    <div className="box-items">
                      <h4>Vangold Community</h4>
                      <p>Be a part of the community</p>
                      <a href="https://t.me/vangoldtoken1">Join</a>
                    </div>
                  </div>
                  <div className="box">
                    <img alt="asdfd" src={cardImg2} />
                    <div className="box-items">
                      <h4>For General Inquiries?</h4>
                      <p>Contact us for Support</p>
                      <a href="Mailto:vangoldtoken@vangold.finance">
                        Contact Us
                      </a>
                    </div>
                  </div>
                  <div className="box">
                    <img alt="asdfd" src={cardImg1} />
                    <div className="box-items">
                      <h4>Press Inquiry</h4>
                      <p>Contact us with press requests</p>
                      <a href="https://vangoldfinance.medium.com/">
                        Contact Press
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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

        <div className="landing-mobile">
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
                <div className="container">
                  <div className="sec5">
                    <h2>Get in touch with the Vangold team</h2>
                    <div className="boxes">
                      <div className="box">
                        <img alt="asdfd" src={cardImg3} />
                        <div className="box-items">
                          <h4>Vangold Community</h4>
                          <p>Be a part of the community</p>
                          <a href="https://t.me/vangoldtoken1">Join</a>
                        </div>
                      </div>
                      <div className="box">
                        <img alt="asdfd" src={cardImg2} />
                        <div className="box-items">
                          <h4>For General Inquiries?</h4>
                          <p>Contact us for Support</p>
                          <a href="Mailto:vangoldtoken@vangold.finance">
                            Contact Us
                          </a>
                        </div>
                      </div>
                      <div className="box">
                        <img alt="asdfd" src={cardImg1} />
                        <div className="box-items">
                          <h4>Press Inquiry</h4>
                          <p>Contact us with press requests</p>
                          <a href="https://vangoldfinance.medium.com/">
                            Contact Press
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
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
