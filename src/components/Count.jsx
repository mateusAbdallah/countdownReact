import './Counter.css'

const Counter = ({ title, number}) => {
    return (
        <div className="counter">
            <div className="counter-number">{number}</div>
            <div className="counter-text">{title}</div>
        </div>
    )
}

export default Counter;