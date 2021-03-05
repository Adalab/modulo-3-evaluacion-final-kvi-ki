const Filter = props => {
    const handleInput = event => {
        props.handleFilter({ key: 'name', value: event.target.value });
    }

    const handleForm = ev => {
        ev.preventDefault();
    }

    return (
        <form className="main__form" onSubmit={handleForm}>
            <input className="main__form--input" onChange={handleInput} type="text" value={props.name} />
        </form>
    )

}

export default Filter;