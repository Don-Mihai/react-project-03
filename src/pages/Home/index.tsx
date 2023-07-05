import React from 'react';
import Hero from '../../components/Hero';
import ProposalsSection from '../../components/ProposalsSection';
import ProjectsSection from '../../components/ProjectsSection';

import TestChat from '../../components/TestChat';

const Home = () => {
    return (
        <>
            <Hero />
            {/* <TestChat /> */}
            <ProposalsSection />
            <ProjectsSection />
        </>
    );
};

export default Home;
