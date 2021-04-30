import React, { useCallback, useEffect, useState } from 'react';
import { Typeahead, TypeaheadInputMulti } from 'react-bootstrap-typeahead';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import axios from 'axios';
import Token from './Token.jsx';
import options from './data.js';

export default function SkillsTypeahead() {
  const [selected, setSelected] = useState([]);
  // const [options, setOptions] = useState([]);

  // useEffect(() => {
  //   axios.get('/allskills')
  //     .then((res) => {
  //       setOptions([...res.data]);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  const onMove = useCallback(
    (dragIndex, hoverIndex) => {
      const item = selected[dragIndex];

      const newSelected = selected.slice();
      newSelected.splice(dragIndex, 1);
      newSelected.splice(hoverIndex, 0, item);
      setSelected(newSelected);
    },
    [selected],
  );

  return (
    <DndProvider backend={HTML5Backend}>
      <Typeahead
        id="dnd-token-example"
        multiple
        onChange={setSelected}
        options={options}
        placeholder="Choose skills..."
        renderInput={(inputProps, props) => (
          <TypeaheadInputMulti {...inputProps} selected={selected}>
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
