import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';

import { Freelancer } from '../../App';
import bemCreator from '../bemCreator';

const cn = bemCreator('customersSection');

interface Props {
    freelancer: Freelancer;
}

const FreelancerCard = ({ freelancer }: Props) => {
    return (
        <Card className={cn('card')}>
            <div className={cn('row')}>
                <img src={freelancer.image} alt="" />
                <div className={cn('text')}>
                    <h3 className={cn('card-title')}>{freelancer.name}</h3>
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
            <IconButton className={cn('edit')}>
                <EditIcon />
            </IconButton>
        </Card>
    );
};

export default FreelancerCard;
