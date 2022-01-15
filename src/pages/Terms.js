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

export default class Terms extends React.Component {
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
        <div className="terms">
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

          <div className="sub-heading">
            <div className="contain">
              <h1>Vangold Terms and Conditions</h1>
            </div>
          </div>
          <div className="sec1">
            <h2>TERMS AND CONDITIONS</h2>
            <p>
              Vangold Services allows its customers a market place where buyers
              can find sellers providing different services from its website
              www.vangoldservices.com.
            </p>
            <h3>OVERVIEW</h3>
            <p>
              These terms and conditions are issued on behalf of Vangold
              Services , so any use of "we", "us" and "our" refer to "Vangold
              Services". Vangold Services offers this website with other
              information, tools, products and services to the user, conditioned
              upon the acceptance of these terms and conditions and other
              policies.
            </p>
            <p>
              {" "}
              By using our site, purchasing any service or performing any
              transaction, you agree to be bound by these Terms and Conditions,
              including other policies mentioned on the website
              www.vangoldservices.com. These Terms and Conditions are applicable
              to all the users of this site including browsers, customers,
              merchants, or any other contributor of the content. If you do not
              agree to the terms mentioned here, please leave this site
              immediately.
            </p>
            <p>
              Any new feature or content added to the website shall be subjected
              to these terms and conditions. Any new update in these terms and
              conditions will be posted here. It is the responsibility of the
              user to check periodically, if there has been any change in these
              terms and conditions or any other policy on this site.
            </p>
            <p>
              All rights or obligations contained in this Agreement shall be
              severable and distinct, and if one or more of them is declared
              invalid, void, illegal or unenforceable, the rest shall continue
              to operate to the extent permitted by law.
            </p>
            <h3>SECTION 1: GENERAL CONDITIONS</h3>
            <p>
              We reserve the right to refuse any service, product or content
              available on this website to anyone for any reason. You agree that
              your content(excluding credit card information) may be transferred
              over different networks without your permission.
            </p>
            <h3>SECTION 2: ACCURACY AND COMPLETENESS OF INFORMATION</h3>
            <p>
              We do not take any responsibility for the accuracy and correctness
              of the information provided on this website. The content provided
              on this website is for general information only and should not be
              relied upon while taking decisions solely based on this
              information, without referring to the primary source of
              information. It is in our sole discretion to update, modify
              content on this site anytime without anyone's permission.
            </p>
            <h3>SECTION 3: MODIFICATIONS TO THE SERVICES AND PRICES</h3>
            <p>
              Prices for our services can be changed anytime without any notice.
              It is in our sole discretion to modify or discontinue any service
              without any notice.
            </p>
            <h3>SECTION 4: LAW GOVERNING AND JURISDICTION</h3>
            <p>
              These Terms are governed, construed, and interpreted in accordance
              with Nigerian law. You agree to the exclusive jurisdiction of the
              Nigerian courts for any dispute arising out of your use of this
              site. Use of this site is not authorized in any jurisdiction that
              does not give effect to these terms.
            </p>
            <h3>SECTION 5: PAYMENTS AND CANCELLATIONS</h3>
            <p>
              We accept credit or debit cards. We currently accept Paypal.
              Visitors should check the processing fee for their credit or debit
              card company or payment service provider before placing an order.
              Vangold Services is not responsible for any additional costs
              incurred as a result of transactions concluded without
              consultation with the debit/credit card company or any payment
              provider.
            </p>
            <p>
              You can cancel your order up to the point before payment has been
              processed by your system.
            </p>

            <h3>SECTION 6: ACCURACY OF BILLING AND ACCOUNT INFORMATION</h3>
            <p>
              We may refuse any order placed on our website. It is in our sole
              discretion. In the case where we modify any order or cancel it we
              may attempt to contact you through the information provided during
              placing the order. You agree to provide us with correct
              information while placing the order, including billing address,
              email, telephone number, credit or debit card number.
            </p>

            <h3>SECTION 7: SECURITY AND CONFIDENTIALITY MEASURE</h3>
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
            <p>
              Use of this site and systems without authority, including, but not
              limited to, unauthorized entry in Vangold Services’s systems,
              online accounts, passwords, or misuse of other information, is
              strictly prohibited. You may not use this site in any way that
              could damage, disable, overload or impair this site or service, or
              interfere with the use and use of this site or services by others.
              You agree not to engage in any activity related to this site which
              results in violation of applicable laws and regulations.
            </p>

            <h3>SECTION 09: MINORS</h3>
            <p>
              You agree that you are at least of the age of 18. Our websites,
              products and services are intended for people who are 18 years old
              or older. You agree that you may not use your products for any
              illegal purpose, including violating any law such as copyright
              laws.
            </p>
            <p>
              Any minor accessing this site will be assumed to have taken the
              permission or his/her parents or guardian.
            </p>

            <h3>SECTION 10: LINKS TO THIRD-PARTY SITES AND OPTIONAL TOOLS</h3>
            <p>
              The site may contain certain services and content by third
              parties. We are not responsible for the accuracy and correctness
              of the content or services provided by these third parties and
              will not be liable for any damage caused by such content, product
              or service.
            </p>
            <p>
              This website may contain links to third party websites, including
              advertisers’ websites. The company is not responsible for the
              privacy policies of those websites or the cookies used by those
              websites. In addition, as the company does not control such
              websites and resources, we are not responsible for the
              availability of such websites or resources, and not responsible
              for any content, advertisements, products or other kind of
              materials provided by those websites or resources.
            </p>
            <p>
              You may be provided with third party tools on our site which we
              neither control nor monitor. We shall not be liable for any damage
              arising out of use of such third party tools. Use of these tools
              is at your risk.
            </p>

            <h3>SECTION 11: USER COMMENTS. FEEDBACK AND OTHER SUBMISSIONS</h3>
            <p>
              If, at our request, you send us any content or without request
              from us you send us any comments, ideas, plans or
              proposals(collectively known as "comments"), by email, to physical
              address or otherwise, you agree that we have all rights regarding
              those comments, including editing, copying, publishing. We don’t
              have any obligation to maintain those comments in confidence or
              pay compensation. You agree that you will post only those comments
              that you are legally entitled to publish, and reviews that you
              believe to be true, and that you will not purposely provide false
              or misleading information through these comments.
            </p>
            <p>
              You agree that your comments will not violate any law, including
              any copyright laws or rights of the third parties. You also agree
              that your comments will not consist of any libelous, unlawful and
              obscene material, or contain any viruses or any other malware.
            </p>
            <p>
              You alone are responsible for the comments you make. Vangold
              Services will not be liable for any comments and their accuracy.
              We do not assume any liability arising from your comments.
            </p>

            <h3>SECTION 12: PERSONAL INFORMATION</h3>
            <p>
              Please refer the Privacy Policy for the information that we
              collect from our users.
            </p>

            <h3>SECTION 13: ERRORS, INACCURACIES AND OMISSIONS</h3>
            <p>
              There may be typographical errors, inaccuracies or omission in the
              content or in the services on the website. It is in the sole
              discretion of Vangold Services to correct any error, omissions or
              inaccuracies, and to modify, update or change the information on
              the website.
            </p>
            <p>
              Vangold Services does not have any obligation to update, modify or
              change the information in services, including pricing of the
              services, or any other content.
            </p>

            <h3>SECTION 14: CODE OF ETHICS AND CONDUCT</h3>
            <p>Copyright Ownership</p>
            <p>
              The copyright to this website and to the materials on this site
              (including but not limited to text, images, photos, artwork,
              music, audio, video, and audiovisual materials on this site) is
              owned by Vangold Services.
            </p>
            <p>Copyright license</p>
            <p>
              Vangold Services permits a non-exclusive royalty-free revocable
              license for the following:
            </p>
            <p>
              • Browse this site and content on website on your computer or
              mobile device using a web browser.
            </p>
            <p>
              • Copy and save this site and its content in your browser’s cache.
            </p>
            <p>
              • Print pages of this site for personal and non-commercial use.
            </p>
            <p>
              Vangold Services does not grant you any other rights with respect
              to this website or any material on this site i.e. all other rights
              are reserved.
            </p>
            <p>
              To avoid any doubt, you must not modify, edit, adapt, convert,
              post, distribute, transmit or display or reproduce this website or
              any material on this site (in any form ) without the prior written
              consent of Vangold Services. You can request permission in writing
              at support@vangoldservices.com .
            </p>
            <p>Data Mining</p>
            <p>
              Automatic and/or systematic collection of data on this site is
              strictly prohibited.{" "}
            </p>
            <p>Enforcement of copyright</p>
            <p>
              Vangold Services takes copyright protection of its content very
              seriously.
            </p>
            <p>
              If Vangold Services finds that you have used our copyrighted
              material in violation of the above license, Vangold Services may
              take legal action against the use of such material for an
              injunction to stop the use of the material and monetary damages.
              You may have to pay our legal costs.
            </p>
            <p>
              If you become aware of any use of Vangold Services’s copyrighted
              material that violates or may violate the above licenses, please
              let us know by sending an email to support@vangoldservices.com .
            </p>

            <h3>SECTION 15: DISCLAIMER AND LIMITATION OF LIABILITY</h3>
            <p>
              YOUR USE OF THE SERVICE AND PRODUCT IS AT YOUR SOLE RISK. THE
              PRODUCTS AND SERVICES ARE PROVIDED ON AN "AS IS" AND "AS
              AVAILABLE" BASIS. VANGOLD SERVICES MAKES NO REPRESENTATIONS OR
              WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, AS TO THE
              OPERATION OF THE SERVICES OR ANY CONTENT, PRODUCTS OR SERVICES
              INCLUDED ON, OR OTHERWISE MADE AVAILABLE TO YOU THROUGH, THE
              SERVICES, UNLESS OTHERWISE SPECIFIED IN WRITING, INCLUDING WITHOUT
              LIMITATION ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
              PARTICULAR USE OR PURPOSE, NON-INFRINGEMENT, QUIET ENJOYMENT, AND
              ACCURACY. WE SPECIFICALLY DISCLAIM ANY LIABILITY ASSOCIATED WITH
              THE USE OF THE PRODUCTS AND YOU AGREE THAT YOU WILL NOT SUE
              VANGOLD SERVICES FOR ANY CLAIM RELATED TO ANY PRODUCTS PURCHASED
              THROUGH THE SERVICES. YOU AGREE TO INDEMNIFY, DEFEND AND HOLD
              HARMLESS VANGOLD SERVICES, ITS OFFICERS, DIRECTORS, EMPLOYEES,
              AGENTS, DISTRIBUTORS, VENDORS AND AFFILIATES FROM AND AGAINST ANY
              AND ALL THIRD PARTY CLAIMS, DEMANDS, LIABILITIES, COSTS OR
              EXPENSES, INCLUDING REASONABLE ATTORNEYS' FEES, RESULTING OR
              ARISING OUT OF YOUR BREACH OF ANY OF THESE TERMS AND CONDITIONS.{" "}
            </p>
            <p>
              YOU UNDERSTAND AND AGREE THAT YOU WILL BE SOLELY RESPONSIBLE FOR
              ANY DAMAGE TO YOUR COMPUTER OR LOSS OF DATA THAT RESULTS FROM THE
              DOWNLOAD OF ANY MATERIAL IN ANY WAY RELATED TO THE SERVICES AND/OR
              OUR CONTENT. NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN,
              OBTAINED BY YOU FROM US THROUGH THE SERVICES, OR OTHERWISE WILL
              CREATE ANY WARRANTY, REPRESENTATION OR GUARANTEE NOT EXPRESSLY
              STATED IN TERMS AND CONDITIONS.
            </p>
            <p>
              www.vangoldservices.com does not give any warranty or
              representation of any kind with respect to the sites accessible
              through this site. This website is independent of these websites,
              and www.vangoldservices.com has no control or responsibility for
              the information provided or the activities taken by such sites.
              Link between www.vangoldservices.com and other websites do not
              imply that www.vangoldservices.com endorses these sites. You must
              make independent decisions about your interactions or
              communication with other websites.
            </p>

            <h3>SECTION 16: INDEMNIFICATION</h3>
            <p>
              You agree to indemnify, defend, and hold harmless us and our
              employees, officers, directors and agents from all kinds of
              liabilities, expenses and claims, including attorney's fees that
              arise from the misuse of the website by you or made by a third
              party.
            </p>

            <h3>SECTION 17: WAIVER AND SEVERABILITY</h3>
            <p>
              No waiver by Vangold Services of any of terms and conditions set
              forth in these terms and conditions shall be a continuing waiver
              of any other term or conditions, and failure of Vangold Services
              to assert its rights or provisions under these Terms and
              Conditions shall not constitute a waiver of such rights or
              provisions. If any of these clauses of are held by a court to be
              invalid, unenforceable or illegal for any such reason, such
              clauses shall be eliminated or limited to the minimum extent
              possible such that the remaining clauses of these Terms will
              continue in full effect and force.
            </p>
            <h3>SECTION 18: TERMINATION</h3>
            <p>
              These Terms and Conditions are effective unless terminated by you
              or us. By notifying us that you do not want to use our products or
              services or by ceasing the use of our site, you can may terminate
              these Terms and Conditions.
            </p>
            <p>
              If we suspect that you have failed to follow with these provisions
              of Terms and Conditions, we in on our own judgement may terminate
              this agreement anytime without any prior notice.
            </p>
            <p>
              Any fraudulent, illegal or abusive activity may be grounds for the
              termination of your use of this website and maybe referred to
              proper law enforcement authorities. You agree that we shall not be
              liable to you or any other third party for the termination of your
              access to this site.
            </p>
            <p>
              However, all the li abilities and obligations prior to the
              termination shall survive the termination of these Terms and
              Conditions.
            </p>

            <h3>SECTION 19: CONTACT US</h3>
            <p>
              If you have any problems or questions, please email us at
              support@vangoldservices.com .
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

        <div className="terms-mobile">
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
                    <h1>Vangold Terms and Conditions</h1>
                  </div>
                </div>
                <div className="sec1">
                  <h2>TERMS AND CONDITIONS</h2>
                  <p>
                    Vangold Services allows its customers a market place where
                    buyers can find sellers providing different services from
                    its website www.vangoldservices.com.
                  </p>
                  <h3>OVERVIEW</h3>
                  <p>
                    These terms and conditions are issued on behalf of Vangold
                    Services , so any use of "we", "us" and "our" refer to
                    "Vangold Services". Vangold Services offers this website
                    with other information, tools, products and services to the
                    user, conditioned upon the acceptance of these terms and
                    conditions and other policies.
                  </p>
                  <p>
                    {" "}
                    By using our site, purchasing any service or performing any
                    transaction, you agree to be bound by these Terms and
                    Conditions, including other policies mentioned on the
                    website www.vangoldservices.com. These Terms and Conditions
                    are applicable to all the users of this site including
                    browsers, customers, merchants, or any other contributor of
                    the content. If you do not agree to the terms mentioned
                    here, please leave this site immediately.
                  </p>
                  <p>
                    Any new feature or content added to the website shall be
                    subjected to these terms and conditions. Any new update in
                    these terms and conditions will be posted here. It is the
                    responsibility of the user to check periodically, if there
                    has been any change in these terms and conditions or any
                    other policy on this site.
                  </p>
                  <p>
                    All rights or obligations contained in this Agreement shall
                    be severable and distinct, and if one or more of them is
                    declared invalid, void, illegal or unenforceable, the rest
                    shall continue to operate to the extent permitted by law.
                  </p>
                  <h3>SECTION 1: GENERAL CONDITIONS</h3>
                  <p>
                    We reserve the right to refuse any service, product or
                    content available on this website to anyone for any reason.
                    You agree that your content(excluding credit card
                    information) may be transferred over different networks
                    without your permission.
                  </p>
                  <h3>SECTION 2: ACCURACY AND COMPLETENESS OF INFORMATION</h3>
                  <p>
                    We do not take any responsibility for the accuracy and
                    correctness of the information provided on this website. The
                    content provided on this website is for general information
                    only and should not be relied upon while taking decisions
                    solely based on this information, without referring to the
                    primary source of information. It is in our sole discretion
                    to update, modify content on this site anytime without
                    anyone's permission.
                  </p>
                  <h3>SECTION 3: MODIFICATIONS TO THE SERVICES AND PRICES</h3>
                  <p>
                    Prices for our services can be changed anytime without any
                    notice. It is in our sole discretion to modify or
                    discontinue any service without any notice.
                  </p>
                  <h3>SECTION 4: LAW GOVERNING AND JURISDICTION</h3>
                  <p>
                    These Terms are governed, construed, and interpreted in
                    accordance with Nigerian law. You agree to the exclusive
                    jurisdiction of the Nigerian courts for any dispute arising
                    out of your use of this site. Use of this site is not
                    authorized in any jurisdiction that does not give effect to
                    these terms.
                  </p>
                  <h3>SECTION 5: PAYMENTS AND CANCELLATIONS</h3>
                  <p>
                    We accept credit or debit cards. We currently accept Paypal.
                    Visitors should check the processing fee for their credit or
                    debit card company or payment service provider before
                    placing an order. Vangold Services is not responsible for
                    any additional costs incurred as a result of transactions
                    concluded without consultation with the debit/credit card
                    company or any payment provider.
                  </p>
                  <p>
                    You can cancel your order up to the point before payment has
                    been processed by your system.
                  </p>

                  <h3>
                    SECTION 6: ACCURACY OF BILLING AND ACCOUNT INFORMATION
                  </h3>
                  <p>
                    We may refuse any order placed on our website. It is in our
                    sole discretion. In the case where we modify any order or
                    cancel it we may attempt to contact you through the
                    information provided during placing the order. You agree to
                    provide us with correct information while placing the order,
                    including billing address, email, telephone number, credit
                    or debit card number.
                  </p>

                  <h3>SECTION 7: SECURITY AND CONFIDENTIALITY MEASURE</h3>
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
                  <p>
                    Use of this site and systems without authority, including,
                    but not limited to, unauthorized entry in Vangold Services’s
                    systems, online accounts, passwords, or misuse of other
                    information, is strictly prohibited. You may not use this
                    site in any way that could damage, disable, overload or
                    impair this site or service, or interfere with the use and
                    use of this site or services by others. You agree not to
                    engage in any activity related to this site which results in
                    violation of applicable laws and regulations.
                  </p>

                  <h3>SECTION 09: MINORS</h3>
                  <p>
                    You agree that you are at least of the age of 18. Our
                    websites, products and services are intended for people who
                    are 18 years old or older. You agree that you may not use
                    your products for any illegal purpose, including violating
                    any law such as copyright laws.
                  </p>
                  <p>
                    Any minor accessing this site will be assumed to have taken
                    the permission or his/her parents or guardian.
                  </p>

                  <h3>
                    SECTION 10: LINKS TO THIRD-PARTY SITES AND OPTIONAL TOOLS
                  </h3>
                  <p>
                    The site may contain certain services and content by third
                    parties. We are not responsible for the accuracy and
                    correctness of the content or services provided by these
                    third parties and will not be liable for any damage caused
                    by such content, product or service.
                  </p>
                  <p>
                    This website may contain links to third party websites,
                    including advertisers’ websites. The company is not
                    responsible for the privacy policies of those websites or
                    the cookies used by those websites. In addition, as the
                    company does not control such websites and resources, we are
                    not responsible for the availability of such websites or
                    resources, and not responsible for any content,
                    advertisements, products or other kind of materials provided
                    by those websites or resources.
                  </p>
                  <p>
                    You may be provided with third party tools on our site which
                    we neither control nor monitor. We shall not be liable for
                    any damage arising out of use of such third party tools. Use
                    of these tools is at your risk.
                  </p>

                  <h3>
                    SECTION 11: USER COMMENTS. FEEDBACK AND OTHER SUBMISSIONS
                  </h3>
                  <p>
                    If, at our request, you send us any content or without
                    request from us you send us any comments, ideas, plans or
                    proposals(collectively known as "comments"), by email, to
                    physical address or otherwise, you agree that we have all
                    rights regarding those comments, including editing, copying,
                    publishing. We don’t have any obligation to maintain those
                    comments in confidence or pay compensation. You agree that
                    you will post only those comments that you are legally
                    entitled to publish, and reviews that you believe to be
                    true, and that you will not purposely provide false or
                    misleading information through these comments.
                  </p>
                  <p>
                    You agree that your comments will not violate any law,
                    including any copyright laws or rights of the third parties.
                    You also agree that your comments will not consist of any
                    libelous, unlawful and obscene material, or contain any
                    viruses or any other malware.
                  </p>
                  <p>
                    You alone are responsible for the comments you make. Vangold
                    Services will not be liable for any comments and their
                    accuracy. We do not assume any liability arising from your
                    comments.
                  </p>

                  <h3>SECTION 12: PERSONAL INFORMATION</h3>
                  <p>
                    Please refer the Privacy Policy for the information that we
                    collect from our users.
                  </p>

                  <h3>SECTION 13: ERRORS, INACCURACIES AND OMISSIONS</h3>
                  <p>
                    There may be typographical errors, inaccuracies or omission
                    in the content or in the services on the website. It is in
                    the sole discretion of Vangold Services to correct any
                    error, omissions or inaccuracies, and to modify, update or
                    change the information on the website.
                  </p>
                  <p>
                    Vangold Services does not have any obligation to update,
                    modify or change the information in services, including
                    pricing of the services, or any other content.
                  </p>

                  <h3>SECTION 14: CODE OF ETHICS AND CONDUCT</h3>
                  <p>Copyright Ownership</p>
                  <p>
                    The copyright to this website and to the materials on this
                    site (including but not limited to text, images, photos,
                    artwork, music, audio, video, and audiovisual materials on
                    this site) is owned by Vangold Services.
                  </p>
                  <p>Copyright license</p>
                  <p>
                    Vangold Services permits a non-exclusive royalty-free
                    revocable license for the following:
                  </p>
                  <p>
                    • Browse this site and content on website on your computer
                    or mobile device using a web browser.
                  </p>
                  <p>
                    • Copy and save this site and its content in your browser’s
                    cache.
                  </p>
                  <p>
                    • Print pages of this site for personal and non-commercial
                    use.
                  </p>
                  <p>
                    Vangold Services does not grant you any other rights with
                    respect to this website or any material on this site i.e.
                    all other rights are reserved.
                  </p>
                  <p>
                    To avoid any doubt, you must not modify, edit, adapt,
                    convert, post, distribute, transmit or display or reproduce
                    this website or any material on this site (in any form )
                    without the prior written consent of Vangold Services. You
                    can request permission in writing at
                    support@vangoldservices.com .
                  </p>
                  <p>Data Mining</p>
                  <p>
                    Automatic and/or systematic collection of data on this site
                    is strictly prohibited.{" "}
                  </p>
                  <p>Enforcement of copyright</p>
                  <p>
                    Vangold Services takes copyright protection of its content
                    very seriously.
                  </p>
                  <p>
                    If Vangold Services finds that you have used our copyrighted
                    material in violation of the above license, Vangold Services
                    may take legal action against the use of such material for
                    an injunction to stop the use of the material and monetary
                    damages. You may have to pay our legal costs.
                  </p>
                  <p>
                    If you become aware of any use of Vangold Services’s
                    copyrighted material that violates or may violate the above
                    licenses, please let us know by sending an email to
                    support@vangoldservices.com .
                  </p>

                  <h3>SECTION 15: DISCLAIMER AND LIMITATION OF LIABILITY</h3>
                  <p>
                    YOUR USE OF THE SERVICE AND PRODUCT IS AT YOUR SOLE RISK.
                    THE PRODUCTS AND SERVICES ARE PROVIDED ON AN "AS IS" AND "AS
                    AVAILABLE" BASIS. VANGOLD SERVICES MAKES NO REPRESENTATIONS
                    OR WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, AS TO
                    THE OPERATION OF THE SERVICES OR ANY CONTENT, PRODUCTS OR
                    SERVICES INCLUDED ON, OR OTHERWISE MADE AVAILABLE TO YOU
                    THROUGH, THE SERVICES, UNLESS OTHERWISE SPECIFIED IN
                    WRITING, INCLUDING WITHOUT LIMITATION ANY WARRANTIES OF
                    MERCHANTABILITY, FITNESS FOR A PARTICULAR USE OR PURPOSE,
                    NON-INFRINGEMENT, QUIET ENJOYMENT, AND ACCURACY. WE
                    SPECIFICALLY DISCLAIM ANY LIABILITY ASSOCIATED WITH THE USE
                    OF THE PRODUCTS AND YOU AGREE THAT YOU WILL NOT SUE VANGOLD
                    SERVICES FOR ANY CLAIM RELATED TO ANY PRODUCTS PURCHASED
                    THROUGH THE SERVICES. YOU AGREE TO INDEMNIFY, DEFEND AND
                    HOLD HARMLESS VANGOLD SERVICES, ITS OFFICERS, DIRECTORS,
                    EMPLOYEES, AGENTS, DISTRIBUTORS, VENDORS AND AFFILIATES FROM
                    AND AGAINST ANY AND ALL THIRD PARTY CLAIMS, DEMANDS,
                    LIABILITIES, COSTS OR EXPENSES, INCLUDING REASONABLE
                    ATTORNEYS' FEES, RESULTING OR ARISING OUT OF YOUR BREACH OF
                    ANY OF THESE TERMS AND CONDITIONS.{" "}
                  </p>
                  <p>
                    YOU UNDERSTAND AND AGREE THAT YOU WILL BE SOLELY RESPONSIBLE
                    FOR ANY DAMAGE TO YOUR COMPUTER OR LOSS OF DATA THAT RESULTS
                    FROM THE DOWNLOAD OF ANY MATERIAL IN ANY WAY RELATED TO THE
                    SERVICES AND/OR OUR CONTENT. NO ADVICE OR INFORMATION,
                    WHETHER ORAL OR WRITTEN, OBTAINED BY YOU FROM US THROUGH THE
                    SERVICES, OR OTHERWISE WILL CREATE ANY WARRANTY,
                    REPRESENTATION OR GUARANTEE NOT EXPRESSLY STATED IN TERMS
                    AND CONDITIONS.
                  </p>
                  <p>
                    www.vangoldservices.com does not give any warranty or
                    representation of any kind with respect to the sites
                    accessible through this site. This website is independent of
                    these websites, and www.vangoldservices.com has no control
                    or responsibility for the information provided or the
                    activities taken by such sites. Link between
                    www.vangoldservices.com and other websites do not imply that
                    www.vangoldservices.com endorses these sites. You must make
                    independent decisions about your interactions or
                    communication with other websites.
                  </p>

                  <h3>SECTION 16: INDEMNIFICATION</h3>
                  <p>
                    You agree to indemnify, defend, and hold harmless us and our
                    employees, officers, directors and agents from all kinds of
                    liabilities, expenses and claims, including attorney's fees
                    that arise from the misuse of the website by you or made by
                    a third party.
                  </p>

                  <h3>SECTION 17: WAIVER AND SEVERABILITY</h3>
                  <p>
                    No waiver by Vangold Services of any of terms and conditions
                    set forth in these terms and conditions shall be a
                    continuing waiver of any other term or conditions, and
                    failure of Vangold Services to assert its rights or
                    provisions under these Terms and Conditions shall not
                    constitute a waiver of such rights or provisions. If any of
                    these clauses of are held by a court to be invalid,
                    unenforceable or illegal for any such reason, such clauses
                    shall be eliminated or limited to the minimum extent
                    possible such that the remaining clauses of these Terms will
                    continue in full effect and force.
                  </p>
                  <h3>SECTION 18: TERMINATION</h3>
                  <p>
                    These Terms and Conditions are effective unless terminated
                    by you or us. By notifying us that you do not want to use
                    our products or services or by ceasing the use of our site,
                    you can may terminate these Terms and Conditions.
                  </p>
                  <p>
                    If we suspect that you have failed to follow with these
                    provisions of Terms and Conditions, we in on our own
                    judgement may terminate this agreement anytime without any
                    prior notice.
                  </p>
                  <p>
                    Any fraudulent, illegal or abusive activity may be grounds
                    for the termination of your use of this website and maybe
                    referred to proper law enforcement authorities. You agree
                    that we shall not be liable to you or any other third party
                    for the termination of your access to this site.
                  </p>
                  <p>
                    However, all the li abilities and obligations prior to the
                    termination shall survive the termination of these Terms and
                    Conditions.
                  </p>

                  <h3>SECTION 19: CONTACT US</h3>
                  <p>
                    If you have any problems or questions, please email us at
                    support@vangoldservices.com .
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
                      <a href="Mailto:vangoldtoken@vangold.finance">
                        Help center
                      </a>
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
