import React from 'react';
import Counter from './couter'

function Counters({ counters, onIncrement, onDecrement, onDelete, onReset, onAddCouters }) {
    return (
        <div style={ styles }>
            <button className="btn btn-primary mx-2" onClick={ onReset }>Reset</button>
            <button className="btn btn-primary mx-2" onClick={ onAddCouters }>Add Counter</button>
            <div>
                { counters.map((counter) => <Counter
                    key={ counter.id }
                    counter={ counter }
                    onIncrement={ onIncrement }
                    onDecrement={ onDecrement }
                    onDelete={ onDelete }
                />) }
            </div>
        </div>
    )
}

const styles = {
    margin: 10
}

export default Counters
