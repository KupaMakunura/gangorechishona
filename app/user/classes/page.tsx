"use client";
import { useSession } from 'next-auth/react';

const DashboardPage = () => {
    const { data, status, update } = useSession()

    
    return (
        <div>

            {data?.user?.name}

        </div>
    )
}

export default DashboardPage;