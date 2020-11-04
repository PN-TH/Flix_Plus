import React, { useContext } from 'react';
import { MoviesContext } from '../_context/MoviesContextProvider';
// Material-UI imports
import { fade, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
const useStyles = makeStyles((theme) => ({
  autocomplete: {
    background: fade(theme.palette.common.white, 0.15),
    borderRadius: '10px',
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    width: '70px',
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
  },
}));

function ActorList() {
  const classes = useStyles();

  const { actors, handleSearchActors, handleId } = useContext(MoviesContext);

  return (
    <div className='container'>
              <Autocomplete className={classes.autocomplete}
        id="combo-box-demo"
        options={actors}
        onInputChange={handleSearchActors}
        getOptionLabel={(option) => option.name}
        style={{ width: 300 }}
        renderInput={(params) => <TextField {...params}  onChange={handleId} label="Acteurs Populaires" variant="outlined" />}
      />
      </div>
  );
}

export default ActorList;
