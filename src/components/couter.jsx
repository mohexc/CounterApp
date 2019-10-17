import React from 'react';

const Couter = ({ counter, onIncrement, onDecrement, onDelete }) => {

    const getBadge = () => {
        let classes = "badge p-2 m-2 col-1 badge-"
        return classes += counter.value === 0 ? "warning" : "success"
    }

    const formatCount = () => {
        return counter.value === 0 ? 'zero' : counter.value
    }

    const btnClass = () => {
        return counter.value <= 0 ? 'btn btn-dark mx-2 disabled' : "btn btn-dark mx-2"
    }

    const btnIsable = () => {
        return counter.value <= 0 ? 'disabled' : ''
    }

    return (
        <div >
            <span className={ getBadge() }>{ formatCount() }</span>
            <button className="btn btn-dark mx-2" onClick={ () => onIncrement(counter) }>+</button>
            <button className={ btnClass() } disabled={ btnIsable() } onClick={ () => onDecrement(counter) }>-</button >
            <button className="btn btn-danger mx-2" onClick={ () => onDelete(counter.id) } >Delete</button>
        </div>
    );
}





export default Couter;