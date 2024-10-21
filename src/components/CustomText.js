import React from "react";

export const CustomText = ({
  text = "none",
  fontSize = 16,
  fontWeight = 400,
  fontFamily = "Montserrat",
  mb = "0px",
  mt = "0px",
  mr = "0px",
  ml = "0px",
  cNColor = "text-black",
  styleColor,
  divStyle = null,
  textStyle = {},
  divClassName = "",
  textClassName = "",
}) => {
  return (
    <div style={divStyle} className={divClassName}>
      <p
        // className={`${!styleColor && cNColor} ${textClassName}`}
        className={textClassName}
        style={{
          fontFamily: fontFamily,
          fontSize: fontSize,
          fontWeight: fontWeight,
          marginTop: mt,
          marginBottom: mb,
          marginLeft: ml,
          marginRight: mr,
          color: styleColor,
          ...textStyle,
        }}
      >
        {text}
      </p>
    </div>
  );
};
