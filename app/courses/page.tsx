import AppCourse from '@/components/AppCourse';
import AppNavbar from '@/components/AppNavBar';


const Courses = () => {

    return (
        <>
            <AppNavbar />
            <div className='flex justify-center w-full mt-5'>
                <AppCourse />
            </div>
        </>

    )
}

export default Courses