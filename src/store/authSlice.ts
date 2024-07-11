import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import AuthService from "../services/AuthService";
import { urlConfig } from "../services/Utils/ApiUrlConfig";
import ApiServices from "../services/ApiServices";

const LOGIN_URL = import.meta.env.VITE_API_LOGIN_URL;
interface AuthState {
  user: any | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

export const loginUser = createAsyncThunk(
  urlConfig.login,
  async (
    {
      username,
      password,
      grant_type = "password",
      client_id = "my-super-client",
    }: {
      username: string;
      password: string;
      grant_type: string;
      client_id: string;
    },
    thunkAPI
  ) => {
    try {
      const params = new URLSearchParams();
      params.append("username", username);
      params.append("password", password);
      params.append("grant_type", grant_type);
      params.append("client_id", client_id);

      const response = await fetch(LOGIN_URL+urlConfig.login, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params.toString(),
      });

      if (!response.ok) {
        throw new Error("Failed to login");
      }

      const session = await response.json();
      return session;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const checkAuth = createAsyncThunk(
  "auth/checkAuth",
  async (_, thunkAPI) => {
    const user = AuthService.getCurrentUser();
    if (user) {
      try {
        const session = await new Promise((resolve, reject) => {
          user.getSession((err: any, session: unknown) => {
            if (err) {
              reject(err);
            } else {
              resolve(session);
            }
          });
        });
        return session;
      } catch (error: any) {
        return thunkAPI.rejectWithValue(error.message);
      }
    } else {
      return thunkAPI.rejectWithValue("No user");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      AuthService.signOut();
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<any>) => {
        console.log(state, action , ">>>");
        console.log(">>>>>>> ", action.payload);
        
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(loginUser.rejected, (state, action: PayloadAction<any>) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(checkAuth.fulfilled, (state, action: PayloadAction<any>) => {
        state.user = action.payload;
      })
      .addCase(checkAuth.rejected, (state) => {
        state.user = null;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
