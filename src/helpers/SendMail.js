// In your React component (e.g., ContactForm.js)
import React, { useState } from 'react';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { app } from './firebaseConfig'; // Your Firebase app initialization

const storage = getStorage(app);
const db = getFirestore(app);

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setUploading(true);

        try {
            // 1. Upload the file to Firebase Storage
            let downloadURL = null;
            if (file) {
                const storageRef = ref(storage, `attachments/${file.name}`);
                await uploadBytes(storageRef, file);
                downloadURL = await getDownloadURL(storageRef);
            }

            // 2. Add a new document to a Firestore collection
            await addDoc(collection(db, 'mail'), {
                to: 'recipient@example.com', // The email address to send to
                subject: `New message from ${name}`,
                text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
                attachments: downloadURL ? [{ path: downloadURL }] : [],
                createdAt: new Date(),
            });

            alert('Email sent successfully!');
            // Reset form
            setName('');
            setEmail('');
            setMessage('');
            setFile(null);

        } catch (error) {
            console.error('Error sending email:', error);
            alert('Failed to send email. Please try again.');
        } finally {
            setUploading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} required />
            <input type="file" onChange={handleFileChange} />
            <button type="submit" disabled={uploading}>
                {uploading ? 'Sending...' : 'Send Email'}
            </button>
        </form>
    );
};

export default ContactForm;