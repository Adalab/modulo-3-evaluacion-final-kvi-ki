const Filter = props => {
    const handleInput = event => {
        props.handleFilter({ key: 'name', value: event.target.value });
        // if (event.target.value === undefined) {
        //     return (
        //         
        //             <section className="card">
        //                 <div className="card__message">
        //                     There is no character that matches the word XXX</div>
        //             </section>
        //         
        //     )
        // }
    }

    const handleForm = ev => {
        ev.preventDefault();
    }

    return (
        <form className="main__form" onSubmit={handleForm}>
            <input className="main__form--input" onChange={handleInput} />
        </form>
    )

}

export default Filter;