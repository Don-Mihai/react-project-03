import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

import './LinkButton.scss';

interface Props {
    buttonText: string;
    linkTo?: string;
}

const LinkButton = ({ buttonText, linkTo = '/' }: Props) => {
    return (
        <Button className="link-button" component={Link} to={linkTo} variant="outlined">
            {buttonText}
        </Button>
    );
};

export default LinkButton;
