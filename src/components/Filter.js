const Filter = props => {
    const handleInput = event => {
        props.handleFilter({ key: 'name', value: event.target.value });
    }
    return (
        <form className="main__form">
            <input className="main__form--input" onChange={handleInput} />
        </form>
    )
}

export default Filter;