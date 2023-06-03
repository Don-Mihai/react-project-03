import bemCreator from '../bemCreator';
import Grid from '@mui/material/Grid';
import './CustomersSection.scss';
import SectionTitle from './SectionTitle';
import SectionButton from './SectionButton';
import CustumerCard from './CustumerCard';
import { Custumer } from '../../redux/customer/types';

const cn = bemCreator('customersSection');

interface Props {
    sectionTitle: string;
    buttonText: string;
    freelancers: Custumer[];
}

const CustomersSection = ({ sectionTitle, buttonText, freelancers }: Props) => {
    return (
        <>
            <section className={cn()}>
                <div className={cn('title-contaner')}>
                    <SectionTitle title={sectionTitle} />
                    <SectionButton buttonText={buttonText} linkTo="/" />
                </div>
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
