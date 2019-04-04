import React, { Component } from 'react';
import './App.css';

export default class Starwars extends Component {
  constructor() {
    super();
    this.state = {
      activePlace: 0,
    }}
    render() {
      const activePlace = this.state.activePlace;
      return ( 
        <div className = "App" > 
         {
          PLACES.map((place, index) => ( 
            <button key = {
              index
            }
            className = {
              "button " + (index % 2 === 0 ? "is-danger" : "is-primary")
            }
            onClick = {
              () => {               
                this.setState({
                  activePlace: index
                })
              }
            } > {
              place.zip
            } 
            </button>
          ))
        } 
        <StarWarsService zip = {
          PLACES[activePlace].zip
        }
        key = {
          activePlace
        } > </StarWarsService> </div>
      );
    }
    }



    class StarWarsService extends Component {
      constructor() {
        super();
        this.state = {
          starWarsData: null,
        }
      }
    
      componentDidMount() {
        const zip = this.props.zip;
        
        const apiURL = "https://swapi.co/api/planets/?page=" + zip;
    
        fetch(apiURL)
          .then(res => res.json())
          .then(json => {
            this.setState({
              starWarsData: json
            })
          })
      }
    
      render() {
        const starWarsData = this.state.starWarsData;
        if (!starWarsData) return <div> Loading data... </div>
        
        const planets = starWarsData.results;
        return (
          <div>
            {
              planets.map((planet, index)=> 
              <div>
                <br></br>
               <p>Name:{planet.name}</p>
               <p>Diameter:{planet.diameter}</p>
               <p>Rotation_period:{planet.rotation_period}</p> 
               <p>Orbital_period:{planet.orbital_period}</p>
               <p>Gravity:{planet.gravity}</p>
               <p>Population:{planet.population}</p> 
               <p>Climate:{planet.climate}</p>
               <p>Terrain:{planet.terrain}</p>
               <p>Surface_water:{planet.surface_water}</p> 
               <br></br>
               <hr></hr>  
               {/* <p>{JSON.stringify(starWarsData)}></p>   */}
               </div>
              
                         )
            }
          </div>
        );
      }
    }


const PLACES = [
  { zip: "1"
},
{
  zip: "2"
},
{
  zip: "3"
},
{
  zip: "4"
},
{
  zip: "5"
},
{
  zip: "6"
},
{
  zip: "7"
},  
];






