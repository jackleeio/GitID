import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type TProps = {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  handleSearch: () => void;
};

function SearchInput({ setSearchValue, handleSearch, searchValue }: TProps) {
  return (
    <div className="w-full my-12 flex items-center gap-3">
      <Input
        placeholder="wtf.git"
        className="w-full"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.name)}
      />
      <Button onClick={handleSearch}>Look up</Button>
    </div>
  );
}
export default SearchInput;
