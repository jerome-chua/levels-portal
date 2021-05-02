import React, { useEffect, useState } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';

import axios from 'axios';

export default function JobsTypeahead() {
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    axios.get('/alljobs')
      .then((res) => {
        const allJobs = res.data;

        allJobs.forEach((jobObj) => {
          jobObj.label = jobObj.title;
          delete jobObj.title;
        });

        const uniqueJobTitle = new Set(allJobs.map((job) => job.label));
        setOptions([...uniqueJobTitle]);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Typeahead
      id="jobs-typeahead"
      onChange={setSelected}
      options={options}
      placeholder="Search Job by Title"
      selected={selected}
    />
  );
}
