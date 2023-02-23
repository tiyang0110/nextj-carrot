import type { NextPage } from "next";
import Layout from "../../components/layout";

const Create: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className="px-4 space-y-5">
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
        <button className="bg-orange-500 w-full hover:bg-orange-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium mt-4 focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none">Go Live</button>
      </div>
    </Layout>
  );
};

export default Create;