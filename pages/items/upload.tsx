import type { NextPage } from "next";
import Layout from "../../components/layout";

const Upload: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className="px-4 py-16">
        <div>
          <label className="w-full flex items-center cursor-pointer justify-center border-2 border-dashed border-gray-300 h-48 rounded-md text-gray-600 hover:text-orange-500 hover:border-orange-500">
              <svg
                  className="h-12 w-12"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
              >
                  <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  />
              </svg>
              <input className="hidden" type="file" />
          </label>
        </div>
        <div className="my-5">
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">Name</label>
          <input id="name" className="appearance-none w-full px-3 py2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500" type="text" placeholder="Write your name" />
        </div>
        <div className="my-5">
          <label htmlFor="price" className="mb-1 block text-sm font-medium text-gray-700">Price</label>
          <div className="relative flex items-center rounded-md shadow-sm">
            <div className="absolute left-0 pl-3 flex items-center justify-center pointer-events-none">
              <span className="text-gray-500 text-sm">$</span>
            </div>
            <input id="price" className="appearance-none pl-7 w-full px-3 py2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500" type="text" placeholder="0.00" />
            <div className="absolute right-0 pr-3 pointer-events-none flex items-center">
              <span className="text-gray-500">USD</span>
            </div>
          </div>
        </div>
        <div>
          <label className="mb-1 block  text-sm font-medium text-gray-700">Description</label>        
          <textarea rows={4} className="mt-1 shadow-md w-full focus:ring-orange-500 rounded-md border-gray-300 focus:border-orange-500" />
        </div>
        <button className="bg-orange-500 w-full hover:bg-orange-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium mt-4 focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none">Upload product</button>
      </div>
    </Layout>
  );
};

export default Upload;