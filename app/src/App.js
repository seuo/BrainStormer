import React, { Component } from 'react';
import { Router, Link, navigate } from '@reach/router';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
     this.state = {
      currentUser:null
     }
  }


}




render(){
  return (
    <div className="wrap">
                        
        <div className="container">
        
            <div className="ideas">
            
              {
                this.state.ideas.map((idea) => {
                  var ideaProps = {
                    ...idea,
                  key: idea.id,
                  removeIdea: this.removeIdea,
                  updateIdea: this.updateIdea
                  };
                  
                  return (
                     <Idea {...ideaProps}/>
                    
                  )

                })
              }
<SketchFieldCanvas></SketchFieldCanvas>
          </div>
         
          <NewIdea addIdea={this.addIdea}/>
          
        </div>
      </div>
    );
  }
}

export default App;
