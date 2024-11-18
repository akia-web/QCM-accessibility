"use client"
import React, { createContext, ReactNode, useState, useContext } from "react";

type AccordionContextType = {
  openIndex: number | null;
  setOpenIndex: (index: number | null) => void;
};

const AccordionContext = createContext<AccordionContextType | undefined>(undefined);

export const Accordion = ({ children }: { children: ReactNode }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <AccordionContext.Provider value={{ openIndex, setOpenIndex }}>
      <div className="accordion">{children}</div>
    </AccordionContext.Provider>
  );
};

export const useAccordion = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("useAccordion must be used within an Accordion");
  }
  return context;
};