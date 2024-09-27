import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../actions/fridgeActions';
const FridgeItem = () => {
    const dispatch = useDispatch();
    const [itemName, setItemName] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addItem({name: itemName}))
        setItemName('')
    }

    function isDisabled() {
        return itemName.length <= 0; 
    }

    return (<form
    onSubmit={handleSubmit}
    >
        <input
            value={itemName}
            onChange = {(e) => setItemName(e.target.value)}
            placeholder='Freezer Item'
        />
        <button
        type="submit"
        disabled={isDisabled()}
        >Add</button>
    </form>)
}

export default FridgeItem;