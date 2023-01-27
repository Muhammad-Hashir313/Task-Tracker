import '../App.css'

const Button = ({ text, bgColor, onClick }) => {
    return <button onClick={onClick} style={{ backgroundColor: bgColor }} className='btn'>{text}</button>
}

export default Button