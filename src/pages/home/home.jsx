import axios from "axios";
import { useEffect, useState } from "react";

import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";
import style from "./home.module.css";




async function getUser() {
  try{
    const response = await axios.get(
      "https://api.escuelajs.co/api/v1/products?offset=0&limit=6"
      );


    
    return response;
  } catch (error) {
    console.error(error);
  }
}




function Home() {
  const [products, setProducts] = useState([]);

  


  console.log(products);
  
  const displayItems = async () => {
    const response = await getUser();
    if (response) {
      setProducts(response.data);
    }
  };


useEffect(() => {
  displayItems();
}, []);
  


  return (
    <>
      <Header />


      <div className={style.home}>
        <div className={style.homeGifImage}>
        </div>
        <p className={style.text}>
    Calvin Klein is a modern American classic. Renewed, authentic style icons. Timeless feminine silhouettes have been updated to create bold looks from American new style icons. The progressive cut reinterprets the traditional elements of men clothing, presenting them as functional and lightweight basics.
    </p>
    <p2 className={style.text2}>
      Categories
    </p2>
      <div className={style.homeapi}>
      {products.map((product) => (
        <div className={style.images} key={product.id}>
          <p>{product.title}</p>
          <div className={style.imgProducts}>
          <img className={style.imgProduct} src={product.images[0]} alt={product.title} style={{ width: "300px" }} />
          </div>
        </div>
      ))}
      </div>
      <section>
      <div className={style.topproducts}>
      <p3 className={style.text3}>
        Top products
          </p3>
          
          </div>
          <div className={style.homeapi}>
      {products.map((category) => (
        <div className={style.images} key={category.id}>
          <p>{category.title}</p>
          <div className={style.imgCategory}>
          <img className={style.imgCategory} src={category.images[0]} alt={category.title} style={{ width: "300px" }} />
          </div>
        </div>
      ))}
      </div>

          </section>
      </div>
     


         
      <Footer />


      
    </>
  );
}

export default Home;
