
import { Accordion } from "./components/Accordion";
import { AccordionHeader } from "./components/Accordion-header";
import { AccordionItem } from "./components/Accordion-item";
import { AccordionPanel } from "./components/Accordion-panel";

export default function Home() {
  return (
    <Accordion>
      <AccordionItem index={0}>
        <AccordionHeader index={0}>Section 1</AccordionHeader>
        <AccordionPanel index={0}>Contenu de la section 1</AccordionPanel>
      </AccordionItem>
      <AccordionItem index={1}>
        <AccordionHeader index={1}>Section 2</AccordionHeader>
        <AccordionPanel index={1}>Contenu de la section 2</AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

