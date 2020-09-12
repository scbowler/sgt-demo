import React from 'react';
import Header from './header';
import GradeTable from './grade-table';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      grades: []
    };
  }

  componentDidMount() {
    this.getGrades();
  }

  getGrades() {
    fetch('/api/grades')
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          grades: data
        });
      });
  }

  render() {
    // console.log('State:', this.state);
    const { grades } = this.state;
    // const grades = this.state.grades

    return (
      <div className="container">
        <Header />
        <GradeTable grades={grades} />
      </div>
    );
  }
}

export default App;
