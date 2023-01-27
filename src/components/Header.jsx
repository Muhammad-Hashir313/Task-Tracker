import "../App.css"
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button showAdd={showAdd} text={showAdd ? 'Close' : 'Add'} bgColor={showAdd ? 'red' : 'green'} onClick={onAdd} />
        </header>
    )
}

export default Header