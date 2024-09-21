import React from 'react'

const SearchFilter = ({search , setSearch , filter , setFilter}) => {
    const handleInputChange = (e)=>{
        e.preventDefault();
        setSearch(e.target.value)
    }

    const handleRegionSelectChange = (e)=>{
        e.preventDefault();
        setFilter(e.target.value)
    }
  return (
    <section className='search-filter'>
        <input type="text" placeholder="Search..." value={search} onChange={handleInputChange}/>

        <select name="All" value={filter} onChange={handleRegionSelectChange}>
            <option value="all">All</option>
            <option value="Africa">Africa</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>

        </select>
    </section>
  )
}

export default SearchFilter