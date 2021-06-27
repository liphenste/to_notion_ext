import React, { ReactElement } from 'react';
import Button from 'react-bootstrap/Button';
import './NoteIt.css';

export default function NoteIt(): ReactElement {
    const activateExtension = async () => {
        let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

        chrome.scripting.executeScript({
            target: { tabId: tab.id || -1 },
            function: setPageBackgroundColor,
        });
    }

    const setPageBackgroundColor = () => {
        chrome.storage.sync.get("color", ({ color }) => {
            document.body.style.backgroundColor = color;
        });
    }

    return (
        <Button variant="primary" className="NoteIt" onClick={activateExtension}>Note it!</Button>
    )
}
