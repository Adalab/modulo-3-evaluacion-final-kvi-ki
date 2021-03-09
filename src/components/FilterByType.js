const FilterByType = props => {
    const handleInput = event => {
        props.handleFilter({ key: 'type', value: event.target.value });
    }

    return (
        <input className="main__form--input" onChange={handleInput} type="text" value={props.type} />
    )
}

export default FilterByType;