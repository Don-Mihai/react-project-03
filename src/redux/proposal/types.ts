import { User } from '../user/types';
import { UserProfile } from '../userProfile/types';

export interface ProposalDto {
    id: number;
    userId: number;
    title: string;
    description: string;
    price: number;
    status: string;
}

export interface Proposal extends ProposalDto {
    user?: User;
    userProfile?: UserProfile;
}

export interface PProposal extends Omit<ProposalDto, 'id'> {}

export interface ProposalState {
    proposals: Proposal[];
}
