import FilterByName from './FilterByName';
import FilterByType from './FilterByType';

const Filter = props => {
    const handleForm = ev => {
        ev.preventDefault();
    }

    return (
        <form onSubmit={handleForm}>
            <FilterByName handleFilter={props.handleFilter} name={props.name} />
            < FilterByType handleFilter={props.handleFilter} type={props.type} />
        </form>
    )

}

export default Filter;