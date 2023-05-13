import React from 'react';
import Hero from '../../components/Hero';
import { Freelancer } from '../../App';
import CustomersSection from '../../components/CustomersSection';
import FreelanceSection from '../../components/FreelanceSection';

interface Props {
    freelancers: Freelancer[];
}

const Home = ({ freelancers }: Props) => {
    return (
        <>
            <Hero />
            <CustomersSection sectionTitle="Раздел заказчиков" buttonText="Все фрилансеры" freelancers={freelancers} />
            <FreelanceSection />
        </>
    );
};

export default Home;
