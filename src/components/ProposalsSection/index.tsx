import bemCreator from '../bemCreator';
import Grid from '@mui/material/Grid';
import './CustomersSection.scss';

import CustumerCard from './ProposalCard';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { useEffect } from 'react';
import SectionTop from '../SectionTop';
import { fetch } from '../../redux/proposal';

const cn = bemCreator('customersSection');

const ProposalsSection = () => {
    const proposals = useAppSelector(state => state.proposal.proposals);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetch());
    }, []);
    return (
        <>
            <section className={cn()}>
                <SectionTop className={cn('top')} sectionTitle="Раздел услуг" buttonText="Все услуги" buttonLinkTo="/find-freelancers" />
                <Grid container spacing={2} className={cn('cards')}>
                    {proposals.slice(0, 3).map(proposal => (
                        <Grid key={proposal.id} item xs={12} sm={6} md={4}>
                            <CustumerCard proposal={proposal} />
                        </Grid>
                    ))}
                </Grid>
            </section>
        </>
    );
};

export default ProposalsSection;
