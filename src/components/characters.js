import React, { Component } from "react";
import Character from "./character";
import '../App.css'

export default class characters extends Component {
  constructor(props) {
    console.log("constructor initialized");
    super(props);

    this.state = {
      characters: [],
    };
  }

  componentDidMount() {
    console.log("component mounted");
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          characters: [...data.results],
        })
      );
  }

  // only fires when something is updated
  componentDidUpdate() {
    console.log("component updated", this.state.characters); //only fires when an update happens
  }

  /**
   * component lifecycle methods
   * what happens from the moment it's added to the DOM until it's destroyed (removed)
   * constructor, componentDidMount, componentDidUpdate, render
   */

  render() {
    console.log("render");
    return (
      <div>
        <h1 className="main-title">rick and morty characters</h1>
        <ul className="all-chars">
          {this.state.characters.map((character) => {
            // put the formatted list into a Character component
            // and return the component with props
            // Character.js takes props as a param
            // variable that gets the mapped character object
            return <Character character={character} />;
          })}
        </ul>
      </div>
    );
  }
}

