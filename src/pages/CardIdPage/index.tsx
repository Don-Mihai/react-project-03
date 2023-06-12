import * as React from 'react';
import { useState, useEffect } from 'react';
import bemCreator from '../../components/bemCreator';
import { Proposal } from '../../redux/proposal/types';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetch, fetchById } from '../../redux/proposal';
import { useParams } from 'react-router';
import './CardIdPage.scss';

const cn = bemCreator('card-id-page');

const CardIdPage = () => {
    const [proposal, setProposal] = useState<Proposal>({} as Proposal);
    const { id } = useParams();

    const dispatch = useAppDispatch();

    const fetchProposal = async () => {
        const data = await dispatch(fetchById(Number(id)));
        setProposal(data.payload);
        return data.payload;
    };

    useEffect(() => {
        fetchProposal();
    }, []);

    return (
        <div>
            {!!proposal?.id ? (
                <div className={cn()}>
                    <h2>Заголовок: {proposal?.title}</h2>
                    <p> ParamId: {id}</p>
                    <p> UserId: {proposal?.userId}</p>
                    <p>Описание: {proposal?.description}</p>
                    <p>Цена: {proposal?.price}</p>
                    <p>Статус: {proposal?.status}</p>
                </div>
            ) : (
                <p>Proposal not found</p>
            )}
        </div>
    );
};

export default CardIdPage;
