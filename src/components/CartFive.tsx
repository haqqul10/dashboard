import React from 'react';

const CartFive = () => {
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
      <div className="">
        <div className="flex flex-col items-center justify-center py-5 border-b border-gray">
          <h3 className="text-lg font-bold text-black dark:text-white">449</h3>
          <span className="text-sm font-medium mb-2">Resolved</span>
        </div>
        <div className="flex flex-col items-center justify-center py-5 border-b border-gray">
          <h3 className="text-lg font-bold text-black dark:text-white">426</h3>
          <span className="text-sm font-medium mb-2">Received</span>
        </div>
        <div className="flex flex-col items-center justify-center py-5 border-b border-gray">
          <h3 className="text-lg font-bold text-black dark:text-white">33m</h3>
          <span className="text-sm font-medium mb-2">
            Average first response time
          </span>
        </div>
        <div className="flex flex-col items-center justify-center py-5 border-b border-gray">
          <h3 className="text-lg font-bold text-black dark:text-white">
            3h 8m
          </h3>
          <span className="text-sm font-medium mb-2">
            Average response time
          </span>
        </div>
        <div className="flex flex-col items-center justify-center py-5">
          <h3 className="text-lg font-bold text-black dark:text-white">94%</h3>
          <span className="text-sm font-medium mb-2">
            Resolution within SLA
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartFive;
