import React, { useEffect } from 'react';
import bemCreator from '../../components/bemCreator';
import SectionTop from '../../components/SectionTop';

import './FindFreelancers.scss';
import CustumerCard from '../../components/CustomersSection/CustumerCard';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchCustomer } from '../../redux/customer';

import freelancers from '../../assets/freelancer.json';

const cn = bemCreator('find-freelancers');

const FindFreelancers = () => {
    // todo: добавить актуальные данные в мокапи
    // const freelancers = useAppSelector(state => state.freelancers.items);
    // const dispatch = useAppDispatch();

    useEffect(() => {
        // dispatch(fetchCustomer());
    }, []);

    return (
        <section className={cn()}>
            <SectionTop className={cn('top')} sectionTitle="Раздел заказчиков" sectionSubtitle="Найти фрилансера" />
            <div className={cn('wrap')}>
                <div className={cn('cards')}>
                    {freelancers.map(customer => (
                        <CustumerCard className={cn('card')} key={customer.id} custumer={customer} showDescription={true} />
                    ))}
                </div>
                {/* Никит, я предварительно задала размеры для след контейнера. */}
                <div className={cn('filter')}>Тут должен быть фильтр</div>
            </div>
        </section>
    );
};

export default FindFreelancers;
