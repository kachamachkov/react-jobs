import JobListing from './JobListing';
import { useGetAllJobs } from '../hooks/useJobs';
import { useEffect, useState } from 'react';

const JobListings = ({ isHome = false }) => {

  const [jobs, setJobs] = useState([]);
  // const [jobs] = useGetAllJobs();

  useEffect(() => {
    (async () => {
      const response = await fetch('http://localhost:3030/data/jobs');
      const result = await response.json();

      setJobs(result);
    })();
  }, []);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? 'Recent Jobs' : 'Browse Jobs'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <JobListing key={job._id} job={job} />
          ))}
        </div>
      </div>
    </section >
  );
};
export default JobListings;