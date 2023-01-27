import "../App.css"

const AddTask = () => {
    return (
        <form className='add-form'>
            <div className="form-control">
                <label>Task:</label>
                <input type="text" placeholder='Add a Task' />
            </div>
            <div className="form-control">
                <label>Day and Time:</label>
                <input type="text" placeholder='Add Day and Time' />
            </div>
            <div className="reminder-form">
                <label>Reminder:</label>
                <input type="checkbox" />
            </div>

            <input className="btn" type="submit" value="Save Task" />
        </form>
    )
}

export default AddTask