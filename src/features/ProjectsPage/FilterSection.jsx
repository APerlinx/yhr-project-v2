import React from 'react';

function FilterSection({ showFilters, filter, setFilter }) {
  const buttonStyle = 'px-4 py-2 hover:text-yellow-500 font-bold';

  const filters = [
    { value: 'all', label: 'הכל' },
    { value: 'hotel', label: 'מלונות' },
    { value: 'private-home', label: 'בתים פרטיים' },
    { value: 'residential-building', label: 'בנייני מגורים' },
    { value: 'commercial', label: 'מסחרי' },
  ];

  return (
    <div
      className={`transition-max-height overflow-hidden duration-700 ${
        showFilters ? 'max-h-96' : 'max-h-0'
      }`}
    >
      <div className="mb-8 flex flex-wrap gap-4 p-4">
        {filters.map((item) => (
          <button
            key={item.value}
            onClick={() => setFilter(item.value)}
            className={`${buttonStyle} ${
              filter === item.value
                ? 'border-b-2 border-yellow-500 text-yellow-500'
                : 'text-stone-800'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default FilterSection;
