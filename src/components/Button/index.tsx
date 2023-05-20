import { Button as ButtonMaterial, ButtonProps } from '@mui/material';
import { memo } from 'react';

interface CustomButtonProps extends ButtonProps {}

const Button = ({ children, variant, ...rest }: CustomButtonProps) => {
    return (
        <ButtonMaterial variant={variant ? variant : 'contained'} {...rest}>
            {children}
        </ButtonMaterial>
    );
};

export default memo(Button);
