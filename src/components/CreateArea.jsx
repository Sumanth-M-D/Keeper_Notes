import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';



export default function CreateArea(props) {
   const [textInput, setTextInput] = useState({
      title:'',
      note: ''
   });

   const [fullDisplay, setFullDisplay] = useState(false);


   function handleChange(event) {
      const {name, value} = event.target;
      setTextInput(prevNote => ({
         ...prevNote,
         [name]:value
      }));
   }

   function newNote(event) {
      event.preventDefault();
      props.addNewNote(textInput);
      setTextInput({ title:'', content:'' });
      // setFullDisplay(false);
   }

   function ShowFullInput() {
      setFullDisplay(true);
   }

  return (
    <div>
      <form className="create-note"> 
         {
            fullDisplay && <input 
                              name="title" 
                              placeholder="Title" 
                              value={textInput.title} 
                              onChange={handleChange}
                           />
         }

        <textarea 
            onClick = {ShowFullInput}
            name="content" 
            placeholder="Take a note..." 
            rows={fullDisplay? "3" :"1"} 
            value={textInput.content} 
            onChange={handleChange}
        />

        {
            fullDisplay && <Zoom in={true}> 
                                 <Fab onClick={newNote}>
                                    <AddIcon/>
                                 </Fab>
                              </Zoom>
         }
      </form>
    </div>
  );
}


