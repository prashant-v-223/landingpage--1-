"use client"
import React, { useEffect } from "react";
import "./Interoperability.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from "react-slick";
const Interoperability = () => {

  const settings = {
    speed: 500,
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    })
  }, [])
  return (
    <div>
      <div className="container" data-aos="fade-up">
        <div class="blocks-layout align-center mt-12">
          <div class="h2-headline-layout">
            <div
              data-w-id="6b879517-04c9-13ef-4e3d-b8ca000fbe5b"
              style={{
                opacity: 1,
                transform:
                  "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}
              class="badge-item"
            >
              <div class="badge-bg">
                <div class="badge-content">
                  <div className="text-white">Go to Dashboard</div>
                </div>
              </div>
            </div>
            <div class="h2-headline">
              <h2
                data-w-id="6b879517-04c9-13ef-4e3d-b8ca000fbe62"
                style={{
                  opacity: 1,
                  transform:
                    "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                }}
              >
                {/* One Wallet. Full&nbsp;Interoperability. */}
                Create your network seamlessly
              </h2>
              <p
                data-w-id="6b879517-04c9-13ef-4e3d-b8ca000fbe64"
                style={{
                  opacity: 1,
                  transform:
                    "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                }}
              >
                You can invite your friends to get 10% referral & also get a chance to become a group leader with 15% referral reward on every member under your team
              </p>
            </div>
          </div>
          <div class="block-item is-icns p-0 df-item_newtop">
            <div class="bi-content is-icns df-item_newtop">

              <div
                data-w-id="b3fd95f7-10b2-f103-e2b0-e28f97e2adb1 flex justify-between"
                className="df-item md:flex justify-around df-item_new md:px-10"
              >
                <div className="md:w-1/2 ">
                  <h3 className="text-3xl font-bold mt-5 md:mt-0 text-white  text-md-start "> <span className="text-[#9B59B6]">Copywing </span> <span className="text-white">bonus presale</span></h3>
                  <p className="text-white mt-3 max-w-[350px] text-md-start ">
                    If you invite anyone on the platform you will be rewarded with 10% referral bonus.
                    You can become a group leader to earn referral commission of 15%.
                  </p>

                </div>
                <div className="max-w-[200px] mt-4  md:mt-0 mx-auto md:mx-0">
                  <img src="/binance.png" />
                </div>
              </div>
            </div>
            <div class="bi-background">
              <img
                src="https://assets-global.website-files.com/63eb7ddf41cf5b1c8fdfbc74/63f2f628327ae95ef7a63caf_icns-shape-illustration-sq.svg"
                loading="lazy"
                alt=""
                class="icns-image"
              />
              <div class="icns-img_line"></div>
              <div class="icns-img_line btm"></div>
              <div class="block-fade"></div>
              <div class="gradient-bg w-embed isLoaded">
                <canvas
                  class="canvas-item-2 isLoaded"
                  id="dg-gradient-canvas-2"
                  width={1366}
                  height={600}
                ></canvas>
              </div>
            </div>
            <div class="bi-background is-devs"><div class="grid-css"></div><div id="stars-devs" class="stars"><canvas class="particles-js-canvas-el" width="894" height="424" ></canvas></div></div>
          </div>
          {/* <div data-aos="fade-up" class="blocks-layout-2items">
          <div class="block-item is-small sec">
            <div class="bi-content_small">
              <img
                src="https://assets-global.website-files.com/63eb7ddf41cf5b1c8fdfbc74/63f4b04c2ff7a74f76d2d468_Security-img.svg"
                loading="lazy"
                alt="Multiple Login Options"
                class="secure-image"
              />
              <div class="bi-content_text">
                <h3>
                  Multiple Login Options
                  <br />
                </h3>
                <p class="is-secure-txt">
                  Log in with Google account, scan QR code to sign in to any
                  DApps, or connect your hardware wallets. Keplr supports a
                  variety of login options to extend its connectivity to other
                  wallets and networks.
                </p>
              </div>
              <div class="hero-features-checks is-secure">
                <div class="secure-features">
                  <div class="features-item">
                    <img
                      src="https://assets-global.website-files.com/63eb7ddf41cf5b1c8fdfbc74/63f422514744d5e6e15cfe62_k-icon-keys.svg"
                      loading="lazy"
                      alt="Self Custodial"
                      class="icon-medium"
                    />
                    <div>Self Custodial</div>
                  </div>
                  <div class="features-item">
                    <img
                      src="https://assets-global.website-files.com/63eb7ddf41cf5b1c8fdfbc74/63f0b0342ad2dc8c27351008_k-icon-shield.svg"
                      loading="lazy"
                      alt="Keplr Non-Custodial Wallet"
                      class="icon-medium"
                    />
                    <div>Secure</div>
                  </div>
                  <div class="features-item">
                    <img
                      src="https://assets-global.website-files.com/63eb7ddf41cf5b1c8fdfbc74/63f0b034e2860cd37047e62d_k-icon-wallet.svg"
                      loading="lazy"
                      alt="Keplr Hardware wallet support
                           "
                      class="icon-medium"
                    />
                    <div>Flexible</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="bi-background is-sec-bg">
              <div id="stars-icns" class="stars">
                <canvas
                  class="particles-js-canvas-el"
                  width="434"
                  height="513"
                ></canvas>
              </div>
              <div class="grid-css"></div>
            </div>
          </div>
          <div class="block-item is-small mt-5 md:mt-0">
            <div class="bi-content_small is-skiff">
              <div class="bi-content_subhead">
                <img
                  src="https://assets-global.website-files.com/63eb7ddf41cf5b1c8fdfbc74/63ef3377854a63c6593922bb_logo-partners-skiff.svg"
                  loading="lazy"
                  alt="Keplr and Skiff partnership"
                  class="keplr-logo-partners"
                />
              </div>
              <div class="bi-content_text">
                <h3>
                  End-to-End Encrypted Productivity&nbsp;Tools
                  <br />
                </h3>
                <p class="is-skiff-txt">
                  Evolve your work environment into a Web3&nbsp;productivity
                  powerhouse.
                  <br />
                </p>
              </div>
              <div class="bi-content_buttons is--skiff-btns">
                <a
                  href="https://skiff.com/"
                  target="_blank"
                  class="button hero no-glow w-inline-block flex"
                >
                  <div class="btn-text-small">Get Skiff Free</div>
                  <div class="btn-arrow-item">
                    <div class="icon-small w-embed">
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.8512 8.11253L8.5179 13.4459L7.5679 12.5125L11.3012 8.77919L3.18457 8.7792L3.18457 7.44586L11.3012 7.44586L7.5679 3.71253L8.5179 2.7792L13.8512 8.11253Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </a>
                <div class="skiff-features">
                  <div class="hero-features-line">
                    <div class="features-item">
                      <img
                        src="https://assets-global.website-files.com/63eb7ddf41cf5b1c8fdfbc74/63ef350e854a6331ca394115_k-icon-calendar-white.svg"
                        loading="lazy"
                        alt="Skiff Calendar"
                        class="icon-medium"
                      />
                      <div>Calendar</div>
                    </div>
                    <div class="features-item">
                      <img
                        src="https://assets-global.website-files.com/63eb7ddf41cf5b1c8fdfbc74/63ef350e550ec9f77fc4227f_k-icon-storage-white.svg"
                        loading="lazy"
                        alt="Skiff Storage
                              "
                        class="icon-medium"
                      />
                      <div>Storage</div>
                    </div>
                  </div>
                  <div class="hero-features-line">
                    <div class="features-item">
                      <img
                        src="https://assets-global.website-files.com/63eb7ddf41cf5b1c8fdfbc74/63ef350e7895ffd0be0879f8_k-icon-mail-white.svg"
                        loading="lazy"
                        alt="Skiff Mail
                              "
                        class="icon-medium"
                      />
                      <div>Mail</div>
                    </div>
                    <div class="features-item">
                      <img
                        src="https://assets-global.website-files.com/63eb7ddf41cf5b1c8fdfbc74/63ef350ea31e9882f2a1c2e1_k-icon-white.svg"
                        loading="lazy"
                        alt="Skiff Pages"
                        class="icon-medium"
                      />
                      <div>Pages</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="bi-background is-skiff-bg">
              <div class="bg-image-skiff">
                <img
                  src="https://assets-global.website-files.com/63eb7ddf41cf5b1c8fdfbc74/63f3063854239603c9bdb7fe_skiff-mail.svg"
                  loading="lazy"
                  alt="Skiff mail"
                  class="skiff-image_icon"
                />
                <img
                  src="https://assets-global.website-files.com/63eb7ddf41cf5b1c8fdfbc74/63f306380314aa822049f88f_skiff-cal.svg"
                  loading="lazy"
                  alt="Skiff Calendar"
                  class="skiff-image_icon"
                />
                <img
                  src="https://assets-global.website-files.com/63eb7ddf41cf5b1c8fdfbc74/63f3063849b46c62dbca6796_skiff-pages.svg"
                  loading="lazy"
                  alt="Skiff Pages"
                  class="skiff-image_icon"
                />
                <img
                  src="https://assets-global.website-files.com/63eb7ddf41cf5b1c8fdfbc74/63f30639950c48c14bfadee5_skiff-storage.svg"
                  loading="lazy"
                  alt="Skiff Storage"
                  class="skiff-image_icon"
                />
              </div>
              <div id="stars-skiff" class="stars">
                <canvas
                  class="particles-js-canvas-el"
                  width="434"
                  height="513"
                ></canvas>
              </div>
              <div class="grid-css"></div>
            </div>
          </div>
        </div> */}
        </div>
      </div>

      <div className="slider-container  px-md-5 mx-md-5 p-0"  >
        <div
          data-w-id="5b6da96c-f3bc-7ac5-0a8a-bf7907321711"
          className="s2-info-container pb-5"
          style={{
            willChange: "opacity",
            transform:
              "translate3d(0px, 75px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            transformStyle: "preserve-3d",
          }}
        >
          <h2 className="h2"><span style={
            {
              color: '#775EFB'
            }
          }>TDF Token</span> presale phases</h2>
          <p className="p is-s2-p pb-5">
            The presale will be conducted in multiple phases, each with its own benefits and incentives.
            Here’s a detailed overview of the presale phases
          </p>
        </div>
        <div className="py-5">
          <Slider {...settings}>
            <div className="">
              <img
                src="/card1.png"
                loading="lazy"
                alt=""
                className="m-auto d-block"
                style={{
                  width: 350, height: 400
                }}
              />
            </div>
            <div className="">
              <img
                src="/Faster.png"
                loading="lazy"
                alt=""
                className="m-auto d-block" style={{
                  width: 350, height: 400
                }}

              />
            </div>
            <div className="">
              <img
                src="/card3.png"
                loading="lazy"
                alt=""
                className="m-auto d-block" style={{
                  width: 350, height: 400
                }}
              />
            </div>
            <div className="">
              <img
                src="/card1.png"
                loading="lazy"
                alt="" style={{
                  width: 350, height: 400
                }}
                className="m-auto d-block"
              />
            </div>
          </Slider>
        </div>
        <div className="row px-3 py-5 my-md-5">
          <div className="col-12 col-md-4">
            <h3 className="h2" style={{
              fontSize: 36,
              lineHeight: "41.28px"
            }}><span style={
              {
                color: '#775EFB',
                fontSize: 36
              }
            }>TDF Token</span>  dividend
              growth predictions</h3>
            <p className="p" style={{
              color: "#C3C3C3"
            }}>
              The presale will be conducted in multiple
              phases, each with its own benefits and
              incentives. Here’s a detailed overview
              of the presale phases
            </p>
            <p className="p my-1" style={{
              color: "#775EFB"
            }}>
              Time in months
            </p>
            <p className="p my-1" style={{
              color: "#C3C3C3"
            }}>
              TDF Tokens
            </p>
          </div>
          <div className="col-12 col-md-8">
            <p className="px-md-2" style={{ color: "#fff" }}><span style={
              {
                color: '#775EFB'
              }
            }>TDF Token</span>  Dividend Prediction in X Calculation for PHASE 1</p>
            <div className="row p-2 p-md-4 ">
              <div className="col-6 col-md-4" style={{ padding: 5 }}>
                <div className=" card-1 ">
                  <div className="h3 m-0" style={{
                    color: "#9683FF"
                  }}>12 Months</div>
                  <div>
                    <h3 style={{ color: "#fff" }}>6</h3>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-4" style={{ padding: 5 }}>
                <div className=" card-1 ">
                  <div className="h3 m-0" style={{
                    color: "#9683FF"
                  }}>18 Months</div>
                  <div>
                    <h3 style={{ color: "#fff" }}>10</h3>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-4" style={{ padding: 5 }}>
                <div className=" card-1 ">
                  <div className="h3 m-0" style={{
                    color: "#9683FF"
                  }}>24 Months</div>
                  <div>
                    <h3 style={{ color: "#fff" }}>15</h3>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-4" style={{ padding: 5 }}>
                <div className=" card-1 ">
                  <div className="h3 m-0" style={{
                    color: "#9683FF"
                  }}>30 Months</div>
                  <div>
                    <h3 style={{ color: "#fff" }}>21</h3>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-4" style={{ padding: 5 }}>
                <div className=" card-1 ">
                  <div className="h3 m-0" style={{
                    color: "#9683FF"
                  }}>36 Months</div>
                  <div>
                    <h3 style={{ color: "#fff" }}>28</h3>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-4" style={{ padding: 5 }}>
                <div className=" card-1 ">
                  <div className="h3 m-0" style={{
                    color: "#9683FF"
                  }}>42 Months</div>
                  <div>
                    <h3 style={{ color: "#fff" }}>36</h3>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-4" style={{ padding: 5 }}>
                <div className=" card-1 ">
                  <div className="h3 m-0" style={{
                    color: "#9683FF"
                  }}>48 Months</div>
                  <div>
                    <h3 style={{ color: "#fff" }}>45</h3>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-4" style={{ padding: 5 }}>
                <div className=" card-1 ">
                  <div className="h3 m-0" style={{
                    color: "#9683FF"
                  }}>54 Months</div>
                  <div>
                    <h3 style={{ color: "#fff" }}>55</h3>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-4" style={{ padding: 5 }}>
                <div className=" card-1 ">
                  <div className="h3 m-0" style={{
                    color: "#9683FF"
                  }}>60 Months</div>
                  <div>
                    <h3 style={{ color: "#fff" }}>75</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interoperability;
