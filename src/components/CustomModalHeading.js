import React from "react";
import { Col, Modal } from "react-bootstrap";
import CustomButton from "./CustomButton";
import { CustomText } from "./CustomText";
import ProductCardImage from "./productCardImage/ProductCardImage";

const CustomModalHeading = ({
  title,
  buttonVariant,
  buttonType,
  buttonText,
  onClick,
}) => {
  return (
    <>
      <Modal.Title>
        {" "}
        <CustomText
          fontFamily={"Poppins"}
          fontSize={20}
          fontWeight={600}
          text={title}
          cNColor="primary"
        />
      </Modal.Title>
      {buttonText ? (
        <CustomButton
          variant={buttonVariant}
          type={buttonType}
          text={buttonText}
          onClick={onClick}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default CustomModalHeading;
