import './FileDrop.scss';
import bemCreator from '../bemCreator';
import React, { useState } from 'react';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

const cn = bemCreator('component-file-drop');

interface Props {
    children: any;
    borderRadius?: string;
}

const FileDrop = ({ children, borderRadius }: Props) => {
    const [dragActive, setDragActive] = useState<boolean>(false);

    const handleDrag = (e: React.DragEvent<HTMLFormElement | HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();

        if (e.type === 'dragenter' || e.type === 'dragover') {
            setDragActive(true);
        } else if (e.type === 'dragleave') {
            setDragActive(false);
        }
    };

    const handleDrop = (e: React.DragEvent<HTMLFormElement | HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);

        if (e.dataTransfer.files[0]) {
            console.log(e.dataTransfer.files[0]);
        }
    };

    return (
        <form className={cn('')} onMouseEnter={() => setDragActive(true)} onDragEnter={handleDrag}>
            {children}
            <input type="file" className={cn('input')} multiple={true} accept="image/*" />
            {dragActive && (
                <div
                    className={cn('drag-element')}
                    style={{ borderRadius: borderRadius ? borderRadius : '50%' }}
                    onMouseLeave={() => setDragActive(false)}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                >
                    <AddAPhotoIcon color="warning" />
                </div>
            )}
        </form>
    );
};

export default FileDrop;
