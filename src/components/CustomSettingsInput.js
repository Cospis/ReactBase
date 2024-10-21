import React from "react";
import { InputGroup, Button, Form, Image } from "react-bootstrap";
import ReactSelect from "react-select";
import { CustomText } from "./CustomText";

const CustomSettingsInput = ({
  value,
  inputType = "textinput", //options -> textinput or select
  selectOptions = [],
  variant = "form", // options are [ form, auth ]
  label,
  leftComp,
  rightComp,
  accept,
  type = "text",
  required = true,
  id = "text",
  placeholder = "input",
  onChange = () => {},
  inputStyle,
  rightAction = () => {},
  leftAction = () => {},
  rightIcon,
  leftIcon,
  rightIconStyle,
  leftIconStyle,
  error,
  mt = 0,
  inputTop = 5,
  inputBottom = 5,
  errorClassName = "fs-8 text-danger mb-0",
}) => {
  return (
    <div style={{ marginTop: mt }}>
      {variant === "form" && (
        <CustomText
          fontFamily={"Poppins"}
          fontSize={12}
          fontWeight={600}
          text={label || id || ""}
          cNColor="gray"
          textClassName="text-capitalize"
        />
      )}
      {inputType === "textinput" ? (
        <InputGroup style={{ marginTop: inputTop, marginBottom: inputBottom }}>
          {leftComp
            ? leftComp
            : leftIcon && (
                <Button
                  variant="outline-secondary"
                  style={{
                    backgroundColor: "#eeeeee",
                    borderColor: "#d9d9d9",
                    borderTopRightRadius: "0px",
                    padding: "5px",
                    height: "100%",
                    borderBottomRightRadius: "0px",
                    borderTopLeftRadius: "5px",
                    borderBottomLeftRadius: "5px",
                    ...leftIconStyle,
                  }}
                  onClick={leftAction}
                >
                  {leftIcon}
                </Button>
              )}

          <Form.Control
            defaultValue={value}
            type={type}
            id={id}
            placeholder={placeholder}
            required={required}
            accept={accept}
            onChange={onChange}
            style={{
              backgroundColor: variant === "form" ? "#f8f8f8" : "transparent",
              ...inputStyle,
              borderColor: variant === "form" ? "#eeeeee" : "#d9d9d9",
              height: "34px",
            }}
          />

          {rightComp
            ? rightComp
            : rightIcon && (
                <Button
                  variant="outline-secondary"
                  style={{
                    backgroundColor: "#f8f8f8",
                    borderColor: "#d9d9d9",
                    borderTopRightRadius: "5px",
                    borderBottomRightRadius: "5px",
                    borderTopLeftRadius: "0px",
                    borderBottomLeftRadius: "0px",
                    borderLeftWidth: "0px",
                    ...rightIconStyle,
                  }}
                  onClick={rightAction}
                >
                  {rightIcon}
                </Button>
              )}
        </InputGroup>
      ) : (
        <ReactSelect
          options={selectOptions}
          defaultValue={value}
          placeholder={placeholder}
          required={required}
          onChange={(e) => {
            console.log("ReactSelect", e);
            onChange(e?.value);
          }}
          style={{
            backgroundColor: variant === "form" ? "#f8f8f8" : "transparent",
            ...inputStyle,
            borderColor: variant === "form" ? "#eeeeee" : "#d9d9d9",
            height: variant === "form" ? "40px" : "50px",
            zIndex: 5,
            width: 120,
          }}
        />
      )}
      {error && <p className={errorClassName}>{error}</p>}
    </div>
  );
};

export default CustomSettingsInput;
