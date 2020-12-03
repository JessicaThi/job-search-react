import React from 'react';
import Link from 'next/link';

export default function offer() {
  return (
    <main className="container max-w-screen-xl mx-auto px-5">
      <h1 className="text-2xl	font-bold py-8">Github <span className="font-light">Jobs</span></h1>
      <div className="md:flex">
        <aside className="md:w-1/4 md:pr-20 pb-6 md:pb-0">
          <Link href="/">
            <a className="flex items-center font-poppins font-medium text-sm text-blue-500"><svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" /></svg>Back to search
            </a>
          </Link>
          <p className="font-bold uppercase text-sm text-gray-400 pt-9 pb-4">How to Apply</p>
          <p className="font-poppins font-medium text-sm text-blue-900">Please email a copy of your resume and online portfolio to wes@kasisto.com & CC eric@kasisto.com</p>
        </aside>
        <div className="md:w-3/4 pb-6">
          <p className="text-2xl font-roboto font-bold text-blue-900 py-2">Front-End Software Engineer <span className="ml-3 text-xs font-roboto font-bold text-blue-900 align-middle border border-blue-900 rounded py-1 px-2">Full time</span></p>
          <span className="flex items-center font-roboto font-medium text-xs text-gray-400"><svg className="w-6 h-6 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>5 days ago</span>
          <div className="flex py-6">
            <div className="w-11 h-11 mr-2 flex justify-center items-center rounded"><img src="https://github-jobs.s3.amazonaws.com/eDYEuyp8KWQ7XhCbzyYkaELK?response-content-disposition=inline%3B%20filename%3D%22Shells%2002.jpg%22%3B%20filename%2A%3DUTF-8%27%27Shells%252002.jpg&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJENXOYUQN2IQEWRA%2F20201128%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20201128T142305Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=808131e90df6116733341471559a5f3c20411f474e54de5fd49d382529a66499" /></div>
            <div>
              <p className="text-lg font-roboto font-bold text-blue-900">Kasisto</p>
              <span className="flex items-center font-roboto font-medium text-xs text-gray-400 mr-8"><svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" /></svg>New York</span>
            </div>
          </div>
          <div className="font-roboto font-normal text-blue-900">
            <p>We as GOhiring believe that connectivity is the foundation of efficient processes. Therefore we offer the digital infrastructure for HR Market Players to provide a productive way of collaborating. Our software solution enables customers to publish, manage and analyze their job postings within their HR software. Thanks to state-of-the-art tools, we have also digitized our own working environment. Everything is set up for #remote work from anywhere in the world.</p><p><strong>Your role</strong></p><ul><li>Build smart, customer-driven front- and back-end solutions in extension of our product ecosystem</li><li>Solve exciting engineering challenges, starting with MVP’s and iterate from there</li><li>Work on complex frontend projects using React and other JS frameworks</li><li>Collaborate closely with our experienced team of backend developers, product managers, designers and testers</li></ul><p><strong>Your profile</strong></p><ul><li>You get excited about good quality code and engineering quests</li><li>+5 years experience in web development, including +1 years in React.js and +3 years in Ruby</li><li>Value testing, well-documented code and intelligent software design techniques</li><li>Profound knowledge about API Design and performance optimization</li><li>Fluent in English</li></ul><p><strong>Why should you apply?</strong></p><p><em>Remote culture</em> - Work wherever you are most productive - at home, while traveling or in our office in Berlin. Benefit from processes and mindsets which are 100% oriented towards working flexible hours.</p><p><em>Small, agile team</em> - We believe that work is simply more fun in small teams. Experienced colleagues, jointly defined company targets, a direct exchange and lots of creative leeway: That is what constitutes our understanding of productivity.</p><p><em>Complex challenges</em> - We encounter new challenges time and time which are waiting to be solved for the benefit of all market players.</p><p><strong>Sounds like an interesting challenge for you?</strong></p><p>Simply send us your profile in addition to your Github handle. We are happy to hear from you.</p><p></p>
          </div>
        </div>
      </div>
    </main>
  )
}
