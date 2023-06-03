import React from 'react';
import Hero from '../../components/Hero';
import CustomersSection from '../../components/CustomersSection';
import FreelanceSection from '../../components/FreelanceSection';
import { Freelancer } from '../../redux/freelancer/types';

interface Props {}

const Home = ({}: Props) => {
    return (
        <>
            <Hero />
            <CustomersSection />
            <FreelanceSection />
        </>
    );
};

export default Home;
