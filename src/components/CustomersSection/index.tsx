import bemCreator from '../bemCreator';
import Grid from '@mui/material/Grid';
import './CustomersSection.scss';

import CustumerCard from './CustumerCard';
import { Custumer } from '../../redux/customer/types';
import SectionTop from '../SectionTop';

const cn = bemCreator('customersSection');

interface Props {
    freelancers: Custumer[];
}

const CustomersSection = ({ freelancers }: Props) => {
    return (
        <>
            <section className={cn()}>
                <SectionTop sectionTitle="Раздел заказчиков" buttonText="Все фрилансеры" buttonLinkTo="/" />
                <Grid container spacing={2} className={cn('cards')}>
                    {freelancers.map(freelancer => (
                        <Grid key={freelancer.id} item xs={12} sm={6} md={4}>
                            <CustumerCard freelancer={freelancer} />
                        </Grid>
                    ))}
                </Grid>
            </section>
        </>
    );
};

export default CustomersSection;
