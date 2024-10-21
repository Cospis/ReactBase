import React from "react";
import { Col } from "react-bootstrap";
import { CustomText } from "./CustomText";
import ProductCardImage from "./productCardImage/ProductCardImage";

const CustomModalDetailGroup = ({
  itemKey,
  keyClasName,
  valueClassName,
  itemValue,
  className,
  valueType,
  imageSrc,
}) => {
  return (
    <Col
      lg={12}
      md={12}
      className={className ? className : "d-flex justify-content-between p-1"}
    >
      <CustomText
        fontFamily={"Poppins"}
        fontSize={14}
        fontWeight={600}
        className={keyClasName}
        text={itemKey}
      />
      {valueType === "picture" ? (
        <ProductCardImage src={imageSrc} />
      ) : (
        <CustomText
          fontFamily={"Poppins"}
          fontSize={14}
          fontWeight={400}
          className={valueClassName}
          text={itemValue}
        />
      )}
    </Col>
  );
};

export default CustomModalDetailGroup;
