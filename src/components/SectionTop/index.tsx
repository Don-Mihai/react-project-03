import LinkButton from '../LinkButton';
import bemCreator from '../bemCreator';

import './SectionTop.scss';

const cn = bemCreator('section-top');

interface SectionTopProps {
    sectionTitle: string;
    sectionSubtitle?: string;
    className?: string;
    buttonText?: string;
    buttonLinkTo?: string;
}

const SectionTop = ({ sectionTitle, buttonLinkTo = '/', ...props }: SectionTopProps) => {
    return (
        <div className={`${cn()} ${props?.className ? props.className : ''}`}>
            <div className={cn('wrap')}>
                <h2 className={cn('title')}>{sectionTitle}</h2>
                {props.buttonText && <LinkButton className={cn('link')} linkTo={buttonLinkTo} {...props} />}
            </div>
            {props.sectionSubtitle && <h3 className={cn('subtitle')}>{props.sectionSubtitle}</h3>}
        </div>
    );
};

export default SectionTop;
