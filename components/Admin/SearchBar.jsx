import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ setText }) => {
    return (
        <div className="flex items-center justify-between mb-10">
            <h1 className="text-primary">EduTry</h1>
            <div className='relative flex items-center'>
                <SearchIcon className='absolute left-1' />
                <input 
                    type="text" 
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Search"
                    className="bg-white rounded-md pl-8 pr-3 py-1 focus:outline-none focus:outline-blue-dark transition-all duration-100"
                />
            </div>
        </div>
    );
}
 
export default SearchBar;