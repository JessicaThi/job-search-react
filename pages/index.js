import { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Jobs from "./components/Jobs"


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
  const [cityList, setCityList] = useState([
    { id: 1, value: "London", isChecked: true },
    { id: 2, value: "Amsterdam", isChecked: false },
    { id: 3, value: "New York", isChecked: false },
    { id: 4, value: "Berlin", isChecked: false },
  ])
  const [citySelect, setCitySelect] = useState("London");
  const [jobs, setJobs] = useState("");
  const [inputCity, setInputCity] = useState("");
  const [searchDescription, setSearchDescription] = useState("");
  const [changeDescription, setChangeDescription] = useState("");

  //const [posts, setPosts] = useState([]);
  //const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage, setJobsPerPage] = useState(5);

  useEffect(() => {
    fetch(
      `/api/hello?location=${citySelect}`,
      {
        method: "GET",
      }
    )
      .then(res => res.json())
      .then(response => {
        console.log(response)
        setJobs(response)
      })
      .catch(error => console.log(error));
  }, [citySelect]);

  useEffect(() => {
    fetch(
      `/api/description?description=${changeDescription}`,
      {
        method: "GET",
      }
    )
      .then(res => res.json())
      .then(response => {
        console.log(response)
        setJobs(response)
      })
      .catch(error => console.log(error));
  }, [changeDescription]);

  const changeCity = (e) => {
    const newCityList = cityList.map(city => {
      if (e.target.value == city.value && city.isChecked != true) {
        city.isChecked = true;
        setCitySelect(e.target.value);
        setInputCity('');
      } else {
        city.isChecked = false;
      }
      return city
    })
    setCityList(newCityList);
  };

  const changeLocation = (e) => {
    setCitySelect(e.target.value);
    const newCityList = cityList.map(city => {
      city.isChecked = false;
      return city
    })
    setCityList(newCityList);
  }
  const debouncedChangeLocation = debounce(changeLocation, 500)

  const onChangeDescription = (e) => {
    setSearchDescription(e.target.value)
    const newCityList = cityList.map(city => {
      city.isChecked = false;
      return city
    })
    setCityList(newCityList);
    setInputCity('');
  }

  //get current jobs offer
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

  return (
    <main className="container max-w-screen-xl mx-auto px-5">
      <h1 className="text-2xl	font-bold py-8">Github <span className="font-light">Jobs</span></h1>
      <div className="block-search rounded-lg py-6 px-5 flex justify-center items-center">
        <div className="w-full md:w-11/12 lg:w-9/12 flex justify-between items-center box-search bg-white rounded p-1 focus-within:text-gray-600">
          <svg className="w-6 h-6 ml-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
          <input onChange={onChangeDescription} value={searchDescription} className="w-full font-roboto font-normal text-xs truncate outline-none ml-2 mr-4" type="text" placeholder="Title, companies, expertise or benefits" />
          <button onClick={() => setChangeDescription(searchDescription)} className="bg-blue-500 font-roboto text-white text-base font-medium py-3 px-10 rounded">Search</button>
        </div>
      </div>
      <div className="grid grid-col-1 lg:grid-rows-3 lg:grid-flow-col gap-8 pt-8">
        <aside className="col-span-3 lg:col-span-1 row-span-3">
          <div className="flex flex-col pt-7 pb-4">
            <label for="location" className="font-bold uppercase text-sm text-gray-400 pb-3">Location</label>
            <div className="flex bg-white text-gray-400 focus:text-gray-900 shadow-sm rounded-sm font-roboto font-normal text-xs truncate p-3">
              <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" /></svg>
              <input className="ml-2 flex-1 placeholder-gray-400 text-blue-900 outline-none" type="search" id="location" name="location"
                placeholder="City, state, zip code or country"
                value={inputCity}
                onChange={(e) => { setInputCity(e.target.value); setSearchDescription(''); debouncedChangeLocation(e) }}
              />
            </div>
          </div>
          {
            cityList.map(city => {
              return (
                <div key={city.id} className="flex items-center pt-2 pb-1">
                  <input checked={city.isChecked} type="checkbox" className="form-tick appearance-none h-4 w-4 border border-gray-300 rounded-sm form-checkbox text-blue-600 checked:border-transparent checked:border-blue-600 focus:outline-none" onChange={changeCity} value={city.value} id={city.value} />
                  <label className="font-medium text-sm text-blue-900 ml-3" for={city.value}>{city.value}</label>
                </div>
              )
            })
          }
        </aside>

        <Jobs jobs={jobs} />

        <div className="col-span-3 lg:col-span-2 flex justify-center lg:justify-end">
          <button className="w-9 h-9 mr-3 flex justify-center items-center font-roboto font-normal text-xs text-gray-400 border border-gray-400 rounded hover:text-blue-500 hover:border-blue-500 active:bg-blue-500 active:text-white"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" /></svg></button>
          <button className="w-9 h-9 mr-3 flex justify-center items-center font-roboto font-normal text-xs text-gray-400 border border-gray-400 rounded hover:text-blue-500 hover:border-blue-500 active:bg-blue-500 active:text-white">1</button>
          <button className="w-9 h-9 mr-3 flex justify-center items-center font-roboto font-normal text-xs text-gray-400 border border-gray-400 rounded hover:text-blue-500 hover:border-blue-500 active:bg-blue-500 active:text-white">2</button>
          <button className="w-9 h-9 mr-3 flex justify-center items-center font-roboto font-normal text-xs text-gray-400 border border-gray-400 rounded hover:text-blue-500 hover:border-blue-500 active:bg-blue-500 active:text-white">3</button>
          <div className="w-9 h-9 mr-3 flex justify-center items-center"><svg className="w-6 h-6 fill-current text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" /></svg></div>
          <button className="w-9 h-9 mr-3 flex justify-center items-center font-roboto font-normal text-xs text-gray-400 border border-gray-400 rounded hover:text-blue-500 hover:border-blue-500 active:bg-blue-500 active:text-white">10</button>
          <button className="w-9 h-9 flex justify-center items-center font-roboto font-normal text-xs text-gray-400 border border-gray-400 rounded hover:text-blue-500 hover:border-blue-500 active:bg-blue-500 active:text-white"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg></button>
        </div>
      </div>
    </main>
  )
}
