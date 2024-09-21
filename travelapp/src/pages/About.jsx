import countryFacts from "../api/country_data.json"

export const About = () => {
    return (
        <main>
            <div className="container">
                <h1 className="page-header">Explore why you must visit these countries once</h1>
                <div className="cards">
                    {
                        countryFacts.map((country)=>{
                            return(
                                <div class="card" key={country.id}>
                                <div class="card-header">
                                    <h2>{country.countryName}</h2>
                                    <p class="capital">Capital: Tokyo</p>
                                </div>
                                <div class="card-body">
                                    <p class="population">Population: {country.population}</p>
                                    <p class="reason">{country.reasonToVisit}</p>
                                </div>
                            </div>
                            );
                        })
                    }
                   

                </div>
            </div>
        </main>
    )
}

export default About;