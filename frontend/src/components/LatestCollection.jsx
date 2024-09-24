import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';

const LatestCollection = () => {

    const { products } = useContext(ShopContext);

    return (
        <div className='my-10'>
            <div className='py-8 text-3xl text-center'>
                <Title text1={'LATEST'} text2={'COLLECTIONS'} />
            </div>
        </div>
    )
}

export default LatestCollection