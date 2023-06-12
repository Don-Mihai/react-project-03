import { Button, ButtonProps } from '@mui/material';
import { Link, LinkProps } from 'react-router-dom';

import './LinkButton.scss';

interface Props extends ButtonProps {
    buttonText?: string;
    linkTo?: string;
    className?: string;
    component?: LinkProps;
    to?: LinkProps;
}

const LinkButton = ({ variant, buttonText, className, linkTo = '/', ...props }: Props) => {
    const handleScrollToTop = () => {
        window.scrollTo(0, 0);
    };
    return (
        <Button
            onClick={handleScrollToTop}
            className={`link-button ${className}`}
            component={Link}
            to={linkTo}
            variant={variant ? variant : 'outlined'}
            {...props}
        >
            {buttonText}
        </Button>
    );
};

export default LinkButton;
