import React, { useEffect, useState } from 'react';
import bemCreator from '../../components/bemCreator';
import SectionTop from '../../components/SectionTop';
import { useMemo } from 'react';

import './FindFreelancers.scss';
import CustumerCard from '../../components/CustomersSection/CustumerCard';
import freelancersJSON from '../../assets/freelancer.json';

import { Checkbox, FormControlLabel, FormGroup, TextField } from '@mui/material';

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
    const freelancers: Freelancer[] = freelancersJSON;
    const [filteredFreelancers, setFilteredFreelancers] = useState<Freelancer[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [searchResult, setSearchResult] = useState<Freelancer[]>([]);
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
        const filterFreelancers = (freelancers: Freelancer[]) => {
            const filteredBySearch = freelancers.filter(person => {
                return (
                    person.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    person.status.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    person.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    person.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))
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
                    if (checkboxValues.development && person.category === 'development') return true;
                    if (checkboxValues.testing && person.category === 'testing') return true;
                    if (checkboxValues.administration && person.category === 'administration') return true;
                    if (checkboxValues.design && person.category === 'design') return true;
                    if (checkboxValues.content && person.category === 'content') return true;
                    if (checkboxValues.marketing && person.category === 'marketing') return true;
                    return false;
                });

                return filteredByCheckbox;
            }

            return filteredBySearch;
        };
        const filtered = filterFreelancers(freelancers);
        setSearchResult(filtered);
    }, [freelancers, searchQuery, checkboxValues, filteredFreelancers]);

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCheckboxValues({ ...checkboxValues, [event.target.name]: event.target.checked });
    };

    return (
        <section className={cn()}>
            <SectionTop className={cn('top')} sectionTitle="Раздел заказчиков" sectionSubtitle="Найти фрилансера" />
            <div className={cn('wrap')}>
                <div className={cn('cards')}>
                    {searchResult.map(customer => (
                        <CustumerCard className={cn('card')} key={customer.id} custumer={customer} showDescription={true} />
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
