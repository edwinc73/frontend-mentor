import "./ProductPage.scss";

import ImageGallery from "../ImageGallery/ImageGallery";
import ProductDescription from "../ProductDescription/ProductDescription";

export default function ProductPage() {
  return (
    <>
      <div className="container">
        <ImageGallery></ImageGallery>
        <ProductDescription></ProductDescription>
      </div>
    </>
  );
}
