import PropTypes from 'prop-types'
import Task from './Task'


const Tasks = ({ tasks, onDelete, onToggleReminder }) => {
    return (
        <div>
            {tasks.length > 0 ? tasks.map(
                (task, index) => <Task key={index} task={task} onDelete={onDelete} onToggleReminder={onToggleReminder} />) : 'No task to show'}
        </div>
    )
}

Tasks.propTypes = {
    tasks: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired
}

export default Tasks
