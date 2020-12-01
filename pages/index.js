import { useEffect, useState } from 'react'
import Head from 'next/head'

export default function Home() {
  const [job, setJob] = useState("");

  useEffect(() => {
    fetch(
      `/api/hello`,
      {
        method: "GET",
      }
    )
      .then(res => res.json())
      .then(response => {
        console.log(response)
        setJob(response)
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <main className="container max-w-screen-xl mx-auto px-5">
      <h1 className="text-2xl	font-bold py-8">Github <span className="font-light">Jobs</span></h1>
      <div className="block-search rounded-lg py-6 px-5 flex justify-center items-center">
        <div className="w-full md:w-11/12 lg:w-9/12 flex justify-between box-search bg-white rounded p-1">
          <input className="w-full font-roboto font-normal text-xs truncate outline-none mx-4" type="text" placeholder="Title, companies, expertise or benefits" />
          <button className="bg-blue-500 font-roboto text-white text-base font-medium py-3 px-10 rounded">Search</button>
        </div>
      </div>
      <div className="grid grid-col-1 lg:grid-rows-3 lg:grid-flow-col gap-8 pt-8">
        <aside className="col-span-3 lg:col-span-1 row-span-3">
          <div className="flex items-center">
            <input type="checkbox" className="form-tick appearance-none h-4 w-4 border border-gray-300 rounded-sm checked:bg-blue-600 checked:border-transparent focus:outline-none" name="full-time" id="full-time" />
            <label className="font-medium text-sm text-blue-900 ml-3" for="full-time">Full-time</label>
          </div>
          <div className="flex flex-col pt-7 pb-4">
            <label for="location" className="font-bold uppercase text-sm text-gray-400 pb-3">Location</label>
            <input className="shadow-sm font-roboto font-normal text-xs outline-none p-4 pl-6" type="search" id="location" name="location"
              placeholder="City, state, zip code or country" />
          </div>
          <div className="flex items-center pt-2 pb-1">
            <input type="checkbox" className="form-tick appearance-none h-4 w-4 border border-gray-300 rounded-sm checked:bg-blue-600 checked:border-transparent focus:outline-none" name="london" id="london" />
            <label className="font-medium text-sm text-blue-900 ml-3" for="london">London</label>
          </div>
          <div className="flex items-center pt-2 pb-1">
            <input type="checkbox" className="form-tick appearance-none h-4 w-4 border border-gray-300 rounded-sm checked:bg-blue-600 checked:border-transparent focus:outline-none" name="amsterdam" id="amsterdam" />
            <label className="font-medium text-sm text-blue-900 ml-3" for="amsterdam">Amsterdam</label>
          </div>
          <div className="flex items-center pt-2 pb-1">
            <input type="checkbox" className="form-tick appearance-none h-4 w-4 border border-gray-300 rounded-sm checked:bg-blue-600 checked:border-transparent focus:outline-none" name="new-york" id="new-york" />
            <label className="font-medium text-sm text-blue-900 ml-3" for="new-york">New York</label>
          </div>
          <div className="flex items-center pt-2 pb-1">
            <input type="checkbox" className="form-tick appearance-none h-4 w-4 border border-gray-300 rounded-sm checked:bg-blue-600 checked:border-transparent focus:outline-none" name="berlin" id="berlin" />
            <label className="font-medium text-sm text-blue-900 ml-3" for="berlin">Berlin</label>
          </div>
        </aside>

        <div className="col-span-3 lg:col-span-2">
          {job ? job.slice(0, 5).map(job => (
            <div className="flex justify-between bg-white p-2 mb-8 rounded shadow-sm">
              <div className="w-24 h-24 mr-3 flex justify-center items-center rounded">
                <img src={job.company_logo} />
              </div>
              <div className="flex flex-1 flex-col sm:flex-row">
                <div className="flex flex-1 flex-col items-start">
                  <p className="text-xs font-roboto font-bold text-blue-900">{job.company}</p>
                  <p className="text-lg font-roboto font-normal text-blue-900 py-2">{job.title}</p>
                  <span className="text-xs font-roboto font-bold text-blue-900 border border-blue-900 rounded py-1 px-2">{job.type}</span>
                </div>
                <div className="flex items-end mt-4 sm:mb-2 mr-1">
                  <span className="flex items-center font-roboto font-medium text-xs text-gray-400 mr-8"><svg className="w-6 h-6 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" /></svg>{job.location}</span>
                  <span className="flex items-center font-roboto font-medium text-xs text-gray-400"><svg className="w-6 h-6 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>5 days ago</span>
                </div>
              </div>
            </div>
          )) : ''}
        </div>

        <div className="col-span-3 lg:col-span-2 flex justify-center lg:justify-end">
          <button className="w-9 h-9 mr-3 flex justify-center items-center font-roboto font-normal text-xs text-gray-400 border border-gray-400 rounded hover:text-blue-500 hover:border-blue-500"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" /></svg></button>
          <button className="w-9 h-9 mr-3 flex justify-center items-center font-roboto font-normal text-xs text-gray-400 border border-gray-400 rounded hover:text-blue-500 hover:border-blue-500">1</button>
          <button className="w-9 h-9 mr-3 flex justify-center items-center font-roboto font-normal text-xs text-gray-400 border border-gray-400 rounded hover:text-blue-500 hover:border-blue-500">2</button>
          <button className="w-9 h-9 mr-3 flex justify-center items-center font-roboto font-normal text-xs text-gray-400 border border-gray-400 rounded hover:text-blue-500 hover:border-blue-500">3</button>
          <div className="w-9 h-9 mr-3 flex justify-center items-center"><svg className="w-6 h-6 fill-current text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" /></svg></div>
          <button className="w-9 h-9 mr-3 flex justify-center items-center font-roboto font-normal text-xs text-gray-400 border border-gray-400 rounded hover:text-blue-500 hover:border-blue-500">10</button>
          <button className="w-9 h-9 flex justify-center items-center font-roboto font-normal text-xs text-gray-400 border border-gray-400 rounded hover:text-blue-500 hover:border-blue-500"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg></button>
        </div>
      </div>
    </main>
  )
}
