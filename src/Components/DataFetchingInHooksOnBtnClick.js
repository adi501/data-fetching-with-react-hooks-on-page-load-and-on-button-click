import React, { useState, useEffect, Fragment } from "react";

import axios from "axios";

function DataFetchingInHooksOnBtnClick() {
  const [data, setData] = useState({ hits: [] });

  const [query, setQuery] = useState("redux");

  const [url, setUrl] = useState(
    "https://hn.algolia.com/api/v1/search?query=redux"
  );

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url);

      setData(result.data);
    };

    fetchData();
  }, [url]);

  return (
    <Fragment>
      <center>
        <h5>
          Data Fetching with React Hooks, On Page load and on button click{" "}
        </h5>
      </center>
      <input
        type="text"
        value={query}
        onChange={event => setQuery(event.target.value)}
      />
      <button
        type="button"
        onClick={() =>
          setUrl(`http://hn.algolia.com/api/v1/search?query=${query}`)
        }
      >
        Search
      </button>
      <ul>
        {data.hits.map(item => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
      Ref: https://www.robinwieruch.de/react-hooks-fetch-data
    </Fragment>
  );
}

export default DataFetchingInHooksOnBtnClick;
