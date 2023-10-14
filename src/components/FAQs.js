import React, { useState } from 'react';
import './styles_components/style_faqs.scss';
import { Grid } from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import AnimatedElement from "./AnimatedElementOnce";

const faqData = [
  {
    question: "Q: What tools do you use for recording and analyzing user sessions?",
    answer: "We leverage the capabilities of renowned tools such as Hotjar and Mouseflow to record user sessions. Our UX experts then utilize these recordings to perform in-depth analysis and provide actionable insights."
  },
  {
    question: "Q: How long does it take to receive the report after signing up?",
    answer: "Our comprehensive report will provide detailed insights on user interactions, highlighting any observed issues or bottlenecks. We also include actionable suggestions for improvements and possible enhancements, tailored to your product."
  },
  {
    question: "Q: What information will be included in the report?",
    answer: "Our comprehensive report will provide detailed insights on user interactions, highlighting any observed issues or bottlenecks. We also include actionable suggestions for improvements and possible enhancements, tailored to your product."
  },
  {
    question: "Q: Can you analyze user sessions for any kind of digital product?",
    answer: "Yes, our team of UX experts are skilled in analyzing user interactions for a wide range of digital products, from websites and mobile applications to complex software platforms."
  },
  {
    question: "Q: What if I need additional analysis or have specific areas of concern?",
    answer: "We are flexible in our services. If you have specific areas of concern or need additional analysis, please let us know and we'll tailor our investigation accordingly."
  },
  {
    question: "Q: How often can I receive reports if I subscribe to a continuous monitoring option?",
    answer: "Our subscription options are designed to provide regular insights. The frequency of reports is customizable and can be discussed during the subscription setup. Common options include monthly or quarterly reports."
  }
];

function FAQs() {
  const [expanded, setExpanded] = useState(Array(faqData.length).fill(false));

  const handleAccordionChange = (index) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };

  const faIcons = expanded.map((isExpanded, index) => (
    <FontAwesomeIcon
      key={index}
      icon={isExpanded ? faMinus : faPlus}
      className="fa-icon-faqs"
      size="xl"
    />
  ));

  return (
    <Grid container spacing={2} className="Section">
      <Grid item xs={12} className="SectionContent">
        <div>
          <AnimatedElement className="animated-element animated-element-delay-100ms">
            <h1 className="Header">
              Masz pytania?
            </h1>
          </AnimatedElement>
        </div>
          <div>
            {faqData.map((faq, index) => (
              <AnimatedElement className="animated-element animated-element-delay-100ms" threshold='.8'>
                <Accordion
                  key={index}
                  className={index === faqData.length - 1 ? "AccordionQuestionLast" : "AccordionQuestion"}
                  expanded={expanded[index]}
                  onChange={() => handleAccordionChange(index)}
                  style={expanded[index] ? { paddingBottom: 24, marginBottom: index === faqData.length - 1 ? 0 : 12 } : { paddingBottom: 12, marginBottom: index === faqData.length - 1 ? 0 : 12 }}
                >
                  <AccordionSummary
                    expandIcon={faIcons[index]}
                    aria-controls={`panel${index + 1}a-content`}
                    id={`panel-header`}
                    style={{ padding: 0 }}
                  >
                    <p className="Question">
                      {faq.question}
                    </p>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p className="Answer">
                      {faq.answer}
                    </p>
                  </AccordionDetails>
                </Accordion>
              </AnimatedElement>
            ))}
          </div>
      </Grid>
    </Grid>
  );
}

export default FAQs;
