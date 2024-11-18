"use client"
import React, { ReactNode } from "react";
import { useAccordion } from "./Accordion";

type AccordionPanelProps = {
  index: number;
  children: ReactNode;
};

export const AccordionPanel = ({ index, children }: AccordionPanelProps) => {
  const { openIndex } = useAccordion();

  return openIndex === index ? (
    <div
      id={`panel-${index}`}
      className="accordion-panel"
      role="region"
      aria-labelledby={`header-${index}`}
    >
      {children}
    </div>
  ) : null;
};