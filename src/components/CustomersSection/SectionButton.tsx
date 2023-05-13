import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

interface Props {
    buttonText: string;
    linkTo: string;
}

function SectionButton({ buttonText, linkTo }: Props) {
    return (
        <Button component={Link} to={linkTo} variant="outlined">
            {buttonText}
        </Button>
    );
}

export default SectionButton;
