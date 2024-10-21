import React from "react";
import { Col } from "react-bootstrap";
import { CustomText } from "./CustomText";
import ProductCardImage from "./productCardImage/ProductCardImage";

const CustomDetailGroup = ({
  itemKey,
  keyClasName,
  valueClassName,
  itemValue,
  className,
  valueType,
  fontFamily,
  fontWeight,
  keyStyleCOlor,
  keyFontSize,
  valueFontSize,
  imageSrc,
}) => {
  return (
    <Col
      lg={12}
      md={12}
      className={
        className
          ? className
          : "px-4 py-2 d-flex gap-3 border-bottom align-items-center "
      }
    >
      <CustomText
        fontFamily={fontFamily ? fontFamily : "Inter"}
        fontSize={keyFontSize ? keyFontSize : 14}
        fontWeight={fontWeight ? fontWeight : 500}
        textClassName={keyClasName}
        text={itemKey}
        cNColor={keyStyleCOlor}
      />
      {valueType === "picture" ? (
        <ProductCardImage src={imageSrc} />
      ) : (
        <CustomText
          fontFamily={fontFamily ? fontFamily : "Inter"}
          fontSize={valueFontSize ? valueFontSize : 14}
          fontWeight={fontWeight ? fontWeight : 400}
          textClassName={valueClassName}
          text={itemValue}
          cNColor="primary"
        />
      )}
    </Col>
  );
};

export default CustomDetailGroup;
