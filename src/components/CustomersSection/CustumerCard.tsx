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
    custumer: Custumer;
}

const FreelancerCard = ({ custumer }: Props) => {
    const [actionsMenuEl, setActionsMenuEl] = useState(null);
    const [formValues, setFormValues] = useState({ name: '' });
    const [editMode, setEditMode] = useState<boolean>(false);

    const dispatch = useAppDispatch();

    useEffect(() => {
        setFormValues({ name: custumer.name });
    }, []);

    const openActionsMenuHandler = (event: React.MouseEvent<HTMLElement, MouseEvent>): void => {
        setActionsMenuEl(event.currentTarget as any);
    };

    const closeActionsMenuHandler = () => {
        setActionsMenuEl(null);
    };

    const handleChange = (event: any) => {
        const { value, name } = event.target;

        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const onEnter = (event: any) => {
        if (event.code === 'Enter') {
            const payload: Custumer = {
                ...custumer,
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
        dispatch(deleteCustomer(custumer.id));
    };

    return (
        <Card className={cn('card')}>
            <div className={cn('row')}>
                <img src={custumer.image} alt="" />
                <div className={cn('text')}>
                    {editMode ? (
                        <TextField onChange={handleChange} onKeyUp={onEnter} value={formValues.name} name="name" fullWidth />
                    ) : (
                        <h3 className={cn('card-title')}>{custumer.name}</h3>
                    )}

                    <p className={cn('status')}>{custumer.status}</p>
                </div>
            </div>
            <Stack direction="row" justifyContent="flex-start" flexWrap="wrap" spacing={2} className={cn('skills')}>
                {custumer?.skills?.map((skill, index) => (
                    <Chip key={index} label={skill} size="small" className={cn('skill')} />
                ))}
            </Stack>
            <CardActions className={cn('button-contaner')}>
                <div className={cn('text')}>
                    <span className={cn('text')}>{custumer.ratePerHour} ₽ / час</span>
                </div>
                <span className={cn('rating')}>Рейтинг: {custumer.rating}%</span>
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
