import AppCourse from '@/components/AppCourse';
import AppNavbar from '@/components/AppNavBar';


const Courses = () => {

    return (
        <>
            <AppNavbar />
            <div className='flex justify-center'>
                <AppCourse />
            </div>
        </>

    )
}

export default Courses