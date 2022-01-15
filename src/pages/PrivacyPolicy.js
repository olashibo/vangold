import React from "react";
import { Link } from "react-router-dom";

import logo from "../img/footer-brand-logo.png";
import send from "../img/send.png";
import telegram from "../img/svgicons/telegram.svg";
import twitter from "../img/twitter.png";
import insta from "../img/insta.png";
import youtube from "../img/youtube.png";
import headerLogo from "../img/header-brand-logo.png";
import down from "../img/arrow-down.png";
import up from "../img/up.png";
import menuIcon from "../img/menu.png";
import linkedIn from "../img/linkedin.png";

export default class PrivacyPolicy extends React.Component {
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
        <div className="privacy">
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
                <a className="a1" href="Mailto:vangoldtoken@vangold.finance">
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
              <h1>Vangold Privacy Policy</h1>
            </div>
          </div>
          <div className="sec1">
            <h2>GLOBAL PRIVACY POLICY</h2>
            <p>
              This policy describes the processing of personal data by Vangold
              Services in connection with how you use and interact with our
              website www.vangoldservices.com.
            </p>
            <p>
              This Privacy Policy should be read in conjunction with the terms
              that describe the conditions under which you may use this site.
            </p>
            <p>
              If you have any further complaints or questions about this Privacy
              Policy, please contact us at support@vangoldservices.com .
            </p>
            <p>This document describes:</p>
            <p>1. Important information about us</p>
            <p>2. Personal Information we collect</p>
            <p>3. How we get this information</p>
            <p>4. How we use this information</p>
            <p>5. How long we store this information</p>
            <p>6. With whom do we share this information?</p>
            <p>
              7. To what other location or countries do we transfer this
              information?
            </p>
            <p>8. How we protect your information</p>
            <p>9. Minor Policy</p>
            <p>10. Privacy FAQs</p>
            <h3>IMPORTANT INFORMATION ABOUT US</h3>
            <p>
              This document sets out information about how we collect and
              process your personal information when using this site, including
              information that you provide through this site when you subscribe
              to our newsletter, or participate in a survey.
            </p>
            <p> Controller</p>
            <p>
              This Privacy Policy is issued on behalf of Vangold Services, so
              any use of “Vangold Services”, “we” or “us” in this document
              refers to Vangold Services.
            </p>
            <h3>Third Party Links</h3>
            <p>
              This site may contain links to third party websites including
              affiliate website links, plugins and applications. Going through
              those links may allow those third-party websites to collect data
              about you. We are not in control of those websites and are not
              responsible for their content. When you leave our site, we
              recommend that you read the privacy policies of sites you visit.
            </p>
            <h3>PERSONAL INFORMATION WE COLLECT</h3>
            <p>
              Personal information means any kind of information relating to an
              identified or identifiable natural person.
            </p>
            <p>
              Because of our wide range of work and for other different reasons,
              we need to use your personal information. Data collected consists
              of:
            </p>
            <p>
              1. Identity and contact information: including name, email
              address, date of birth, phone number;
            </p>
            <p>
              2. Preference information: information on the type of services
              purchased on the website and the type of services of your
              interest;
            </p>
            <p>
              3. Financial and transaction data: including bank account
              information, card number, email address, postal address, phone
              number, passport information;
            </p>
            <p>
              4. Technical and Usage Information: Contains information about how
              visitors use our site.
            </p>
            <p>
              5. Marketing data- includes the individual's choice to receive
              marketing material from us, including the consent you have given
              us;
            </p>
            <p>
              6. Information used to provide the services: this includes
              information that user has provided to us or generated by us while
              providing the product or service to our customers.
            </p>
            <p>
              7. We may also record communications if you contact us by email or
              other means.
            </p>

            <h3>HOW WE GET THIS INFORMATION</h3>
            <p>
              1. We collect this information in a variety of ways, including:{" "}
            </p>
            <p>
              a. Direct Contact: While individuals may provide personal
              information by contacting us by email, phone or other means, we
              may collect personal information, such as financial information,
              from payment providers for processing a transaction.
            </p>
            <p>
              b. Our Website: automatically collected information includes your
              browser type and version, the operating system you use, your IP
              address, Mac ID, device ID, browser settings, date and time of
              your interaction. We use cookies to provide us insights about how
              to provide you with the best experience on our site when you
              browse our site. More information about how we use cookies and how
              we gather information through cookies can be found in our Cookie
              Policy. However, users can block cookies.
            </p>
            <p>
              c. Third Party or publicly available sources: We may obtain
              personal information about you from a variety of third parties and
              public sources, such as:
            </p>
            <p>• Technical data from the following parties:</p>
            <p>o Analytics providers such as Google;</p>
            <p>o Advertising networks like Google,</p>
            <p>o Search information providers such as Google.</p>

            <h3>HOW WE USE YOUR PERSONAL INFORMATION</h3>
            <p>
              1. We use personal information in a variety of ways, including:
            </p>
            <p>
              a) Contractual necessity: for fulfilling the contract with you,
              e.g. you purchase a service from us;
            </p>
            <p>
              b) Legitimate Interests: In accordance with our requirements to
              pursue our legitimate interests such as:
            </p>
            <p>
              a. Manage and improve accounts registered on the website to
              enhance the customer experience;
            </p>
            <p>b. Managing and securing registered online accounts;</p>
            <p>
              c. For monitoring all registered online accounts to investigate
              and/or report; terrorism, misrepresentation, fraud, and crime;
            </p>
            <p>
              d. For providing advertisements (via Facebook and Google ads);
            </p>
            <p>
              e. We may use personal data in case of legal claims against the
              company, partners and for the purpose of investigation including
              disclosure of information in case of litigation;
            </p>
            <p>
              f. Providing customer/user insights based on his/her behavior to
              drive targeted direct marketing.
            </p>
            <p>g. In communicating with you</p>
            <p>
              h. Investigate any complaints you may have received about our
              services, website and products.
            </p>
            <p>
              i. You can get all other information on our legitimate interests
              by contacting us at support@vangoldservices.com.
            </p>
            <p>c) For providing services to customers / customers;</p>
            <p>d) For recruiting employees and members;</p>
            <p>e) For supervising and managing our partners or employees;</p>
            <p>f) To promote our products or services;</p>
            <p>g) To fulfill our audit or insurance obligations;</p>
            <p>
              h) Legal Compliance: to comply with applicable laws and legal
              procedures, including legal claims, investigations and litigation;
            </p>
            <p>
              i) Consent: We send direct marketing messages via
              SMS/email/phone/online about our products or services that we
              believe may be of interest to you. It is only sent if you have
              provided your personal information during the registration process
              or through an online account on the website or directly at the
              office. You can opt out of online marketing messages by clicking
              on the unsubscribe link in email sent, update your account
              preferences on our website, or contact us at our address
              support@vangoldservices.com.
            </p>

            <h3>WE USE YOUR PERSONAL INFORMATION BASED ON</h3>
            <p>We will use your personal information on the basis:</p>
            <p>1. If it is in our legitimate interests.</p>
            <p>
              2. When it is necessary to comply with a regulatory or legal
              obligation.
            </p>

            <h3>HOW LONG WE KEEP YOUR INFORMATION</h3>
            <p>
              We store personal information in accordance to category of
              personal information. When determining the retention period, we
              take into account the purpose for which personal data was
              collected. For more information, see Privacy FAQs.
            </p>

            <h3>WITH WHOM WE YOUR INFORMATION</h3>
            <p>
              All transactions on our website are made through secure servers.
              Under no circumstances, will our staff be able to access your card
              information. All personal and credit card information is
              transmitted using Secure Socket Layer (SSL) technology and then
              encrypted in the payment gateway providers database only to be
              accessible by authorities with special access rights to the
              system.
            </p>

            <h3>SECTION 8: UNAUTHORIZED USE OF THIS SITE</h3>
            <p>1. We may share the collected personal information.</p>
            <p>
              a. When outsourcing certain services (for example, photocopying or
              IT services;
            </p>
            <p>
              b. With our professional advisors: for example, our bankers,
              insurers;
            </p>
            <p>
              c. With regulatory authorities, law enforcement agencies, if
              mandated by law;
            </p>
            <p>
              d. With trusted third parties who helps us in operating our site,
              conducts our business, or provide services to you (if that party
              maintains the confidentiality of this information);
            </p>
            <p>
              e. Third party service providers who process personal data on our
              behalf.
            </p>
            <p>
              f. Prospective purchasers of all or part of our assets or
              operations, and professional advisors related to purchases.
            </p>
            <p>
              2. We do not sell personal data to third parties. Third parties
              with whom we share your personal information, in order to improve
              the user experience, are required to use that information in
              accordance with law and has the responsibility of its security;
            </p>

            <h3>WHICH COUNTRIES WE TRANSFER YOUR PERSONAL INFORMATION TO</h3>
            <p>
              We do not share your personal information outside Nigeria. If we
              choose to transfer your personal information outside Nigeria for
              any reason in the future, there are procedures in place to ensure
              that these third parties process your personal data with the same
              level of security as it was processed inside Nigeria. We do not
              sell your information to third parties. If you have any further
              questions, please contact us at the support@vangoldservices.com.
            </p>

            <h3>HOW WE PROTECT YOUR INFORMATION</h3>
            <p>
              Fraud Prevention: If you are buying from our website. We can use
              automated tools as part of counter fraud prevention measures. Your
              purchase may be denied if your bank rejected your payment or if
              other factors conclude that the transaction is fraudulent. If you
              have any questions about this, please contact us at
              support@vangoldservices.com.
            </p>

            <h3>MINORS</h3>
            <p>
              We do not collect information from anyone under the age of 18. Our
              websites, products and services are intended for people who are
              18-year-old or older.
            </p>
            <p>
              Visitors under the age of 18 are not allowed to subscribe to our
              services or provide personal information in any form on our
              website or application. We encourage parents to monitor their
              children's online activities.
            </p>

            <h3>PRIVACY FAQS</h3>
            <p>1. What rights do you have over your personal data?</p>
            <p>You have the right to request:</p>
            <p>o Copy of your personal information.</p>
            <p>
              o to correct your personal information if your personal
              information is inaccurate, incomplete or outdated.
            </p>
            <p>o To delete your personal information</p>
            <p>
              o Stop processing of your personal information (processing will
              temporarily stop).
            </p>
            <p>2. How long do we keep your information?</p>
            <p>
              We only retain your personal information for as long as necessary
              for the purposes for which we collect it, including meeting legal,
              accounting, or reporting requirements.
            </p>
            <p>
              When we process your personal and transaction data, we do it as
              long as your account is active and for 7 years thereafter, but not
              further than that.
            </p>
            <p>
              If we process your information for marketing purposes, we do so
              until you ask us to stop it.
            </p>

            <h3>CONTACT US</h3>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at support@vangoldservices.com.
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

        <div className="privacy-mobile">
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
                  <div className="sub-heading">
                    <h1>Vangold Privacy Policy</h1>
                  </div>
                </div>
                <div className="sec1">
                  <h2>GLOBAL PRIVACY POLICY</h2>
                  <p>
                    This policy describes the processing of personal data by
                    Vangold Services in connection with how you use and interact
                    with our website www.vangoldservices.com.
                  </p>
                  <p>
                    This Privacy Policy should be read in conjunction with the
                    terms that describe the conditions under which you may use
                    this site.
                  </p>
                  <p>
                    If you have any further complaints or questions about this
                    Privacy Policy, please contact us at
                    support@vangoldservices.com .
                  </p>
                  <p>This document describes:</p>
                  <p>1. Important information about us</p>
                  <p>2. Personal Information we collect</p>
                  <p>3. How we get this information</p>
                  <p>4. How we use this information</p>
                  <p>5. How long we store this information</p>
                  <p>6. With whom do we share this information?</p>
                  <p>
                    7. To what other location or countries do we transfer this
                    information?
                  </p>
                  <p>8. How we protect your information</p>
                  <p>9. Minor Policy</p>
                  <p>10. Privacy FAQs</p>
                  <h3>IMPORTANT INFORMATION ABOUT US</h3>
                  <p>
                    This document sets out information about how we collect and
                    process your personal information when using this site,
                    including information that you provide through this site
                    when you subscribe to our newsletter, or participate in a
                    survey.
                  </p>
                  <p> Controller</p>
                  <p>
                    This Privacy Policy is issued on behalf of Vangold Services,
                    so any use of “Vangold Services”, “we” or “us” in this
                    document refers to Vangold Services.
                  </p>
                  <h3>Third Party Links</h3>
                  <p>
                    This site may contain links to third party websites
                    including affiliate website links, plugins and applications.
                    Going through those links may allow those third-party
                    websites to collect data about you. We are not in control of
                    those websites and are not responsible for their content.
                    When you leave our site, we recommend that you read the
                    privacy policies of sites you visit.
                  </p>
                  <h3>PERSONAL INFORMATION WE COLLECT</h3>
                  <p>
                    Personal information means any kind of information relating
                    to an identified or identifiable natural person.
                  </p>
                  <p>
                    Because of our wide range of work and for other different
                    reasons, we need to use your personal information. Data
                    collected consists of:
                  </p>
                  <p>
                    1. Identity and contact information: including name, email
                    address, date of birth, phone number;
                  </p>
                  <p>
                    2. Preference information: information on the type of
                    services purchased on the website and the type of services
                    of your interest;
                  </p>
                  <p>
                    3. Financial and transaction data: including bank account
                    information, card number, email address, postal address,
                    phone number, passport information;
                  </p>
                  <p>
                    4. Technical and Usage Information: Contains information
                    about how visitors use our site.
                  </p>
                  <p>
                    5. Marketing data- includes the individual's choice to
                    receive marketing material from us, including the consent
                    you have given us;
                  </p>
                  <p>
                    6. Information used to provide the services: this includes
                    information that user has provided to us or generated by us
                    while providing the product or service to our customers.
                  </p>
                  <p>
                    7. We may also record communications if you contact us by
                    email or other means.
                  </p>

                  <h3>HOW WE GET THIS INFORMATION</h3>
                  <p>
                    1. We collect this information in a variety of ways,
                    including:{" "}
                  </p>
                  <p>
                    a. Direct Contact: While individuals may provide personal
                    information by contacting us by email, phone or other means,
                    we may collect personal information, such as financial
                    information, from payment providers for processing a
                    transaction.
                  </p>
                  <p>
                    b. Our Website: automatically collected information includes
                    your browser type and version, the operating system you use,
                    your IP address, Mac ID, device ID, browser settings, date
                    and time of your interaction. We use cookies to provide us
                    insights about how to provide you with the best experience
                    on our site when you browse our site. More information about
                    how we use cookies and how we gather information through
                    cookies can be found in our Cookie Policy. However, users
                    can block cookies.
                  </p>
                  <p>
                    c. Third Party or publicly available sources: We may obtain
                    personal information about you from a variety of third
                    parties and public sources, such as:
                  </p>
                  <p>• Technical data from the following parties:</p>
                  <p>o Analytics providers such as Google;</p>
                  <p>o Advertising networks like Google,</p>
                  <p>o Search information providers such as Google.</p>

                  <h3>HOW WE USE YOUR PERSONAL INFORMATION</h3>
                  <p>
                    1. We use personal information in a variety of ways,
                    including:
                  </p>
                  <p>
                    a) Contractual necessity: for fulfilling the contract with
                    you, e.g. you purchase a service from us;
                  </p>
                  <p>
                    b) Legitimate Interests: In accordance with our requirements
                    to pursue our legitimate interests such as:
                  </p>
                  <p>
                    a. Manage and improve accounts registered on the website to
                    enhance the customer experience;
                  </p>
                  <p>b. Managing and securing registered online accounts;</p>
                  <p>
                    c. For monitoring all registered online accounts to
                    investigate and/or report; terrorism, misrepresentation,
                    fraud, and crime;
                  </p>
                  <p>
                    d. For providing advertisements (via Facebook and Google
                    ads);
                  </p>
                  <p>
                    e. We may use personal data in case of legal claims against
                    the company, partners and for the purpose of investigation
                    including disclosure of information in case of litigation;
                  </p>
                  <p>
                    f. Providing customer/user insights based on his/her
                    behavior to drive targeted direct marketing.
                  </p>
                  <p>g. In communicating with you</p>
                  <p>
                    h. Investigate any complaints you may have received about
                    our services, website and products.
                  </p>
                  <p>
                    i. You can get all other information on our legitimate
                    interests by contacting us at support@vangoldservices.com.
                  </p>
                  <p>c) For providing services to customers / customers;</p>
                  <p>d) For recruiting employees and members;</p>
                  <p>
                    e) For supervising and managing our partners or employees;
                  </p>
                  <p>f) To promote our products or services;</p>
                  <p>g) To fulfill our audit or insurance obligations;</p>
                  <p>
                    h) Legal Compliance: to comply with applicable laws and
                    legal procedures, including legal claims, investigations and
                    litigation;
                  </p>
                  <p>
                    i) Consent: We send direct marketing messages via
                    SMS/email/phone/online about our products or services that
                    we believe may be of interest to you. It is only sent if you
                    have provided your personal information during the
                    registration process or through an online account on the
                    website or directly at the office. You can opt out of online
                    marketing messages by clicking on the unsubscribe link in
                    email sent, update your account preferences on our website,
                    or contact us at our address support@vangoldservices.com.
                  </p>

                  <h3>WE USE YOUR PERSONAL INFORMATION BASED ON</h3>
                  <p>We will use your personal information on the basis:</p>
                  <p>1. If it is in our legitimate interests.</p>
                  <p>
                    2. When it is necessary to comply with a regulatory or legal
                    obligation.
                  </p>

                  <h3>HOW LONG WE KEEP YOUR INFORMATION</h3>
                  <p>
                    We store personal information in accordance to category of
                    personal information. When determining the retention period,
                    we take into account the purpose for which personal data was
                    collected. For more information, see Privacy FAQs.
                  </p>

                  <h3>WITH WHOM WE YOUR INFORMATION</h3>
                  <p>
                    All transactions on our website are made through secure
                    servers. Under no circumstances, will our staff be able to
                    access your card information. All personal and credit card
                    information is transmitted using Secure Socket Layer (SSL)
                    technology and then encrypted in the payment gateway
                    providers database only to be accessible by authorities with
                    special access rights to the system.
                  </p>

                  <h3>SECTION 8: UNAUTHORIZED USE OF THIS SITE</h3>
                  <p>1. We may share the collected personal information.</p>
                  <p>
                    a. When outsourcing certain services (for example,
                    photocopying or IT services;
                  </p>
                  <p>
                    b. With our professional advisors: for example, our bankers,
                    insurers;
                  </p>
                  <p>
                    c. With regulatory authorities, law enforcement agencies, if
                    mandated by law;
                  </p>
                  <p>
                    d. With trusted third parties who helps us in operating our
                    site, conducts our business, or provide services to you (if
                    that party maintains the confidentiality of this
                    information);
                  </p>
                  <p>
                    e. Third party service providers who process personal data
                    on our behalf.
                  </p>
                  <p>
                    f. Prospective purchasers of all or part of our assets or
                    operations, and professional advisors related to purchases.
                  </p>
                  <p>
                    2. We do not sell personal data to third parties. Third
                    parties with whom we share your personal information, in
                    order to improve the user experience, are required to use
                    that information in accordance with law and has the
                    responsibility of its security;
                  </p>

                  <h3>
                    WHICH COUNTRIES WE TRANSFER YOUR PERSONAL INFORMATION TO
                  </h3>
                  <p>
                    We do not share your personal information outside Nigeria.
                    If we choose to transfer your personal information outside
                    Nigeria for any reason in the future, there are procedures
                    in place to ensure that these third parties process your
                    personal data with the same level of security as it was
                    processed inside Nigeria. We do not sell your information to
                    third parties. If you have any further questions, please
                    contact us at the support@vangoldservices.com.
                  </p>

                  <h3>HOW WE PROTECT YOUR INFORMATION</h3>
                  <p>
                    Fraud Prevention: If you are buying from our website. We can
                    use automated tools as part of counter fraud prevention
                    measures. Your purchase may be denied if your bank rejected
                    your payment or if other factors conclude that the
                    transaction is fraudulent. If you have any questions about
                    this, please contact us at support@vangoldservices.com.
                  </p>

                  <h3>MINORS</h3>
                  <p>
                    We do not collect information from anyone under the age of
                    18. Our websites, products and services are intended for
                    people who are 18-year-old or older.
                  </p>
                  <p>
                    Visitors under the age of 18 are not allowed to subscribe to
                    our services or provide personal information in any form on
                    our website or application. We encourage parents to monitor
                    their children's online activities.
                  </p>

                  <h3>PRIVACY FAQS</h3>
                  <p>1. What rights do you have over your personal data?</p>
                  <p>You have the right to request:</p>
                  <p>o Copy of your personal information.</p>
                  <p>
                    o to correct your personal information if your personal
                    information is inaccurate, incomplete or outdated.
                  </p>
                  <p>o To delete your personal information</p>
                  <p>
                    o Stop processing of your personal information (processing
                    will temporarily stop).
                  </p>
                  <p>2. How long do we keep your information?</p>
                  <p>
                    We only retain your personal information for as long as
                    necessary for the purposes for which we collect it,
                    including meeting legal, accounting, or reporting
                    requirements.
                  </p>
                  <p>
                    When we process your personal and transaction data, we do it
                    as long as your account is active and for 7 years
                    thereafter, but not further than that.
                  </p>
                  <p>
                    If we process your information for marketing purposes, we do
                    so until you ask us to stop it.
                  </p>

                  <h3>CONTACT US</h3>
                  <p>
                    If you have any questions about this Privacy Policy, please
                    contact us at support@vangoldservices.com.
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
