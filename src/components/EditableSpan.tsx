import React, {ChangeEvent, KeyboardEvent, useState} from 'react';

export type EditableSpanPropsType={
    title:string
    callback:(newTitle:string)=>void
}

export const EditableSpan: React.FC<EditableSpanPropsType> = ({title, callback})=>{
    let [newTitle, setNewTitle] = useState(title)
    let [error, setError] = useState<string | null>(null)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.key === 'Enter') {
            addTask();
        }
    }
    const addTask = () => {
        callback(newTitle)
        //     let changeTitle = newTitle.trim();
    //     if (changeTitle !== "") {
    //         props.callback(changeTitle);
    //         // setNewTitle("");
    //     } else {
    //         setError("Title is required");
    //     }
    }

    const [edit, setEdit]=useState(false)
    const EditTrueHandler=()=>{
        setEdit(!edit)
        addTask()
    }

    return (
        edit
          ? <input onBlur={EditTrueHandler} onChange={onChangeHandler} onKeyPress={onKeyPressHandler} autoFocus type="text" value={newTitle}/>
          :  <span onDoubleClick={EditTrueHandler}>{title}</span>

    )
}