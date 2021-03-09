const FilterByName = props => {
    const handleInput = event => {
        props.handleFilter({ key: 'name', value: event.target.value });
    }

    return (
        <input className="main__form--input" onChange={handleInput} type="text" value={props.name} />
    )

}

export default FilterByName;