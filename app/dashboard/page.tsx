"use client";
import React from 'react'
import { useSession } from 'next-auth/react';

const Dashboard = () => {
    const { data } = useSession()
    return (
        <div>

            {data?.user?.email}

        </div>
    )
}

export default Dashboard;