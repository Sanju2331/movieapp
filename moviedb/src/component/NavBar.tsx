import React, { useState } from 'react';//[pause] Importing React and useState hook for state management
import { useNavigate } from 'react-router-dom';//[pause] Importing useNavigate for programmatic navigation
import { AppBar, Toolbar, Typography, Box, InputBase} from '@mui/material';//[pause] Importing Material-UI components
import { styled, alpha } from '@mui/material/styles';//[pause] Importing styled components and alpha utility from Material-UI
import SearchIcon from '@mui/icons-material/Search';//[pause] Importing search icon from Material-UI icons


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: theme.spacing(2),
  width: 'auto',
}));

//[pause] Styled component for the search icon wrapper
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),//[pause] Adds padding on left and right
  height: '100%',//[pause] Sets height to fill the parent container
  position: 'absolute',//[pause] Positions the icon absolutely within the search container
  pointerEvents: 'none',//[pause] Prevents the icon from being interactable
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

//[pause] Styled component for the input field inside the search bar
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',//[pause] Inherits text color from parent
  '& .MuiInputBase-input': {//[pause] Styles the actual input field
    padding: theme.spacing(1, 1, 1, 0),//[pause] Adds padding to the input field
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,//[pause] Adjusts left padding to accommodate the icon
    transition: theme.transitions.create('width'),//[pause] Adds a smooth transition effect for width changes
    width: '12ch',//[pause] Sets default width of input field
    [theme.breakpoints.up('md')]: {//[pause] Adjusts width for medium and larger screens
      width: '20ch',
    },
  },
}));

//[pause] Navbar functional component
const Navbar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');//[pause] State for storing search input value
  const navigate = useNavigate();//[pause] Hook for navigation

  //[pause] Function to handle search form submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();//[pause] Prevents default form submission behavior
    if (searchQuery.trim()) {//[pause] Checks if search query is not empty
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);//[pause] Navigates to search results page with query
      setSearchQuery('');//[pause] Clears the search input after submission
    }
  };

  return (
    <AppBar position="fixed">{/*[pause] Fixed position navigation bar */}
      <Toolbar>{/*[pause] Toolbar for structuring Navbar content */}
        <Typography variant="h6" component="div">{/*[pause] App title */}
          Movie App
        </Typography>
        <Box component="form" onSubmit={handleSearch} sx={{ ml: 'auto' }}> 
          <Search>{/*[pause] Search bar container */}
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search..."//[pause] Placeholder text inside the input field
              inputProps={{ 'aria-label': 'search' }}//[pause] Accessibility label for input
              value={searchQuery}//[pause] Binds input field to state
              onChange={(e) => setSearchQuery(e.target.value)}//[pause] Updates state on input change
            />
          </Search>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;//[pause] Exports Navbar component for use in other files