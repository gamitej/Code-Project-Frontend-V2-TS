// ============= App.ts ===============

export type AppAuth = {
  isLoggedIn: boolean;
  navbarHeight?: string;
};

// ============== AUTH =============

// auth
export interface AuthInputForm {
  username?: string;
  password?: string;
  confirmPassword?: string;
}

// login-signup bottom footer
export type FooterProps = {
  handleAuthSwitch: (event: React.MouseEvent<HTMLButtonElement>) => void;
  switchAuth: boolean;
};

// login - signup props
export interface LoginProps extends FooterProps {
  inputForm: AuthInputForm;
  isLoading: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// =============  EXPLORE =================

type onGoingTopicType = {
  error: boolean;
  data: string;
};

export type ExploreTopicsData = {
  solved: number;
  total: number;
  urlTitle: string;
  title: string;
  onGoingTopic: onGoingTopicType | undefined;
};

// Define an interface for the topicName object
export interface TopicName {
  userSession: string;
  colorSession: string;
  "tree-1": string;
  "tree-2": string;
  stack: string;
  arrays: string;
  strings: string;
  linkedlist: string;
  twoPointers: string;
  heap: string;
  binarySearch: string;
  "dp-1": string;
  "dp-2": string;
  slidingWindow: string;
  "": string;
}

export interface SelectedTopicBodyData {
  completed: boolean;
  id: string;
  name: string;
  platform: string;
  url: string;
}

export interface SelectedTopicData {
  body: SelectedTopicBodyData[];
  cardTitle: string;
  cardType: string;
}
