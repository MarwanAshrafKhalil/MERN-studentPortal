import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Announc {
  name: string;
  announcements: string[];
}

interface AnnouncState {
  data: Announc[];
  announcementFound: boolean;
  isLoading: boolean;
  error: string;
}

const initialState: AnnouncState = {
  data: [],
  announcementFound: false,
  isLoading: false,
  error: "",
};

export const announsSlice = createSlice({
  name: "announs",
  initialState,
  reducers: {
    openLoader: (state) => {
      state.isLoading = true;
    },
    closeLoader: (state) => {
      state.isLoading = false;
    },
    fetchAnnoun: (state, action: PayloadAction<Announc[]>) => {
      state.data = action.payload;
      state.announcementFound = true;
      state.error = "";
    },

    catchError: (state, action) => {
      state.error = action.payload || "Something went wrong";
    },
  },
});

export default announsSlice.reducer;
