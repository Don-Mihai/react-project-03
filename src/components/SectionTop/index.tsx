import LinkButton from '../LinkButton';
import bemCreator from '../bemCreator';

import './SectionTop.scss';

const cn = bemCreator('section-top');

interface SectionTopProps {
    sectionTitle: string;
    buttonText: string;
    buttonLinkTo?: string;
}

const SectionTop = ({ sectionTitle, buttonText, buttonLinkTo = '/' }: SectionTopProps) => {
    return (
        <div className={cn()}>
            <h2 className={cn('title')}>{sectionTitle}</h2>
            <LinkButton buttonText={buttonText} linkTo={buttonLinkTo} />
        </div>
    );
};

export default SectionTop;
