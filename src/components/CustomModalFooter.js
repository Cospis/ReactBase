import React from "react";
import { Col, Modal } from "react-bootstrap";
import CustomButton from "./CustomButton";
import { CustomText } from "./CustomText";
import ProductCardImage from "./productCardImage/ProductCardImage";

const CustomModalFooter = ({
  button1disabled,
  button1Variant,
  button1Type,
  button1Text,
  button1onClick,
  button1Loading,
  button2Loading,
  button2disabled,
  button2Variant,
  button2Type,
  button2Text,
  button2onClick,
}) => {
  return (
    <Col className="d-flex justify-content-between">
      <CustomButton
        variant={button1Variant}
        type={button1Type}
        disabled={button1disabled}
        text={button1Text}
        loading={button1Loading}
        onClick={button1onClick}
      />

      {button1Text ? (
        <CustomButton
          variant={button2Variant}
          type={button2Type}
          disabled={button2disabled}
          text={button2Text}
          loading={button2Loading}
          onClick={button2onClick}
        />
      ) : (
        <></>
      )}
    </Col>
  );
};

export default CustomModalFooter;
