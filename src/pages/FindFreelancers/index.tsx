import React, { useEffect, useState } from 'react';
import bemCreator from '../../components/bemCreator';
import SectionTop from '../../components/SectionTop';
import { useMemo } from 'react';

import './FindFreelancers.scss';
import CustumerCard from '../../components/ProposalsSection/ProposalCard';
import freelancersJSON from '../../assets/freelancer.json';

import { Checkbox, FormControlLabel, FormGroup, TextField } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetch } from '../../redux/proposal';
import { Proposal } from '../../redux/proposal/types';
import { CATEGORY_TYPE } from '../../redux/userProfile/types';

const cn = bemCreator('find-freelancers');

interface Freelancer {
    id: number;
    name: string;
    image: string;
    status: string;
    skills: string[];
    ratePerHour: number;
    description: string;
    rating: number;
    password: string;
    login: string;
    category: string;
}

interface CheckboxValues {
    development: boolean;
    testing: boolean;
    administration: boolean;
    design: boolean;
    content: boolean;
    marketing: boolean;
}

const FindFreelancers = () => {
    //притянем из хранилища
    const { proposals } = useAppSelector(store => store.proposal);
    //диспатч
    const dispatch = useAppDispatch();
    //получаем из хранища данные

    // надо вспомнить :D
    //что-то не так)

    React.useEffect(() => {
        dispatch(fetch());
    }, []);

    // const freelancers: Freelancer[] = freelancersJSON;
    const [filteredFreelancers, setFilteredFreelancers] = useState<Proposal[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [searchResult, setSearchResult] = useState<Proposal[]>([]);
    const [checkboxValues, setCheckboxValues] = useState<CheckboxValues>({
        development: false,
        testing: false,
        administration: false,
        design: false,
        content: false,
        marketing: false,
    });

    const handleSearchChange = (event: any) => {
        setSearchQuery(event.target.value);
    };

    useEffect(() => {
        const filterFreelancers = (proposals: Proposal[]) => {
            const filteredBySearch = proposals.filter(person => {
                return (
                    person.user?.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    person.status.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    person.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    person.userProfile?.skills?.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))
                );
            });

            if (
                checkboxValues.development ||
                checkboxValues.testing ||
                checkboxValues.administration ||
                checkboxValues.design ||
                checkboxValues.content ||
                checkboxValues.marketing
            ) {
                const filteredByCheckbox = filteredBySearch.filter(person => {
                    const category = person.userProfile?.category;
                    if (checkboxValues.development && category === CATEGORY_TYPE.DEVELOPMENT) return true;
                    if (checkboxValues.testing && category === CATEGORY_TYPE.TESTING) return true;
                    if (checkboxValues.administration && category === CATEGORY_TYPE.ADMINISTRATION) return true;
                    if (checkboxValues.design && category === CATEGORY_TYPE.DESIGN) return true;
                    if (checkboxValues.content && category === CATEGORY_TYPE.CONTENT) return true;
                    if (checkboxValues.marketing && category === CATEGORY_TYPE.MARKETING) return true;
                    return false;
                });

                return filteredByCheckbox;
            }

            return filteredBySearch;
        };
        const filtered = filterFreelancers(proposals);
        setSearchResult(filtered);
    }, [proposals, searchQuery, checkboxValues, filteredFreelancers]);

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCheckboxValues({ ...checkboxValues, [event.target.name]: event.target.checked });
    };

    return (
        <section className={cn()}>
            <SectionTop className={cn('top')} sectionTitle="Раздел заказчиков" sectionSubtitle="Найти фрилансера" />
            <div className={cn('wrap')}>
                <div className={cn('cards')}>
                    {searchResult.map(proposal => (
                        <CustumerCard className={cn('card')} key={proposal.id} proposal={proposal} showDescription={true} />
                    ))}
                </div>

                <div className={cn('filter')}>
                    <TextField key="search" value={searchQuery} placeholder="Поиск..." name="search" onChange={handleSearchChange} autoComplete="off" />

                    <div>
                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox checked={checkboxValues.development} onChange={handleCheckboxChange} name="development" />}
                                label="Разработка"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={checkboxValues.testing} onChange={handleCheckboxChange} name="testing" />}
                                label="Тестирование"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={checkboxValues.administration} onChange={handleCheckboxChange} name="administration" />}
                                label="Администрирование"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={checkboxValues.design} onChange={handleCheckboxChange} name="design" />}
                                label="Дизайн"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={checkboxValues.content} onChange={handleCheckboxChange} name="content" />}
                                label="Контент"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={checkboxValues.marketing} onChange={handleCheckboxChange} name="marketing" />}
                                label="Маркетинг"
                            />
                        </FormGroup>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FindFreelancers;
