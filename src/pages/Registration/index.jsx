import './Registration.scss';
import TextField from '@mui/material/TextField';

const Registration = () => {
    return (
        <div className="page-registration">
            <h2>Фриланс</h2>
            <TextField id="filled-basic" label="Filled" variant="filled" />
        </div>
    );
};

export default Registration;
