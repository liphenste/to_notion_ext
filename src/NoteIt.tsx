import React, { ReactElement } from 'react';
import Button from 'react-bootstrap/Button';
import './NoteIt.css';

export default function NoteIt(): ReactElement {
    return (
        <Button variant="primary" className="NoteIt">Note it!</Button>
    )
}
