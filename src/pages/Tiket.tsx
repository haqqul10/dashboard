import { useEffect } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import TableTiket from '../components/TableTiket';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const Tiket = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('user')) {
      navigate('/');
    }
  }, []);
  return (
    <>
      <Breadcrumb pageName="Tiket" />

      {/* <!-- ====== Tiket Section Start ====== --> */}
      <div className="flex justify-end">
        <Link
          to="/addtiket"
          className="bg-meta-5 flex justify-center items-center w-[100px] font-medium cursor-pointer text-white rounded-lg mb-4 py-2"
        >
          create
        </Link>
      </div>
      <TableTiket />
      {/* <!-- ====== Tiket Section End ====== --> */}
    </>
  );
};

export default Tiket;
