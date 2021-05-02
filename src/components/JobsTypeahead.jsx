import React, { useEffect, useState } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import axios from 'axios';

export default function JobsTypeahead() {
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    axios.get('/alljobs')
      .then((res) => {
        const allJobs = res.data;
        console.log(res.data);

        allJobs.forEach((jobObj) => {
          jobObj.label = jobObj.title;
          delete jobObj.title;
        });
        setOptions([...res.data]);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <DndProvider backend={HTML5Backend}>
      <Typeahead
        id="jobs-typeahead"
        onChange={setSelected}
        options={options}
        placeholder="Search Job by Title"
        selected={selected}
      />
    </DndProvider>
  );
}
