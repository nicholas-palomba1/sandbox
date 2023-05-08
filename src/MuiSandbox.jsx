import React, {useState, useEffect} from 'react'
import {TextField, Stack, Autocomplete, Box } from '@mui/material'

function AutocompleteInput () {

    const [results, setResults] = useState([]); 

    useEffect(()=> {
        fetch("https://www.balldontlie.io/api/v1/players")
        .then(response => response.json())
        .then((json)=> setResults(json.data))
    }, [])
    console.log('test', results)
    
    return (

        <div>
            <h2>HELLO AUTOCOMPLETE</h2>
            <Stack sx={{width: 300, margin: 'auto' }}>
                <Autocomplete 
                    id='nba_player_demo' // the id
                    getOptionLabel={(results) => `${results.first_name} ${results.last_name}`}  //  prop that maps the individual labels to be displayed in the array 
                    options={results} // the entire array of results
                    sx={{width: 300 }} // styling the box 
                    isOptionEqualToValue={(option, value) => //  used to determine if the option is equal to the value of the input, aka the search filter
                        option.first_name === value.first_name
                    }
                    noOptionsText={"no available players"} // sort of a custom no find message
                    renderOption={(props, results) => ( // the mapper
                        <Box component="li" {...props} key={results.id}>
                            {results.first_name} {results.last_name}
                        </Box>
                    )}
                    renderInput={(params) => <TextField {...params} label="Search for a Player"/>}  // displays the value selected
                />

            </Stack>
        </div>
    )
}

export default AutocompleteInput 