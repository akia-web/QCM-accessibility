"use client"
import React, { ReactNode } from "react";
import { useAccordion } from "./Accordion";

type AccordionItemProps = {
  index: number;
  children: ReactNode;
};

export const AccordionItem = ({ index, children }: AccordionItemProps) => {
  const { openIndex } = useAccordion();
  const isOpen = openIndex === index;

  return (
    <div
      className={`accordion-item ${isOpen ? "open" : ""}`}
      role="presentation"
    >
      {children}
    </div>
  );
};