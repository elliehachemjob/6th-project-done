import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const url = "https://course-api.com/react-tabs-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <section className="section loading">
        <h1>loading...</h1>
      </section>
    );
  }

  const { company, dates, duties, title } = jobs[value]; //do destructure  AFTer the loading condition and before the return best practice

  return (
    <section className="section">
      <div className="title">
        <h2>expereince</h2>
        <div className="underline"></div>
      </div>
      <div className="job-center">
        {/* btn container */}
        <div className="btn-container">
          {jobs.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => {
                  setValue(index);
                }}
                className={`jobs-btn ${index === value && "active-btn"}`}
              >
                {item.company}
              </button>
            );
          })}
        </div>

        {/* job info */}
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p classaName="job-date">{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className="job-desc">
                <FaAngleDoubleRight classNamn="job-icon"></FaAngleDoubleRight>
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
}

export default App;
