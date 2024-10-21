import React from "react";
import { Button, Card, Col, Row, Spinner } from "react-bootstrap";
import CustomSettingsInput from "./CustomSettingsInput";

import { CustomText } from "./CustomText";
const CustomSettingsItem = ({
  text,
  card,
  id,
  type,
  title,
  placeholder,
  icon,
}) => {
  return (
    <Row className="px-3 py-2 align-items-center">
      <Col lg={6} md={6} sm={12}>
        <CustomText
          fontFamily={"Montserrat"}
          fontSize={20}
          fontWeight={600}
          text={text}
          cNColor="primary"
        />
      </Col>
      <Col lg={6} md={6} sm={12}>
        <CustomSettingsInput
          variant="setting"
          type={type}
          required={true}
          id={id}
          placeholder={placeholder}
          // onChange={formik?.handleChange}
          leftIcon={icon}
          // leftIcon={<EmailSvg />}
          // error={formik?.errors?.email}
        />
      </Col>
    </Row>
  );
};

export default CustomSettingsItem;
