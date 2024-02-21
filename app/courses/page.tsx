import AppCourse from '@/components/AppCourse';
import AppNavbar from '@/components/AppNavBar';


const Courses = () => {

    return (
        <div className='container'>
            <AppNavbar />
            <div className='flex justify-center'>
                <AppCourse />
            </div>
        </div>

    )
}

export default Courses