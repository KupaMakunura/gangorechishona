import AppCourse from '@/components/AppCourse';
import AppNavbar from '@/components/AppNavBar';


const Courses = async () => {

    return (
        <>
            <AppNavbar />
            <div className='flex justify-center'>
                <div className="grid grid-cols-4 space-x-4 mt-5">
                    <AppCourse />
                </div>

            </div>
        </>

    )
}

export default Courses