import "./ProductPage.scss";

import ImageGallery from "../ImageGallery/ImageGallery";
import ProductDescription from "../ProductDescription/ProductDescription";
import { productInfo } from "../../productInfo.js";

export default function ProductPage() {
  const { description, image, discount, price, name, id } = productInfo[0];
  const finalPrice = price * discount;
  return (
    <>
      <section id="productPage-section" className="container">
        <ImageGallery image={image}></ImageGallery>
        <ProductDescription
          id={id}
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
