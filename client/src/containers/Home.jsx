import { Navbar } from '../components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { Pets } from '../components/Pets';
import { AddPet } from '../components/AddPet';

export const Home = () => {

    return <div className='min-h-[100vh] h-auto bg-gray-100'>
        <Navbar />
        <div className='pt-[50px] w-full pb-4'>
            <div className='w-[40%] m-auto min-h-[400px] h-auto'>
                <Routes>
                    <Route path='/' element={<Pets/>} />
                    <Route path='/newPet' element={<AddPet/>}/>
                </Routes>
            </div>
        </div>
    </div>
}