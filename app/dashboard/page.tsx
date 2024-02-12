"use client";
import { useSession } from 'next-auth/react';

const Dashboard = () => {
    const { data, status, update } = useSession()

    
    return (
        <div>

            {status}

        </div>
    )
}

export default Dashboard;