import "./search-box.styles.css";
import { ChangeEvent } from "react";

interface IsSearchBoxProps {
  className: string;
  placeholder?: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = ({
  className,
  placeholder,
  onChangeHandler,
}: IsSearchBoxProps) => (
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;
