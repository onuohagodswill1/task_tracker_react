import { useState } from "react"

const AddTask = ({ onAddTask }) => {
    const [text, setTask] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        
        onAddTask({text, day, reminder})

        // Clear inputs
        setTask('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input
                    type='text'
                    placeholder='Add task'
                    value={text}
                    onChange={(e) => setTask(e.target.value)}
                    required
                />
            </div>

            <div className='form-control'>
                <label>Day & Time</label>
                <input
                    type='text'
                    placeholder='Add Day & Time'
                    value={day}
                    onChange={e => setDay(e.target.value)}
                    />
            </div>
            <div className='form-control-check'>
                <label>Reminder</label>
                <input type='checkbox' checked={reminder} onChange={e => setReminder(e.currentTarget.checked)}/>
            </div>
            <button className='btn btn-block'>Add Task</button>
        </form>
    )
}

export default AddTask
