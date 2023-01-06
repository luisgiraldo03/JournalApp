//funciones asíncronas

import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { fileUpload } from "../../helpers/fileUpload";
import { loadNotes } from "../../helpers/loadNotes";
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes, setPhotosToActiveNote, setSaving, updateNote } from "./journalSlice";

export const startNewNote = () => {
    return async (dispatch, getState) => {

        dispatch(savingNewNote());

        //uid
        const { uid } = getState().auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }

        const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`));

        await setDoc(newDoc, newNote);

        newNote.id = newDoc.id;

        dispatch(addNewEmptyNote(newNote));
        dispatch(setActiveNote(newNote));

    }
}

export const starLoadingNotes = () => {
    return async(dispatch, getState) => {

        const { uid } = getState().auth;

        if(!uid) throw new Error('El UID del usuario no está establecido');

        const notes = await loadNotes(uid);

        dispatch(setNotes(notes));


    }
}

export const startSaveNote = () => {
    return async(dispatch, getState) => {

        dispatch(setSaving());

        const { uid } = getState().auth;
        const { active:note } = getState().journal;

        const noteToFirestore = {...note};

        delete noteToFirestore.id;

        console.log(noteToFirestore)

        const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);
        await setDoc(docRef, noteToFirestore, {merge: true});

        dispatch(updateNote(note));

    }
}
export const startUploadFiles = (files = []) => {
    return async(dispatch) => {
        dispatch(setSaving());

        const fileUploadPromises = [];

        for (const file of files) {
            fileUploadPromises.push(fileUpload(file))
        }

        const photosURLS = await Promise.all(fileUploadPromises);

        dispatch(setPhotosToActiveNote(photosURLS));

    }
}