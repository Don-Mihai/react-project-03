import bemCreator from '../bemCreator';
import Grid from '@mui/material/Grid';
import { Freelancer } from '../../App';
import './CustomersSection.scss';
import SectionTitle from './SectionTitle';
import SectionButton from './SectionButton';
import FreelancerCard from './FreelancerCard';

const cn = bemCreator('customersSection');

interface Props {
    sectionTitle: string;
    buttonText: string;
    freelancers: Freelancer[];
}

function CustomersSection({ sectionTitle, buttonText, freelancers }: Props) {
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
                            <FreelancerCard freelancer={freelancer} />
                        </Grid>
                    ))}
                </Grid>
            </section>
        </>
    );
}

export default CustomersSection;
