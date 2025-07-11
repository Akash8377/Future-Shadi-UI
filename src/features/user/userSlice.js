import { createSlice } from '@reduxjs/toolkit';

// Helper function to load initial state
const loadInitialState = () => {
  // Check localStorage first (for "remember me" users)
  const localStorageUser = localStorage.getItem('user');
  if (localStorageUser) {
    return { userInfo: JSON.parse(localStorageUser) };
  }
  
  // Fall back to sessionStorage for non-remembered users
  const sessionStorageUser = sessionStorage.getItem('user');
  if (sessionStorageUser) {
    return { userInfo: JSON.parse(sessionStorageUser) };
  }
  
  // Default initial state
  return { userInfo: null };
};

const initialState = loadInitialState();

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.userInfo = action.payload.user;
      
      // Store based on rememberMe flag
      if (action.payload.rememberMe) {
        localStorage.setItem('user', JSON.stringify(action.payload.user));
        localStorage.setItem('token', action.payload.token);
        sessionStorage.removeItem('user');
        sessionStorage.removeItem('token');
      } else {
        sessionStorage.setItem('user', JSON.stringify(action.payload.user));
        sessionStorage.setItem('token', action.payload.token);
        localStorage.removeItem('user');
        localStorage.removeItem('token');
      }
    },
    clearUser(state) {
      state.userInfo = null;
      // Clear all storage
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      sessionStorage.removeItem('user');
      sessionStorage.removeItem('token');
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;



// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   userInfo: null,
// };

// const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {
//     setUser(state, action) {
//       state.userInfo = action.payload;
//     },
//     clearUser(state) {
//       state.userInfo = null;
//     },
//   },
// });

// export const { setUser, clearUser } = userSlice.actions;
// export default userSlice.reducer;
