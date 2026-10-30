import { categories } from "../data.js";

function FilterBar({ selected, onSelect }) {
  const options = ["all", ...categories];
  return (
    <div className="filter-row">
      {options.map((c) => (
        <button
          key={c}
          className={"filter-btn" + (selected === c ? " active" : "")}
          onClick={() => onSelect(c)}
        >
          {c === "all" ? "ທັງໝົດ" : c}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;