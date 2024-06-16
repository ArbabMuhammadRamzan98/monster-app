const Search = (props) => {
    return <input type='search' placeholder='Search Monsters' 
    onChange={props.searchFunction} />
}
export default Search;