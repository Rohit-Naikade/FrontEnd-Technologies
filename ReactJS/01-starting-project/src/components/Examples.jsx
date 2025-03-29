import TabButton from "./TabButton.jsx";
import { useState } from "react";
import { EXAMPLES } from "../data";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";

export default function Examples(){

    let [selectedTopic, setSelectedTopic] =useState();
    let tabContent=<p>Please select a topic.</p>;
      function handleSelect(name){
        setSelectedTopic(name);
      }

      if(selectedTopic){
            tabContent=(<div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
            </div>);
      }

    return (<Section title="examples" id="examples">
        <Tabs Container="menu" content={<>
            <TabButton isSelected={selectedTopic==='components'} onClick={()=>handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic==='jsx'} onClick={()=>handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic==='props'} onClick={()=>handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic==='state'} onClick={()=>handleSelect('state')}>State</TabButton>
          </>}>
          {tabContent}
        </Tabs>
       </Section>);
}