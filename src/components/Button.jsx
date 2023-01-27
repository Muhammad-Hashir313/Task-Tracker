import '../App.css'

const Button = ({ text, bgColor }) => {
    return <button style={{ backgroundColor: bgColor }} className='btn'>{text}</button>
}

export default Button