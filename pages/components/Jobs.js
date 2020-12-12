import React from 'react'
import Link from 'next/link'

const Jobs = ({ jobs }) => {
  const getDateJob = ((job) => {
    let dt1 = new Date(job.created_at);
    let dt2 = new Date().getTime();
    let diff = (dt2 - dt1.getTime()) / 1000;
    diff /= (60 * 60 * 24);
    diff = Math.abs(Math.round(diff))
    if (diff == 0) {
      return "Today"
    } else {
      return diff + " day(s) ago";
    }
  })

  return (
    <div className="col-span-1 lg:col-span-2 lg:col-start-2 grid gap-8">
      {jobs ? jobs.map(job => (
        <Link key={job.id} href={`/offer/${job.id}`}>
          <a className="flex flex-wrap justify-between bg-white p-2 rounded shadow-sm">
            <div className="w-24 h-24 mr-3 flex justify-center items-center rounded">
              <img src={job.company_logo} />
            </div>
            <div className="flex flex-1 flex-col items-start">
              <p className="text-xs font-roboto font-bold text-blue-900">{job.company}</p>
              <p className="text-lg font-roboto font-normal text-blue-900 py-2">{job.title}</p>
              <span className="text-xs font-roboto font-bold text-blue-900 border border-blue-900 rounded py-1 px-2 whitespace-nowrap">{job.type}</span>
            </div>
            <div className="flex w-full justify-end lg:flex-1 lg:items-end mt-4 sm:mb-2 mr-1">
              <span className="flex items-center font-roboto font-medium text-xs text-gray-400 mr-4 lg:mr-8"><svg className="flex-shrink-0 w-6 h-6 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" /></svg>{job.location}</span>
              <span className="flex items-center whitespace-nowrap font-roboto font-medium text-xs text-gray-400"><svg className="w-6 h-6 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>{getDateJob(job)}
              </span>
            </div>
          </a>
        </Link>
      )) : ''}
    </div>
  )
}

export default Jobs;