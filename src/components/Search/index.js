import { useStore } from "../../context/AppContext";

const Search = () => {
  const { filters, setFilters } = useStore();

  const handleFilters = (e) => {
    const { value } = e.target;
    if (value.length != 0) {
      setFilters({ ...filters, [e.target.name]: value });
    } else {
      delete filters.search;
      setFilters({ ...filters });
    }
  };

  return (
    <input
      type="search"
      placeholder="Search Products"
      name="search"
      onChange={handleFilters}
    />
  );
};

export default Search;
