import React, { ReactElement } from 'react';
import Button from 'react-bootstrap/Button';
import './NoteIt.css';

export default function NoteIt(): ReactElement {
    const activateExtension = async () => {
        let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

        chrome.scripting.executeScript({
            target: { tabId: tab.id || -1 },
            files: ['jigglewiggle.js'],
        });
    }

    return (
        <Button variant="primary" className="NoteIt" onClick={activateExtension}>Note it!</Button>
    )
}
