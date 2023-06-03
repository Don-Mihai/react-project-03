import React from 'react';
import Hero from '../../components/Hero';
import CustomersSection from '../../components/CustomersSection';
import FreelanceSection from '../../components/FreelanceSection';
import Header from '../../components/Header/Header';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { decrement, incrementByAmount } from '../../redux/counter';
import { Freelancer } from '../../redux/freelancer/types';

interface Props {
    freelancers: Freelancer[];
}

const Home = ({ freelancers }: Props) => {
    const value = useAppSelector(state => state.counter.value);
    const dispatch = useAppDispatch();

    const handleDecrement = () => {
        dispatch(decrement());
    };

    const handleByAmount = () => {
        dispatch(incrementByAmount(5));
    };

    return (
        <>
            <button onClick={handleByAmount}>+</button>
            <button onClick={handleDecrement}>-</button>
            {value}
            <Hero />
            <CustomersSection freelancers={freelancers} />
            <FreelanceSection />
        </>
    );
};

export default Home;

// {
//     name: 'Увеличть число на определененное значение',
//     payload: 5
// }
