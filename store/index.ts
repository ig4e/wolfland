import {
  Application,
  Rule,
  RuleSection,
  UserApplication,
} from "@prisma/client";
import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { signOut } from "next-auth/react";
import { v4 } from "uuid";

interface User {
  id: string;
  admin: boolean;
  mod: boolean;
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
  editing: boolean;
  application: Partial<Application>;
  updateQuestionTitle: (id: string, value: string) => void;
  newQuestion: () => void;
  deleteQuestion: (id: string) => void;
  resetState: () => void;
  setApplication: (application: Partial<Application>) => void;
  setEditing: (editing: boolean) => void;
}

export const useNewApplicationStore = create<NewApplicationState>()(
  //@ts-ignore
  devtools((set) => ({
    editing: false as any,
    application: {
      questions: [{ id: v4(), title: "", response: null }],
      for: "ACTIVATE",
      additionalUserInfoRequired: true,
    },

    setEditing(editing) {
      set((state) => {
        return {
          ...state,
          editing,
        };
      });
    },

    setApplication(application) {
      set((state) => {
        return {
          ...state,
          application,
        };
      });
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
    deleteQuestion(id) {
      set((state) => {
        return {
          ...state,
          application: {
            ...state.application,
            questions: state.application.questions?.filter((x) => x.id !== id),
          },
        };
      });
    },

    resetState() {
      set((state) => ({
        editing: false as any,
        application: {
          questions: [{ id: v4(), title: "", response: null }],
          for: "ACTIVATE",
          additionalUserInfoRequired: true,
        },
      }));
    },
  }))
);

interface EditRulesState {
  open: boolean;
  rules: RuleSection[];
  setOpen: (state: boolean) => void;
  addNewSection: () => void;
  removeSection: (sectionId: string) => void;
  addNewRuleInSection: (sectionId: string) => void;
  removeRuleInSection: (sectionId: string, ruleId: string) => void;
  setRules: (rules: RuleSection[]) => void;
}

export const useEditRulesStore = create<EditRulesState>()(
  devtools((set) => ({
    open: false as any,
    rules: [
      {
        id: v4(),
        title: "",
        imageUrl: "",
        description: "",
        apply: false as any,
        rules: [{ id: v4(), title: "", value: "" }],
      },
    ],
    setOpen: (stat) => {
      set((state) => ({
        ...state,
        open: stat,
      }));
    },
    addNewSection() {
      set((state) => ({
        ...state,
        rules: [
          ...state.rules,
          {
            id: v4(),
            title: "",
            imageUrl: "",
            description: "",
            apply: false as any,
            rules: [{ id: v4(), title: "", value: "" }],
          },
        ],
      }));
    },
    removeSection(sectionId) {
      set((state) => ({
        ...state,
        rules: state.rules.filter((section) => section.id !== sectionId),
      }));
    },
    addNewRuleInSection(sectionId) {
      set((state) => ({
        ...state,
        rules: state.rules.map((section) => {
          if (section.id === sectionId) {
            section.rules = [
              ...section.rules,
              { id: v4(), title: "", value: "" },
            ];
          }
          return section;
        }),
      }));
    },
    setRules(rules) {
      set((state) => ({
        ...state,
        rules: rules,
      }));
    },
    removeRuleInSection(sectionId, ruleId) {
      set((state) => ({
        ...state,
        rules: state.rules.map((section) => {
          if (section.id === sectionId) {
            section.rules = section.rules.filter((rule) => rule.id !== ruleId);
          }
          return section;
        }),
      }));
    },
  }))
);
