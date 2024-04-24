import { Navbar } from '../components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { Pets } from '../components/Pets';

export const Home = () => {

    return <div>
        <Navbar />
        <div className='pt-[50px] w-full bg-gray-100 pb-4'>
            <div className='w-[40%] m-auto min-h-[400px] h-auto'>
                <Routes>
                    <Route path='/' element={<Pets/>} />
                </Routes>
            </div>
        </div>
    </div>
}