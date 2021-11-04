import Button from "./Button"

const Header = ( { onShowTaskForm }) => {
    return (
        <header className='header'>
            <h1>Task Manager</h1>
            <Button text='Add Task' onClick={onShowTaskForm} />
        </header>
    )
}

export default Header
