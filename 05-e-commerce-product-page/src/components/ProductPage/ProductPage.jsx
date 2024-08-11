import "./ProductPage.scss";

import ImageGallery from "../ImageGallery/ImageGallery";
import ProductDescription from "../ProductDescription/ProductDescription";
import { productInfo } from "../../productInfo.js";

export default function ProductPage() {
  const { description, image, discount, price, name } = productInfo[0];
  const finalPrice = price * discount;
  return (
    <>
      <section id="productPage-section" className="container">
        <ImageGallery image={image}></ImageGallery>
        <ProductDescription
          description={description}
          discount={discount}
          name={name}
          price={price}
          finalPrice={finalPrice}
        ></ProductDescription>
      </section>
    </>
  );
}
