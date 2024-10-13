import { User } from 'interfaces/Auth.inteface';
import {create} from 'zustand';

interface AuthState {
    User: User | null;  
    isLoggedIn: boolean;
    setUser: (data: User) => void;  
}

const useAuthStore = create<AuthState>((set) => ({
  User: null,  
  isLoggedIn: false,
  setUser: (data: User) => set((state) => ({ User: {...state.User, ...data } })),
}));

export default useAuthStore;
