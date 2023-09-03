import Header from './Header';
import Sidebar from './Sidebar';

function DefaultLayout() {
  return (
    <>
      <Header />
      <div className='container'>
        <Sidebar/>
      </div>
    </>
  );
}

export default DefaultLayout;
