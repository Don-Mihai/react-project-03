import IconButton from '@mui/material/IconButton';
import { FunctionComponent, useRef } from 'react';
import ChatIcon from '@mui/icons-material/Chat';
import ChatModal, { IModalRef } from './ChatModal';
import bemCreator from '../bemCreator';
import './ChatModal.scss';

const cn = bemCreator('component-chat');

interface ChatProps {}

const Chat: FunctionComponent<ChatProps> = () => {
    const ref = useRef<IModalRef | null>(null);

    return (
        <div className={cn('')}>
            <IconButton className={cn('icon')} onClick={() => ref.current?.handleClickOpen()} color="primary">
                <ChatIcon />
            </IconButton>
            <ChatModal ref={ref} />
        </div>
    );
};

export default Chat;
