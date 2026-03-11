import React, { Component } from 'react';
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';
import { projectsData } from '../data/data';
import '../App.css'; 

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'All',
    };
    
    this.filters = ["All", "Websites", "Flayers", "Business Cards"];
  }

  onSelectFilter = (filter) => {
    this.setState({ selected: filter });
  };

  render() {
    const { selected } = this.state;
    
    const filteredProjects = selected === 'All' 
      ? projectsData 
      : projectsData.filter(project => project.category === selected);

    return (
      <div className="portfolio-container">
        <Toolbar
          filters={this.filters}
          selected={selected}
          onSelectFilter={this.onSelectFilter}
        />
        <ProjectList projects={filteredProjects} />
      </div>
    );
  }
}

export default Portfolio;

