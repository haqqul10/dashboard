import { useEffect, useState } from 'react';

const TableOne = () => {
  const url = 'http://localhost:3000/tickets';
  const [data, setData] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    fetch(url)
      .then((resp) => resp.json())
      .then((resp) => setData(resp));
  };
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 py-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h4 className="mb-1 text-base font-semibold text-black dark:text-white">
            Unresolved tickets
          </h4>
          <p className="text-bodydark font-medium text-sm">
            Group: <span className="text-black dark:text-white">support</span>
          </p>
        </div>
        <p className="cursor-pointer text-primary">View details</p>
      </div>
      <div>
        {data?.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center border-b border-gray pb-4 mb-4 last:border-b-0 last:pb-0 last:mb-0"
          >
            <h5 className="text-black dark:text-white">{item.status}</h5>
            <p>{item.total}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableOne;
