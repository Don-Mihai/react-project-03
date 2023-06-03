import bemCreator from '../bemCreator';
import Grid from '@mui/material/Grid';
import './CustomersSection.scss';

import CustumerCard from './CustumerCard';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { useEffect } from 'react';
import { fetchCustomer } from '../../redux/customer';
import SectionTop from '../SectionTop';

const cn = bemCreator('customersSection');

const CustomersSection = () => {
    const customers = useAppSelector(state => state.customer.customers);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchCustomer());
    }, []);
    return (
        <>
            <section className={cn()}>
                <SectionTop sectionTitle="Раздел заказчиков" buttonText="Все фрилансеры" buttonLinkTo="/" />
                <Grid container spacing={2} className={cn('cards')}>
                    {customers.map(custumer => (
                        <Grid key={custumer.id} item xs={12} sm={6} md={4}>
                            <CustumerCard custumer={custumer} />
                        </Grid>
                    ))}
                </Grid>
            </section>
        </>
    );
};

export default CustomersSection;
