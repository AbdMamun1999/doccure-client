import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

export default function FaqAccordion() {
  const [open, setOpen] = useState(1);
  const [active, setActive] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
    setActive(value);
  };

  return (
    <div>
      <Fragment>
        <Accordion
          open={open === 1}
          className="border border-blue-gray-100 px-4 rounded-lg mb-2"
        >
          <AccordionHeader
            onClick={() => handleOpen(1)}
            className={`border-b-0 transition-colors ${
              active === 1 ? "text-blue-500 hover:!text-blue-700" : ""
            }`}
          >
            What is Material Tailwind?
          </AccordionHeader>
          <AccordionBody className="text-base font-normal pt-0">
            We&apos;re not always in the position that we want to be at.
            We&apos;re constantly growing. We&apos;re constantly making
            mistakes. We&apos;re constantly trying to express ourselves and
            actualize our dreams.
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 2}
          className="border border-blue-gray-100 px-4 rounded-lg mb-2"
        >
          <AccordionHeader
            onClick={() => handleOpen(2)}
            className={`border-b-0 transition-colors ${
              active === 2 ? "text-blue-500 hover:!text-blue-700" : ""
            }`}
          >
            How to use Material Tailwind?
          </AccordionHeader>
          <AccordionBody className="text-base font-normal pt-0">
            We&apos;re not always in the position that we want to be at.
            We&apos;re constantly growing. We&apos;re constantly making
            mistakes. We&apos;re constantly trying to express ourselves and
            actualize our dreams.
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 3}
          className="border border-blue-gray-100 px-4 rounded-lg"
        >
          <AccordionHeader
            onClick={() => handleOpen(3)}
            className={`border-b-0 transition-colors ${
              active === 3 ? "text-blue-500 hover:!text-blue-700" : ""
            }`}
          >
            What can I do with Material Tailwind?
          </AccordionHeader>
          <AccordionBody className="text-base font-normal pt-0">
            We&apos;re not always in the position that we want to be at.
            We&apos;re constantly growing. We&apos;re constantly making
            mistakes. We&apos;re constantly trying to express ourselves and
            actualize our dreams.
          </AccordionBody>
        </Accordion>
      </Fragment>
    </div>
  );
}
