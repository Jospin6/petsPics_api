
import { Navbar } from '../components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { Pets } from '../components/Pets';
import { CreatePet } from '../components/CreatePet';
import { PostPet } from '../components/PostPet';
import { Comments } from '../components/Comments';
import { Likes } from '../components/Likes';
import { UserAccount } from '../components/UserAccount';
import { UserInfo } from '../components/UserInfo';
import { EditPost } from '../components/EditPost';
import { EditPet } from '../components/EditPet';

export const Home = () => {
    return <div className='min-h-[100vh] h-auto bg-[#FCFCFC]'>
        <Navbar />
        <div className='pt-[50px] w-full pb-4'>
            <div className='lg:w-[40%] md:w-[60%] md:m-auto px-2 md:px-0 min-h-[400px] h-auto'>
                <Routes>
                    <Route path='/' element={<Pets/>} />
                    <Route path='/newPet' element={<CreatePet/>}/>
                    <Route path='/post' element={<PostPet/>}/>
                    <Route path='/comment/:id' element={<Comments/>}/>
                    <Route path='/likes' element={<Likes/>}/>
                    <Route path='/account' element={<UserAccount/>}/>
                    <Route path='/infos' element={<UserInfo/>}/>
                    <Route path='/edit_post/:id' element={<EditPost/>}/>
                    <Route path='/edit_pet/:id' element={<EditPet/>}/>
                </Routes>
            </div>
        </div>
    </div>
}