import { useEffect, useState } from 'react'
import Head from 'next/head'
import Jobs from "./components/Jobs"
import Pagination from './components/Pagination';
import { useRouter } from "next/router"

function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this, args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

export default function Home() {
  const router = useRouter();
  const searchParams = new URLSearchParams(router.asPath.split('?')[1]);
  const defaultCity = searchParams.get('city') || "Amsterdam";

  const cityList = [
    "London",
    "Amsterdam",
    "New York",
    "Berlin",
  ]

  const [citySelect, setCitySelect] = useState(defaultCity);
  const [jobs, setJobs] = useState("");
  const [inputCity, setInputCity] = useState("");
  const [searchDescription, setSearchDescription] = useState("");
  const [changeDescription, setChangeDescription] = useState("");

  const [currentPage, setCurrentPage] = useState(+searchParams.get('page') || 1);
  const [jobsPerPage] = useState(5);
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (citySelect) {
      fetch(
        `/api/hello?location=${citySelect}`,
        {
          method: "GET",
        }
      )
        .then(res => res.json())
        .then(response => {
          setJobs(response)
        })
        .catch(error => console.log(error));
    }
  }, [citySelect]);

  useEffect(() => {
    if (mounted) {
      fetch(
        `/api/description?description=${changeDescription}`,
        {
          method: "GET",
        }
      )
        .then(res => res.json())
        .then(response => {
          setJobs(response)
        })
        .catch(error => console.log(error));
    }
  }, [changeDescription]);

  useEffect(() => {
    setMounted(true);
  }, [])

  //city filter with checkbox
  const changeCity = (e) => {
    setCitySelect(e.target.value);
    setInputCity('');
    setCurrentPage(1);
  };

  //Input search location, on top filter city
  const changeLocation = (e) => {
    setCitySelect(e.target.value);
  }
  const debouncedChangeLocation = debounce(changeLocation, 1000)

  //Input search description, like title, job, company
  const onChangeDescription = (e) => {
    setSearchDescription(e.target.value)
    setCurrentPage(1);
    setInputCity('');
  }

  //get job offers from the current page
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

  //Change Page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    if (mounted) {
      const searchParams = new URLSearchParams();
      searchParams.append('page', currentPage);
      searchParams.append('city', citySelect);
      router.push(`?${searchParams.toString()}`)
    }
  }, [currentPage, citySelect])

  return (
    <main className="container max-w-screen-xl mx-auto px-5">
      <h1 className="text-2xl	font-bold py-8">Github <span className="font-light">Jobs</span></h1>
      <div className="block-search rounded-lg py-6 px-5 flex justify-center items-center">
        <div className="w-full md:w-11/12 lg:w-9/12 flex justify-between items-center box-search bg-white rounded p-1 focus-within:text-gray-600">
          <svg className="flex-shrink-0 w-5 h-5 ml-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
          <input onChange={onChangeDescription} value={searchDescription} className="w-full font-roboto font-normal text-xs truncate outline-none ml-2 mr-4" type="text" placeholder="Title, companies, expertise or benefits" />
          <button onClick={() => {
            setChangeDescription(searchDescription);
            setCitySelect('')
          }} className="bg-blue-500 font-roboto text-white text-base font-medium py-3 px-10 rounded">Search</button>
        </div>
      </div>
      <div className="grid grid-cols-1 items-start lg:grid-cols-3 gap-8 py-8">
        <aside className="lg:col-span-1 lg:col-start-1">
          <div className="flex flex-col pb-4">
            <label htmlFor="location" className="font-bold uppercase text-sm text-gray-400 pb-3">Location</label>
            <div className="flex bg-white text-gray-400 focus:text-gray-900 shadow-sm rounded-sm font-roboto font-normal text-xs truncate p-3">
              <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" /></svg>
              <input className="ml-2 flex-1 placeholder-gray-400 text-blue-900 outline-none" type="search" id="location" name="location"
                placeholder="City, state, zip code or country"
                value={inputCity}
                onChange={(e) => {
                  setInputCity(e.target.value);
                  setSearchDescription('');
                  debouncedChangeLocation(e)
                }}
              />
            </div>
          </div>
          {
            cityList.map(city => {
              return (
                <div key={city} className="flex items-center pt-2 pb-1">
                  <input checked={citySelect == city} type="checkbox" className="form-tick appearance-none h-4 w-4 border border-gray-300 rounded-sm form-checkbox text-blue-600 checked:border-transparent checked:border-blue-600 focus:outline-none" onChange={changeCity} value={city} id={city} />
                  <label className="font-medium text-sm text-blue-900 ml-3" htmlFor={city}>{city}</label>
                </div>
              )
            })
          }
        </aside>

        <Jobs jobs={currentJobs} />
        <Pagination jobsPerPage={jobsPerPage} totalJobs={jobs.length} paginate={paginate} currentPage={currentPage} />
      </div>
    </main>
  )
}
