import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const getProfile = createAsyncThunk("profiles/getProfile", async () => {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    console.log(data.results[0])
    return data.results[0];
})

const profileSlice = createSlice({
    name: "profile",
    initialState: {
        profile:
            {
                id: 1,
                profileName: "",
                profileTag: "",
                profileImg: ""
            },
        posts: [
            {
                postId: 1,
                postBody: "test",
                postDate: "11/11/2011"
            },
        ],
        status: null
    },
    reducers: {
        addPost: (state, action) => {
            state.posts = state.posts.concat(action.payload)
            
        }
    },
    extraReducers: {
        [getProfile.pending]: (state, action) => {
            state.status = "Loading...";
            console.log(state.status);
        },
        [getProfile.fulfilled]: (state, action) => {
            state.status = "Complete!";

            state.profileName = action.payload.name.first;
            state.profileTag = action.payload.login.username;
            state.profileImg = action.payload.picture.large;

            console.log(state.status);
        },
        [getProfile.rejected]: (state, action) => {
            state.status = "Failed to fetch data";
            console.log("Failed data")
        }
    }
});

export default profileSlice.reducer;