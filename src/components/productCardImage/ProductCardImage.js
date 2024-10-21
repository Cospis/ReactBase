const ProductCardImage = ({ src }) => {
  return (
    <div className="img">
      <img src={src} alt="Card-img" style={{ width: "100px" }}></img>
    </div>
  );
};

export default ProductCardImage;
