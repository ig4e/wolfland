import { Application, UserApplication } from "@prisma/client";
import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { signOut } from "next-auth/react";
import { v4 } from "uuid";

interface User {
  id: string;
  admin: boolean;
  activated: boolean;
  locked: boolean;
  userApplyApplication?: UserApplication;
  updatedAt: Date;
  createdAt: Date;
  profile: {
    id: string;
    username: string;
    avatar: string;
    avatar_decoration: string;
    discriminator: string;
    public_flags: number;
  };
}

interface UserState {
  loading: boolean;
  user?: Partial<User>;
  error?: string;
  setLoading: (loading: boolean) => void;
  setUser: (newUser?: User) => void;
  signOut: () => void;
  setUserError: (err: string) => void;
}

export const useUserStore = create<UserState>()(
  devtools((set) => ({
    loading: true,
    user: undefined,
    error: "",
    setLoading(loading) {
      set((state) => {
        return { ...state, loading: loading };
      });
    },
    setUser(newUser) {
      set((state) => {
        return { ...state, user: newUser };
      });
    },
    signOut() {
      set((state) => {
        return { ...state, user: undefined };
      });
      signOut();
    },
    setUserError(err) {
      set((state) => ({ ...state, error: err }));
    },
  }))
);

interface NewApplicationState {
  application: Partial<Application>;
  updateQuestionTitle: (id: string, value: string) => void;
  newQuestion: () => void;
  deleteQuestionTitle: (id: string) => void;
}

export const useNewApplicationStore = create<NewApplicationState>()(
  devtools((set) => ({
    application: {
      questions: [{ id: v4(), title: "", response: null }],
      for: "ACTIVATE",
      additionalUserInfoRequired: true,
    },
    updateQuestionTitle(id, value) {
      set((state) => {
        return {
          ...state,
          application: {
            ...state.application,
            questions: state.application.questions?.map((q) => {
              if (q.id === id) q.title = value;
              return q;
            }),
          },
        };
      });
    },
    newQuestion() {
      set((state) => {
        return {
          ...state,
          application: {
            ...state.application,
            questions: [
              ...state.application.questions!,
              { id: v4(), title: "", response: null },
            ],
          },
        };
      });
    },
    deleteQuestionTitle(id) {
      set((state) => {
        return {
          ...state,
          application: {
            ...state.application,
            quetions: state.application.questions?.filter((q) => q.id !== id),
          },
        };
      });
    },
  }))
);
