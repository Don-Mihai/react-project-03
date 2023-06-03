import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

interface Props {
    buttonText: string;
    linkTo: string;
}

// todo: вынести компонент на уровень выше, и переименовать в LinkButton, доавить в секцию фрилансеров [Никита]
const SectionButton = ({ buttonText, linkTo }: Props) => {
    return (
        <Button component={Link} to={linkTo} variant="outlined">
            {buttonText}
        </Button>
    );
};

export default SectionButton;
