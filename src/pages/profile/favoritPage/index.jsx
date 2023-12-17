import Footer from '../../../component/Footer';
import { MainLayout } from '../../../component/Layouts';
import Navbar from '../../../component/Navbar';
import Togolist from './Togolist';

const AccountPage = () => {
  return (
    <>
      <MainLayout>
        <Navbar />
        <Togolist />
        <Footer />
      </MainLayout>
    </>
  );
};

export default AccountPage;
