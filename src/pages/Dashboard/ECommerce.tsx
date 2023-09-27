import { useEffect, useState } from 'react';
import CardFour from '../../components/CardFour.tsx';
import CardOne from '../../components/CardOne.tsx';
import CardThree from '../../components/CardThree.tsx';
import CardTwo from '../../components/CardTwo.tsx';
import ChartOne from '../../components/ChartOne.tsx';
import ChartFive from '../../components/CartFive.tsx';
import ChatCard from '../../components/ChatCard.tsx';
import TableOne from '../../components/TableOne.tsx';
import { useNavigate } from 'react-router';

const ECommerce = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('user') === 'guest') {
      navigate('/tiket');
    }
  }, []);

  useEffect(() => {
    if (!localStorage.getItem('user')) {
      navigate('/');
    }
  }, []);

  const url = 'http://localhost:3000/data';
  const [data, setData] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    fetch(url)
      .then((resp) => resp.json())
      .then((resp) => setData(resp));
  };

  // console.log(data[0]);
  if (data.length === 0) return;

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardOne dataOne={data[0]} />
        <CardTwo dataTwo={data[1]} />
        <CardThree dataThree={data[2]} />
        <CardFour dataFour={data[3]} />
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne />
        <ChartFive />
        <div className="col-span-12 xl:col-span-6">
          <TableOne />
        </div>
        <div className="col-span-12 xl:col-span-6">
          <ChatCard />
        </div>
      </div>
    </>
  );
};

export default ECommerce;
