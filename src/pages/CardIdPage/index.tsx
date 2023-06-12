import * as React from 'react';
import { useState, useEffect } from 'react';
import bemCreator from '../../components/bemCreator';
import { Proposal } from '../../redux/proposal/types';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetch } from '../../redux/proposal';
import { useParams } from 'react-router';
import './CardIdPage.scss';

const cn = bemCreator('card-id-page');

interface Props {
    proposal: Proposal;
}

const CardIdPage = () => {
    const { id } = useParams();

    const proposals = useAppSelector(state => state.proposal.proposals);
    const dispatch = useAppDispatch();
    const proposal = proposals.find(proposal => proposal.id === Number(id));

    useEffect(() => {
        dispatch(fetch());
    }, []);
    console.log(proposals);

    return (
        <div>
            {proposal ? (
                <div className={cn()}>
                    <h2>Заголовок: {proposal.title}</h2>
                    <p> ParamId: {id}</p>
                    <p> UserId: {proposal.userId}</p>
                    <p>Описание: {proposal.description}</p>
                    <p>Цена: {proposal.price}</p>
                    <p>Статус: {proposal.status}</p>
                </div>
            ) : (
                <p>Proposal not found</p>
            )}
        </div>
    );
};

export default CardIdPage;
