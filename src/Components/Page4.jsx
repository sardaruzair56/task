import React from "react";
import image from "../assets/Frame 62568 (2).png";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/system";

const StyledAccordionSummary1 = styled(AccordionSummary)(
  ({ theme, ownerState }) => ({
    backgroundColor: ownerState.expanded1 ? "blue" : "transparent",
    color: ownerState.expanded1 ? "white" : "inherit",
    transition: "background-color 0.3s, color 0.3s",
  })
);
const StyledAccordionSummary2 = styled(AccordionSummary)(
    ({ theme, ownerState }) => ({
      backgroundColor: ownerState.expanded2 ? "blue" : "transparent",
      color: ownerState.expanded2 ? "white" : "inherit",
      transition: "background-color 0.3s, color 0.3s",
    })
  );
  const StyledAccordionSummary3 = styled(AccordionSummary)(
    ({ theme, ownerState }) => ({
      backgroundColor: ownerState.expanded3 ? "blue" : "transparent",
      color: ownerState.expanded3 ? "white" : "inherit",
      transition: "background-color 0.3s, color 0.3s",
    })
  );
  const StyledAccordionSummary4 = styled(AccordionSummary)(
    ({ theme, ownerState }) => ({
      backgroundColor: ownerState.expanded4 ? "blue" : "transparent",
      color: ownerState.expanded4 ? "white" : "inherit",
      transition: "background-color 0.3s, color 0.3s",
    })
  );
  const StyledAccordionSummary5 = styled(AccordionSummary)(
    ({ theme, ownerState }) => ({
      backgroundColor: ownerState.expanded5 ? "blue" : "transparent",
      color: ownerState.expanded5 ? "white" : "inherit",
      transition: "background-color 0.3s, color 0.3s",
    })
  );

const Page4 = () => {
  const [expanded1, setExpanded1] = React.useState(false);

  const handleChange1 = (event, isExpanded) => {
    setExpanded1(isExpanded ? true : false);
  };

  const [expanded2, setExpanded2] = React.useState(false);

  const handleChange2 = (event, isExpanded) => {
    setExpanded2(isExpanded ? true : false);
  };
  const [expanded3, setExpanded3] = React.useState(false);

  const handleChange3 = (event, isExpanded) => {
    setExpanded3(isExpanded ? true : false);
  };
  const [expanded4, setExpanded4] = React.useState(false);

  const handleChange4 = (event, isExpanded) => {
    setExpanded4(isExpanded ? true : false);
  };
  const [expanded5, setExpanded5] = React.useState(false);

  const handleChange5 = (event, isExpanded) => {
    setExpanded5(isExpanded ? true : false);
  };

  return (
    <div>
      <div className="flex flex-row">
        <img className="mt-[6rem] ml-[5rem]" src={image} alt="" />
        <div>
          <div className="w-[44rem] ml-[10rem] mt-[5rem]">
            <p className="font-Rubik font-normal text-lg">Why Choose Us</p>
            <p className="font-Rubik font-bold mt-[1rem] text-3xl">
              Frequently Asked Questions and Resources
            </p>
            <div className="mt-[3rem]">
              <Accordion expanded={expanded1} onChange={handleChange1}>
                <StyledAccordionSummary1
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  ownerState={{ expanded1 }}
                  className="font-Rubik font-medium text-lg"
                >
                  Who should use Alertify?
                </StyledAccordionSummary1>
                <AccordionDetails>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries,
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded2}
                onChange={handleChange2}
                className="mt-4"
              >
                <StyledAccordionSummary2
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  ownerState={{ expanded2 }}
                  className="font-Rubik font-medium text-lg"
                >
                  What’s required to use Alertify?
                </StyledAccordionSummary2>
                <AccordionDetails>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries,
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded3}
                onChange={handleChange3}
                className="mt-4"
              >
                <StyledAccordionSummary3
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  ownerState={{ expanded3 }}
                  className="font-Rubik font-medium text-lg"
                >
                  Will Alertify slow down my website?
                </StyledAccordionSummary3>

                <AccordionDetails>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries,
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded4}
                onChange={handleChange4}
                className="mt-4"
              >
                <StyledAccordionSummary4
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  ownerState={{ expanded4 }}
                  className="font-Rubik font-medium text-lg"
                >
                  Do I need to have coding skills to use Alertify?
                </StyledAccordionSummary4>

                <AccordionDetails>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries,
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded5}
                onChange={handleChange5}
                className="mt-4"
              >
                <StyledAccordionSummary5
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  ownerState={{ expanded5 }}
                  className="font-Rubik font-medium text-lg"
                >
                  Will Alertify slow down my website?
                </StyledAccordionSummary5>
                <AccordionDetails>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries,
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page4;
