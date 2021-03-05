const NotFound = props => {
    if (props.name === undefined) {
        return (
            <section className="card">
                <div className="card__message">
                    There is no character that matches the word XXX</div>
            </section>
        )
    }
}

export default NotFound;