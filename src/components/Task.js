import PropTypes from 'prop-types'
import { FaTimes } from 'react-icons/fa';

const Task = ({ task, onDelete, onToggleReminder }) => {
    return (
        <div className={`task ${task.reminder && 'reminder'}`} onDoubleClick={() => onToggleReminder(task.id)}>
            <h3>{task.text} <FaTimes color='red' onClick={() => onDelete(task.id)}/> </h3>
            <p>{task.day}</p>
        </div>
    )
}

Task.propTypes = {
    task: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired
}

export default Task
