import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'

export default function offer() {
  const router = useRouter()
  const { slug } = router.query;
  const [jobOffer, setJobOffer] = useState('');

  useEffect(() => {
    if (slug) {
      fetch(
        `/api/positions?positions=${slug}`,
        {
          method: "GET",
        }
      )
        .then(res => res.json())
        .then(response => {
          console.log(response)
          setJobOffer(response)
        })
        .catch(error => console.log(error));
    }
  }, [slug]);

  return (
    <main className="container max-w-screen-xl mx-auto px-5">
      <h1 className="text-2xl	font-bold py-8">Github <span className="font-light">Jobs</span></h1>
      <div className="md:flex">
        <aside className="md:w-1/4 md:pr-20 pb-6 md:pb-0">
          <span className="flex items-center font-poppins font-medium text-sm text-blue-500 cursor-pointer" onClick={() => router.back()}><svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" /></svg>Back to search</span>
          <p className="font-bold uppercase text-sm text-gray-400 pt-9 pb-4">How to Apply</p>
          {jobOffer ?
            <p className="font-roboto font-normal text-blue-900 break-words" dangerouslySetInnerHTML={{ __html: jobOffer.how_to_apply }}></p> : ''}
        </aside>
        <div className="md:w-3/4 pb-6">
          {jobOffer ?
            <p className="text-2xl font-roboto font-bold text-blue-900 py-2">{jobOffer.title}<span className="ml-3 text-xs font-roboto font-bold text-blue-900 align-middle border border-blue-900 rounded py-1 px-2 whitespace-nowrap">{jobOffer.type}</span></p> : ''}
          <span className="flex items-center font-roboto font-medium text-xs text-gray-400"><svg className="w-6 h-6 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>5 days ago</span>
          <div className="flex py-6">
            {jobOffer ?
              <a href={jobOffer.company_url} className="w-11 h-11 mr-2 flex justify-center items-center rounded">
                <img src={jobOffer.company_logo} />
              </a>
              : ''}
            <div>
              {jobOffer ?
                <p className="text-lg font-roboto font-bold text-blue-900">{jobOffer.company}</p> : ''}
              {jobOffer ?
                <span className="flex items-center font-roboto font-medium text-xs text-gray-400 mr-8"><svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" /></svg>{jobOffer.location}</span> : ''}
            </div>
          </div>
          {jobOffer ?
            <div className="font-roboto font-normal text-blue-900 whitespace-pre-line break-words" dangerouslySetInnerHTML={{ __html: jobOffer.description }}></div> : ''}
        </div>
      </div>
    </main>
  )
}
