export interface MessageDto {
    id: number;
    dateTime?: number;
    senderId?: number;
    recipientId?: number;
    content: string;
}

export interface Message extends MessageDto {}

export interface PMessage extends Omit<MessageDto, 'id' | 'dateTime'> {}

export interface MessageState {
    messages: Message[];
}
