import bemCreator from '../bemCreator';
import Grid from '@mui/material/Grid';
import './CustomersSection.scss';
import SectionTitle from './SectionTitle';
import SectionButton from './SectionButton';
import CustumerCard from './CustumerCard';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { useEffect } from 'react';
import { fetchCustomer } from '../../redux/customer';

const cn = bemCreator('customersSection');

interface Props {}

const CustomersSection = ({}: Props) => {
    const customers = useAppSelector(state => state.customer.customers);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchCustomer());
    }, []);

    return (
        <>
            <section className={cn()}>
                {/* todo: вынести в отдельный компонент название раздела [Милена] */}
                <div className={cn('title-contaner')}>
                    <SectionTitle title={'Раздел заказчиков'} />
                    <SectionButton buttonText={'Все фрилансеры'} linkTo="/" />
                </div>
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
