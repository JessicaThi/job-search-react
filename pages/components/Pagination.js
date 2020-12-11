import React from 'react'

const Pagination = ({ jobsPerPage, totalJobs, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalJobs / jobsPerPage); i++) {
    pageNumbers.push(i);
  }

  const leftPages = [currentPage - 1, currentPage, currentPage + 1];
  const lastPages = [currentPage - 2, currentPage - 1, currentPage];

  return (
    <nav className="col-span-1 lg:col-span-3">
      <ul className="flex justify-center lg:justify-end">
        {/* bouton page PRECEDENTE */}
        {(currentPage != 1) ?
          <li>
            <a onClick={() => paginate(currentPage - 1)} className="w-9 h-9 mr-3 flex justify-center items-center font-roboto font-normal text-xs text-gray-400 border border-gray-400 rounded hover:text-blue-500 hover:border-blue-500" href="#!" >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
            </a>
          </li>
          : ''}

        {/* Pagination classique si <= 5 */}
        {(pageNumbers.length <= 5) ?
          pageNumbers.map(number => {
            return (
              <li key={number}>
                <a onClick={() => paginate(number)} className={number == currentPage ? 'w-9 h-9 mr-3 flex justify-center items-center font-roboto font-normal text-xs text-white bg-blue-500 border border-blue-500 rounded' : 'w-9 h-9 mr-3 flex justify-center items-center font-roboto font-normal text-xs text-gray-400 border border-gray-400 rounded hover:text-blue-500 hover:border-blue-500'} href="#!" >
                  {number}
                </a>
              </li>
            )
          })
          : ''}

        {/* Cas lorqu'on est sur la page 1 */}
        {(pageNumbers.length > 5 && currentPage == 1) ?
          <>
            {[1, 2, 3].map(number => {
              return (
                <li key={number}>
                  <a onClick={() => paginate(number)} className={number == currentPage ? 'w-9 h-9 mr-3 flex justify-center items-center font-roboto font-normal text-xs text-white bg-blue-500 border border-blue-500 rounded' : 'w-9 h-9 mr-3 flex justify-center items-center font-roboto font-normal text-xs text-gray-400 border border-gray-400 rounded hover:text-blue-500'} href="#!" >
                    {number}
                  </a>
                </li>
              )
            })}
            <li className="w-9 h-9 mr-3 flex justify-center items-center"><svg className="w-6 h-6 fill-current text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" /></svg></li>
            <li key={pageNumbers.length}>
              <a onClick={() => paginate(pageNumbers.length)} className="w-9 h-9 mr-3 flex justify-center items-center font-roboto font-normal text-xs text-gray-400 border border-gray-400 rounded hover:text-blue-500 hover:border-blue-500" href="#!" >
                {pageNumbers.length}
              </a>
            </li>
          </>
          : ''}

        {/* Cas lorqu'on va sur les pages suivantes "proche" de 1 */}
        {(pageNumbers.length > 5 && currentPage != 1 && currentPage != pageNumbers.length - 1 && currentPage != pageNumbers.length) ?
          <>
            {leftPages.map(number => {
              return (
                <li key={number}>
                  <a onClick={() => paginate(number)} className={number == currentPage ? 'w-9 h-9 mr-3 flex justify-center items-center font-roboto font-normal text-xs text-white bg-blue-500 border border-blue-500 rounded' : 'w-9 h-9 mr-3 flex justify-center items-center font-roboto font-normal text-xs text-gray-400 border border-gray-400 rounded hover:text-blue-500'} href="#!" >
                    {number}
                  </a>
                </li>
              )
            })}
            <li className="w-9 h-9 mr-3 flex justify-center items-center"><svg className="w-6 h-6 fill-current text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" /></svg></li>
            <li key={pageNumbers.length}>
              <a onClick={() => paginate(pageNumbers.length)} className="w-9 h-9 mr-3 flex justify-center items-center font-roboto font-normal text-xs text-gray-400 border border-gray-400 rounded hover:text-blue-500 hover:border-blue-500" href="#!" >
                {pageNumbers.length}
              </a>
            </li>
          </>
          : ''}

        {/* Cas lorqu'on est sur l'AVANT-dernière page */}
        {(pageNumbers.length > 5 && currentPage != 1 && currentPage == pageNumbers.length - 1) ?
          <>
            <li key={1}>
              <a onClick={() => paginate(1)} className="w-9 h-9 mr-3 flex justify-center items-center font-roboto font-normal text-xs text-gray-400 border border-gray-400 rounded hover:text-blue-500 hover:border-blue-500" href="#!" >
                {1}
              </a>
            </li>
            <li className="w-9 h-9 mr-3 flex justify-center items-center"><svg className="w-6 h-6 fill-current text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" /></svg></li>
            {leftPages.map(number => {
              return (
                <li key={number}>
                  <a onClick={() => paginate(number)} className={number == currentPage ? 'w-9 h-9 mr-3 flex justify-center items-center font-roboto font-normal text-xs text-white bg-blue-500 border border-blue-500 rounded' : 'w-9 h-9 mr-3 flex justify-center items-center font-roboto font-normal text-xs text-gray-400 border border-gray-400 rounded hover:text-blue-500'} href="#!" >
                    {number}
                  </a>
                </li>
              )
            })}
          </>
          : ''}

        {/* Cas lorqu'on est sur la dernière page */}
        {(pageNumbers.length > 5 && currentPage != 1 && currentPage == pageNumbers.length) ?
          <>
            <li key={1}>
              <a onClick={() => paginate(1)} className="w-9 h-9 mr-3 flex justify-center items-center font-roboto font-normal text-xs text-gray-400 border border-gray-400 rounded hover:text-blue-500 hover:border-blue-500" href="#!" >
                {1}
              </a>
            </li>
            <li className="w-9 h-9 mr-3 flex justify-center items-center"><svg className="w-6 h-6 fill-current text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" /></svg></li>
            {lastPages.map(number => {
              return (
                <li key={number}>
                  <a onClick={() => paginate(number)} className={number == currentPage ? 'w-9 h-9 mr-3 flex justify-center items-center font-roboto font-normal text-xs text-white bg-blue-500 border border-blue-500 rounded' : 'w-9 h-9 mr-3 flex justify-center items-center font-roboto font-normal text-xs text-gray-400 border border-gray-400 rounded hover:text-blue-500'} href="#!" >
                    {number}
                  </a>
                </li>
              )
            })}
          </>
          : ''}

        {/* bouton page SUIVANTE */}
        {(currentPage != pageNumbers.length) ?
          <li>
            <a onClick={() => paginate(currentPage + 1)} className="w-9 h-9 mr-3 flex justify-center items-center font-roboto font-normal text-xs text-gray-400 border border-gray-400 rounded hover:text-blue-500 hover:border-blue-500" href="#!" >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
            </a>
          </li>
          : ''}
      </ul>
    </nav >
  )
}

export default Pagination