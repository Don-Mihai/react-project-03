import bemCreator from '../bemCreator';
const cn = bemCreator('customerSection');

interface Props {
    title: string;
}

function SectionTitle({ title }: Props) {
    return <h2 className={cn('title')}>{title}</h2>;
}

export default SectionTitle;
