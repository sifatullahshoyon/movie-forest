import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const {status , error , statusText} = useRouteError() ;
    return (
        <section className='h-screen mt-8'>
            <div className='flex flex-col justify-center items-center p-2'>
                <div>
                    <p className='text-center text-7xl mb-3'>😔</p>
                    <h1 className='text-9xl font-bold text-yellow-300 text-center mb-2'>{status || 404}</h1>
                    <p className='font-medium text-lg mb-5'>{error?.message ? error?.message : statusText}</p>
                    <Link to="/" className='btn-primary'>Back To Home Page</Link>
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;