import { useEffect, useState, useTransition } from "react"
import { getCountryData } from "../api/postApi";
import LOader from "../Components/UI/LOader";
import CountryCard from "../Components/UI/CountryCard";
import SearchFilter from "../Components/UI/SearchFilter";


export const Country = () => {

  const[isPending , startTransition] = useTransition();
  const [countries , setCountries] = useState([]);
  const [search , setSearch] = useState("");
  const [filter,setFilter] = useState("all")

  useEffect(()=>{
    startTransition(async()=>{
      const response = await getCountryData();
      setCountries(response.data);
    })
  } , []);

  if (isPending){
    return <LOader/>  
  }

  const searchCountry = (country) => {
    if(search){
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }return country;
  };

  const filterRegion =(country)=>{
    if(filter === "all"){
      return country;
    } return country.region === filter;
  }

  const filterCountries = countries.filter(
    (country) => searchCountry(country)&&filterRegion(country)
  );

  return (
    
    <main>
      <div className="container">
        <h1 className="page-header">Countries</h1>
        <SearchFilter search={search} setSearch={setSearch} filter={filter} setFilter = {setFilter}/>

        <div className="grid-cols-4">
          {
            filterCountries.map((countrySolo,index) =>{

              return <CountryCard country={countrySolo} key={index}/>
            })
          }
        </div>
      </div>
    </main>
  )
}
