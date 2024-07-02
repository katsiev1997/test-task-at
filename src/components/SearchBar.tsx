
type Props = {
  value: string;
  setValue: (value: string) => void;
};

export const SearchBar = ({ value, setValue }: Props) => {
  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Поиск по id..."
      className="outline-none border rounded p-2 m-2 focus:border-amber-500"
    />
  );
};
