import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import bemCreator from '../bemCreator';
import { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import { Custumer } from '../../redux/customer/types';
import { deleteCustomer, editCustomer } from '../../redux/customer';
import { useAppDispatch } from '../../redux/hooks';

const cn = bemCreator('customersSection');

interface Props {
    freelancer: Custumer;
}

const FreelancerCard = ({ freelancer }: Props) => {
    const [actionsMenuEl, setActionsMenuEl] = useState(null);
    const [formValues, setFormValues] = useState({ name: '' });
    const [editMode, setEditMode] = useState<boolean>(false);

    const dispatch = useAppDispatch();

    useEffect(() => {
        setFormValues({ name: freelancer.name });
    }, []);

    const openActionsMenuHandler = (event: React.MouseEvent<HTMLElement, MouseEvent>): void => {
        setActionsMenuEl(event.currentTarget as any);
    };

    const closeActionsMenuHandler = () => {
        setActionsMenuEl(null);
    };

    const handleChange = (event: any) => {
        const key = event.target?.name;

        setFormValues({
            ...formValues,
            [key]: event.target.value,
        });
    };

    const onEnter = (event: any) => {
        if (event.code === 'Enter') {
            const payload: Custumer = {
                ...freelancer,
                name: formValues.name,
            };

            dispatch(editCustomer(payload));

            setEditMode(false);
        }
    };

    const handleOnEdit = () => {
        setEditMode(true);
    };

    const handleDelete = () => {
        dispatch(deleteCustomer(freelancer.id));
    };

    return (
        <Card className={cn('card')}>
            <div className={cn('row')}>
                <img src={freelancer.image} alt="" />
                <div className={cn('text')}>
                    {editMode ? (
                        <TextField onChange={handleChange} onKeyUp={onEnter} value={formValues.name} name="name" fullWidth />
                    ) : (
                        <h3 className={cn('card-title')}>{freelancer.name}</h3>
                    )}

                    <p className={cn('status')}>{freelancer.status}</p>
                </div>
            </div>
            <Stack direction="row" justifyContent="flex-start" flexWrap="wrap" spacing={2} className={cn('skills')}>
                {freelancer.skills.map((skill, index) => (
                    <Chip key={index} label={skill} size="small" className={cn('skill')} />
                ))}
            </Stack>
            <CardActions className={cn('button-contaner')}>
                <div className={cn('text')}>
                    <span className={cn('text')}>{freelancer.ratePerHour} ₽ / час</span>
                </div>
                <span className={cn('rating')}>Рейтинг: {freelancer.rating}%</span>
            </CardActions>
            <IconButton className={cn('edit')} aria-label="more" aria-controls="detail-menu" aria-haspopup="true" onClick={openActionsMenuHandler}>
                <MoreVertIcon color="primary" fontSize="inherit" />
            </IconButton>

            <Menu
                id="actions-menu"
                anchorEl={actionsMenuEl}
                keepMounted={true}
                open={Boolean(actionsMenuEl)}
                onClick={closeActionsMenuHandler}
                onClose={closeActionsMenuHandler}
            >
                <MenuItem className={cn('menu-li')} onClick={handleDelete}>
                    Удалить заказчика
                </MenuItem>
                <MenuItem className={cn('menu-li')} onClick={handleOnEdit}>
                    Изменить заказчика
                </MenuItem>
            </Menu>
        </Card>
    );
};

export default FreelancerCard;
