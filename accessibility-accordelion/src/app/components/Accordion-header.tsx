"use client"
import React, { ReactNode } from "react";
import { useAccordion } from "./Accordion";

type AccordionHeaderProps = {
  index: number;
  children: ReactNode;
};

export const AccordionHeader = ({ index, children }: AccordionHeaderProps) => {
  const { openIndex, setOpenIndex } = useAccordion();
  const isOpen = openIndex === index;

  const toggle = () => {
    setOpenIndex(isOpen ? null : index);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggle();
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      aria-expanded={isOpen}
      aria-controls={`panel-${index}`}
      className="accordion-header"
      onClick={toggle}
      onKeyDown={handleKeyDown}
    >
      {children}
    </div>
  );
};