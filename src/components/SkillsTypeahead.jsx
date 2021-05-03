import React, { useCallback, useEffect, useState } from 'react';
import { Typeahead, TypeaheadInputMulti } from 'react-bootstrap-typeahead';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import axios from 'axios';
import Token from './Token.jsx';

export default function SkillsTypeahead({
  setTotalSkills, sendSelected,
}) {
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState([]);

  // Convert 'name' to 'label' for TypeaheadMulti.
  useEffect(() => {
    axios.get('/allskills')
      .then((res) => {
        const allSkills = res.data;

        allSkills.forEach((skillObj) => {
          skillObj.label = skillObj.name;
          delete skillObj.name;
        });

        setOptions([...res.data]);
      })
      .catch((err) => console.log(err));
  }, []);

  const onMove = useCallback((dragIndex, hoverIndex) => {
    const item = selected[dragIndex];

    const newSelected = selected.slice();
    newSelected.splice(dragIndex, 1);
    newSelected.splice(hoverIndex, 0, item);

    setSelected(newSelected);
  }, [selected]);

  useEffect(() => {
    sendSelected(selected);
    setTotalSkills(selected.length);
  }, [selected]);

  return (
    <DndProvider backend={HTML5Backend}>
      <Typeahead
        id="dnd-token-example"
        multiple
        onChange={setSelected}
        options={options}
        placeholder="Select skills..."
        renderInput={(inputProps, props) => (
          <TypeaheadInputMulti {...inputProps} className="p-3" selected={selected}>
            {selected.map((option, idx) => (
              <Token
                index={idx}
                key={option.label}
                onMove={onMove}
                onRemove={props.onRemove}
                option={option}
              >
                {option.label}
              </Token>
            ))}
          </TypeaheadInputMulti>
        )}
        selected={selected}
      />
    </DndProvider>
  );
}
