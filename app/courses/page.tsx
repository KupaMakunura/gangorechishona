import AppCourse from '@/components/AppCourse';
import AppNavbar from '@/components/AppNavBar';


const Courses = () => {

    return (
        <>
            <AppNavbar />
            <div className='mt-5 px-3 '>
                <AppCourse />
            </div>
        </>

    )
}

export default Courses