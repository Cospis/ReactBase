// import node module libraries
import { Card } from "react-bootstrap";
import { CustomText } from "./CustomText";

const StatRightIcon = (props) => {
  const {
    title,
    value,
    iconComponent,
    iconName,
    iconColorVariant,
    classValue,
    cardBodyValue,
  } = props;

  return (
    <Card border="light" className={`${classValue}`}>
      <Card.Body className={cardBodyValue}>
        <div className="d-flex align-items-center justify-content-between mb-0 lh-1">
          <div>
            <CustomText
              fontFamily={"Montserrat"}
              fontSize={20}
              fontWeight={600}
              mb={20}
              text={value}
              cNColor="text-secondary"
            />
            <CustomText
              fontFamily={"Montserrat"}
              fontSize={16}
              fontWeight={500}
              text={title}
              cNColor="text-secondary"
            />
            {/* <h2 className='fw-bold mb-2'>{value}</h2>
            <span className='ms-1 fw-medium'>{title}</span> */}
          </div>
          <div className="d-flex align-items-center">
            {iconComponent ? (
              iconComponent
            ) : iconName ? (
              <span
                className={`fe fe-${iconName} fs-3 text-${iconColorVariant}`}
              ></span>
            ) : (
              ""
            )}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default StatRightIcon;
