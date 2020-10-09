import React from "react";
import Product from "../Product/Product";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220).jpg"
          alt="Amazon_BG"
        />
        <div className="home__row">
          <Product
            id="31231231"
            title="The lean startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61etD4-IrPL._AC_SL1200_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4211412"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/612XNdgsYpL._AC_SL1500_.jpg"
          />
          <Product
            id="4819419"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51hZ1Ix1bdL._AC_SL1000_.jpg"
          />
          <Product
            id="104081281"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81FH2j7EnJL._AC_SL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4112415"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71916r38cNL._AC_SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
