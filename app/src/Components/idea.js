import React, {Component} from 'react';
import { Link } from '@reach/router';
import {deleteProjects} from './api';
import Draggable from 'react-draggable';
import { FaTrash } from 'react-icons/fa';

class Idea extends Component {

    redner() {
        return(
            <Draggable
            // axis="x"
            handle=".handle"
            defaultPosition={{x: 0, y: 0}}
            position={null}
            grid={[52, 52]}
            scale={1}
            onStart={this.handleStart}
            onDrag={this.handleDrag}
            onStop={this.handleStop}>
            <div className="handle" >
                <div className="idea">
                <div className="titleContent" onBlur={this.handleTitleInputBlur} onDoubleClick={this.handleTitleDoubleClick}>

                    {this.state.updatingTitle 
                    ? (
                    <input value={this.state.titleInput} autoFocus onChange={this.handleTitleInputChange} type="text" className="ideaInput"/>
                    ):
                   <h2> {this.props.title}</h2>
                   }
                </div>

                <div className="ideaContent" onBlur={this.handleContentInputBlur} onDoubleClick={this.handleContentDoubleClick}>
                    {this.state.updatingContent 
                    ? (
                    <textarea value={this.state.contentInput} autoFocus onChange={this.handleContentInputChange}  type="text" className="ideaContentText"/> 
                     ):
                     <p>{this.props.content}</p> 
                     }
                </div>

                <div className="ideaNote" onBlur={this.handleNotesInputBlur} onDoubleClick={this.handleNotesDoubleClick}>
                {this.state.updatingNote
                    ? (
                    <input value={this.state.noteInput} autoFocus onChange={this.handleNotesInputChange}  type="text" className="ideaNoteInput"/> 
                    ): <p>{this.props.notes}</p>
                    }
                </div>

                <div className="removeIdea" onClick={this.handleIdeaRemoveClick}><FaTrash /></div>
                </div>
            </div>
          </Draggable>
        )
    }

}

export default Idea;