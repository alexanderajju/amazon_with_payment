import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          //   src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Xiaomi/Redmi_8A_Dual/7499/V176845577_IN_WLME_Redmi_8A_Dual_LandingPage_1500x600._CB406191253_.jpg"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
            price={499.25}
            img="https://m.media-amazon.com/images/I/81jgCiNJPUL._AC_UY218_.jpg"
            rating={5}
          />
          <Product
            title="Kenwood FDM301SS Multipro Compact (800 Watt) Foodprocessor"
            price={16421}
            rating={4}
            img="https://m.media-amazon.com/images/I/71DbzDlY7rL._AC_UY218_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            title="Samsung 23.5 inch (59.8 cm) Curved LED Backlit Computer Monitor "
            price={9699}
            rating={5}
            img="https://m.media-amazon.com/images/I/71nplbAMwzL._AC_UY218_.jpg"
          />
          <Product
            title="Echo Dot (3rd Gen) – New and improved smart speaker with Alexa (Black)"
            price={3499}
            rating={5}
            img="https://m.media-amazon.com/images/I/61EXU8BuGZL._AC_UY218_.jpg"
          />
          <Product
            title="Apple iPad (10.2-inch, Wi-Fi, 32GB) - Space Grey (Latest Model)"
            price={29900}
            img="https://m.media-amazon.com/images/I/71TJA+sJv2L._AC_UY218_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            title="Samsung 23.5 inch (59.8 cm) Curved LED Backlit Computer Monitor - Full HD, VA Panel with VGA, HDMI, Audio Ports - LC24F390FHWXXL (Black)"
            img="https://m.media-amazon.com/images/I/71nplbAMwzL._AC_UY218_.jpg"
            price={9699}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
