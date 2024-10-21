import React from "react";
import { Button, Spinner } from "react-bootstrap";

const CustomButton = ({
  text,
  type,
  variant,
  disabled,
  loading,
  href,
  className,
  style,
  onClick,
  children,
}) => {
  return (
    <Button
      size="s"
      variant={variant}
      onClick={onClick}
      type={type}
      href={href}
      disabled={disabled || loading}
      className={className}
      style={style}
    >
      {loading ? <Spinner size="sm" color="white" /> : text || children}
    </Button>
  );
};

export default CustomButton;
