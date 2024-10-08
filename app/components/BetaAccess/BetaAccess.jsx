"use client"
import React, {useEffect} from "react";
import "./BetaAccess.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
const BetaAccess = () => {
   
  useEffect(() => {
    AOS.init({
         duration: 800,
         once: false,
       })
 }, [])
  return (
     <div data-aos="fade-up" className="relative mx-6">
    <div class="block-item my-10   ">
      <div id="validator" class="anchor"></div>
      <div class="bi-content is-valid-cont dem ">
        <div class="badge-item is--small">
          <div class="badge-bg">
            <div class="badge-content">
              <p class="btn-text-small color-platinum-100">Beta Access</p>
            </div>
          </div>
        </div>
        <div class="bi-content_text " >
          <h3>
            Copywing Presale Dashboard
            <br />
          </h3>
          <p>
            Get all information about your holdings, Presale dividend, Purchased CWN & referral rewards with Blockchain connectivity
          </p>
          <div class="hero-features-checks">
            <div class="features-item">
              {/* <img
                src="https://assets-global.website-files.com/63eb7ddf41cf5b1c8fdfbc74/63eee072981a384322261810_k-icon-governance-white.svg"
                loading="lazy"
                alt="Keplr Dashboard Cast your vote and connect all of your validators in one place"
                class="icon-medium"
              /> */}
              <div>Web3 connectivity</div>
            </div>
            <div class="features-item">
              {/* <img
                src="https://assets-global.website-files.com/63eb7ddf41cf5b1c8fdfbc74/63eee07292f26d853dcd0bd8_k-icon-comments-white.svg"
                loading="lazy"
                alt="Keplr Dashboard Read the Comments"
                class="icon-medium"
              /> */}
              <div>Referral details</div>
            </div>
            <div class="features-item">
              {/* <div class="icon-medium is-white w-embed">
              {/* <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.9001 7.98511C15.3168 7.98511 14.821 7.78094 14.4126 7.37261C14.0043 6.96429 13.8001 6.46846 13.8001 5.88513C13.8001 5.30181 14.0043 4.80598 14.4126 4.39765C14.821 3.98932 15.3168 3.78516 15.9001 3.78516C16.4834 3.78516 16.9793 3.98932 17.3876 4.39765C17.7959 4.80598 18.0001 5.30181 18.0001 5.88513C18.0001 6.46846 17.7959 6.96429 17.3876 7.37261C16.9793 7.78094 16.4834 7.98511 15.9001 7.98511ZM5.40023 16.385C5.01523 16.385 4.68565 16.2479 4.41149 15.9738C4.13733 15.6996 4.00024 15.37 4.00024 14.985V6.58512C4.00024 6.20013 4.13733 5.87055 4.41149 5.59639C4.68565 5.32222 5.01523 5.18514 5.40023 5.18514H12.4701C12.4235 5.41847 12.4001 5.6518 12.4001 5.88513C12.4001 6.11846 12.4235 6.35179 12.4701 6.58512C12.5518 6.95845 12.686 7.30553 12.8726 7.62636C13.0593 7.94719 13.2868 8.2301 13.5551 8.4751L11.0002 10.0851L5.40023 6.58512V7.98511L11.0002 11.4851L14.6926 9.17509C14.891 9.24509 15.0893 9.29759 15.2876 9.33259C15.4859 9.36759 15.6901 9.38509 15.9001 9.38509C16.2734 9.38509 16.6409 9.32676 17.0026 9.21009C17.3643 9.09343 17.6968 8.91843 18.0001 8.6851V14.985C18.0001 15.37 17.863 15.6996 17.5888 15.9738C17.3147 16.2479 16.9851 16.385 16.6001 16.385H5.40023Z"
                    fill="currentColor"
                  ></path>
                </svg> */}
              {/* </div>  */}
              <div>
                Portfolio mapping
                <br />
              </div>
            </div>
            <div class="features-item">
              {/* <div class="icon-medium is-white w-embed">
                {/* <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.9001 7.98511C15.3168 7.98511 14.821 7.78094 14.4126 7.37261C14.0043 6.96429 13.8001 6.46846 13.8001 5.88513C13.8001 5.30181 14.0043 4.80598 14.4126 4.39765C14.821 3.98932 15.3168 3.78516 15.9001 3.78516C16.4834 3.78516 16.9793 3.98932 17.3876 4.39765C17.7959 4.80598 18.0001 5.30181 18.0001 5.88513C18.0001 6.46846 17.7959 6.96429 17.3876 7.37261C16.9793 7.78094 16.4834 7.98511 15.9001 7.98511ZM5.40023 16.385C5.01523 16.385 4.68565 16.2479 4.41149 15.9738C4.13733 15.6996 4.00024 15.37 4.00024 14.985V6.58512C4.00024 6.20013 4.13733 5.87055 4.41149 5.59639C4.68565 5.32222 5.01523 5.18514 5.40023 5.18514H12.4701C12.4235 5.41847 12.4001 5.6518 12.4001 5.88513C12.4001 6.11846 12.4235 6.35179 12.4701 6.58512C12.5518 6.95845 12.686 7.30553 12.8726 7.62636C13.0593 7.94719 13.2868 8.2301 13.5551 8.4751L11.0002 10.0851L5.40023 6.58512V7.98511L11.0002 11.4851L14.6926 9.17509C14.891 9.24509 15.0893 9.29759 15.2876 9.33259C15.4859 9.36759 15.6901 9.38509 15.9001 9.38509C16.2734 9.38509 16.6409 9.32676 17.0026 9.21009C17.3643 9.09343 17.6968 8.91843 18.0001 8.6851V14.985C18.0001 15.37 17.863 15.6996 17.5888 15.9738C17.3147 16.2479 16.9851 16.385 16.6001 16.385H5.40023Z"
                    fill="currentColor"
                  ></path>
                </svg> */}
              {/* //</div>  */}
              <div>
                ID Assigning feature
                <br />
              </div>
            </div>
          </div>
        </div>
        <div class="bi-content_buttons">
          <a
            href="https://presale.copywing.io"
            target="_blank"
            class="button hero no-glow w-inline-block flex"
          >
            <div class="btn-text-small">
              Buy CWN
              <br />
            </div>
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
        </div>
      </div>
      <div class="bi-background is-val-bg">
        <div class="grid-css"></div>
        <div class="bg-item_image is-valid  hidden_101">
          <img
            src="/dashboardss.png"
            // loading="lazy"
            // srcset="https://assets-global.website-files.com/63eb7ddf41cf5b1c8fdfbc74/63eee33b9254f177bd27794c_block-ui-image-validator-p-500.png 500w, https://assets-global.website-files.com/63eb7ddf41cf5b1c8fdfbc74/63eee33b9254f177bd27794c_block-ui-image-validator-p-800.png 800w, https://assets-global.website-files.com/63eb7ddf41cf5b1c8fdfbc74/63eee33b9254f177bd27794c_block-ui-image-validator-p-1080.png 1080w, https://assets-global.website-files.com/63eb7ddf41cf5b1c8fdfbc74/63eee33b9254f177bd27794c_block-ui-image-validator.webp 1950w"
            // sizes="(max-width: 479px) 89vw, (max-width: 767px) 97vw, (max-width: 991px) 351.78125px, (max-width: 1439px) 450.5625px, 534.71875px"
            // alt="Keplr Validator Dashboard "
            class="bi-image_ui is-valid-img "
          />
        </div>
        <div id="stars-validator" class="stars">
          <canvas
            class="particles-js-canvas-el"
            width="894"
            height="497"
            // style="width: 100%; height: 100%;"
          ></canvas>
        </div>
      </div>
      
    </div>
    </div>
  );
};

export default BetaAccess;
