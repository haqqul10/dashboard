const CardOne = (dataOne) => {
  // console.log(dataOne);

  return (
    <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="mt-4 flex items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <span className="text-sm font-medium mb-4">
            {dataOne.dataOne.title}
          </span>
          <h3 className="text-3xl font-bold text-black dark:text-white">
            {dataOne.dataOne.total}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default CardOne;
