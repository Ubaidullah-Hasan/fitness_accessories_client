import { IoSearchOutline } from 'react-icons/io5';

type TSerchBoxProps = {
    setSearchTerm: (value: string) => void;
}

const SearchBox = ({ setSearchTerm }: TSerchBoxProps) => {

    const handleSearch = (value: string) => {
        console.log(value);
        setSearchTerm(value);
    };
    
    return (
        <div className="flex justify-center items-center">
            <div className="relative w-full max-w-md">
                <input
                    type="text"
                    onChange={(e) => handleSearch(e.target.value)}
                    placeholder="Search..."
                    className="w-full pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <IoSearchOutline className="w-5 h-5 text-gray-500" />
                </div>
            </div>
        </div>
    );
};

export default SearchBox;