import React, { ChangeEvent, useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { create, fetch } from '../../redux/message';
import { remove } from '../../redux/message';
import { edit } from '../../redux/message';
import TextField from '@mui/material/TextField';
import Button from '../Button';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ClearIcon from '@mui/icons-material/Clear';
import CheckIcon from '@mui/icons-material/Check';

const TestChat = () => {
    const messages = useAppSelector(state => state.message.messages);
    const [sendMessage, setSendMessage] = useState<string>('');
    const [editingMessageId, setEditingMessage] = useState<number | null>(null);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetch());
    }, []);

    const handleDeleteMessage = async (messageId: number) => {
        await dispatch(remove(messageId));
    };

    const handleCreateMessage = async () => {
        const newMessage = {
            dateTime: Date.now(),
            content: sendMessage,
        };
        await dispatch(create(newMessage));
        setSendMessage('');
        dispatch(fetch());
    };

    const handleEditingMesage = async (message: any) => {
        setSendMessage(message.content);
        setEditingMessage(message.id);
    };

    const handleEditMessage = async (messageId: number) => {
        const updatedMessage = {
            id: messageId,
            content: sendMessage,
        };
        await dispatch(edit(updatedMessage));
        setEditingMessage(null);
        dispatch(fetch());
        setSendMessage('');
    };
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSendMessage(e.target.value);
    };

    const handleCancelEditing = () => {
        setEditingMessage(null);
        setSendMessage('');
    };

    return (
        <div>
            <div>
                {messages.length === 0 ? (
                    <p>Нет доступных сообщений</p>
                ) : (
                    messages.map(message => (
                        <div key={message.id}>
                            {editingMessageId === message.id ? (
                                <>
                                    {message.content}
                                    {/* <button onClick={() => handleEditMessage(message.id)}>галочка</button> */}
                                    <CheckIcon onClick={() => handleEditMessage(message.id)} />
                                    {/* <button onClick={() => handleCancelEditing()}>крестик</button> */}
                                    <ClearIcon color="action" onClick={() => handleCancelEditing()} />
                                </>
                            ) : (
                                <>
                                    {message.content}
                                    {/* <button onClick={() => handleEditingMesage(message)}>редактировать сообщение</button> */}
                                    <EditIcon color="action" onClick={() => handleEditingMesage(message)} />
                                    {/* <button onClick={() => handleDeleteMessage(message.id)}>удалить сообщение</button> */}
                                    <DeleteIcon color="action" onClick={() => handleDeleteMessage(message.id)} />
                                </>
                            )}
                        </div>
                    ))
                )}
            </div>
            {/* <input className="main-input" value={sendMessage} onChange={e => setSendMessage(e.target.value)} /> */}
            <TextField className="main-input" value={sendMessage} name="message" onChange={handleChange} />
            {/* <button onClick={handleCreateMessage}>отправить сообщение</button> */}
            <Button onClick={handleCreateMessage} variant="outlined">
                {' '}
                отправить сообщение
            </Button>
        </div>
    );
};

export default TestChat;
