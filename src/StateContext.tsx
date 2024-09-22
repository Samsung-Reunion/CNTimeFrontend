import React, { createContext, useContext, useState } from 'react';

interface SharedGlobalState {
  jwt_token: string;
  current_project_id: string;
  current_team_id: string;
}

interface SharedTimerState {
  total_work_time: number;
  current_goal: string;
  total_turn: number;
}

interface ContextType {
  sharedGlobalState: SharedGlobalState;
  setSharedGlobalState: React.Dispatch<React.SetStateAction<SharedGlobalState>>;
  sharedTimerState: SharedTimerState;
  setSharedTimerState: React.Dispatch<React.SetStateAction<SharedTimerState>>;
}

// Context 생성 (초기값을 undefined로 설정하여 타입 안전성 확보)
const StateContext = createContext<ContextType | undefined>(undefined);

// 전역 State 설정
export const StateProvider = ({ children }: { children: React.ReactNode }) => {
  // sharedState와 sharedTimerState를 개별적으로 관리
  const [sharedGlobalState, setSharedGlobalState] = useState<SharedGlobalState>(
    {
      jwt_token: '',
      current_project_id: '',
      current_team_id: '',
    }
  );

  const [sharedTimerState, setSharedTimerState] = useState<SharedTimerState>({
    total_work_time: 0,
    current_goal: '',
    total_turn: 0,
  });

  return (
    <StateContext.Provider
      value={{
        sharedGlobalState,
        setSharedGlobalState,
        sharedTimerState,
        setSharedTimerState,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

// useContext를 통해 Context에 접근하는 커스텀 훅 생성
export const useSharedState = () => {
  const context = useContext(StateContext);

  if (!context) {
    throw new Error('useSharedState must be used within a StateProvider');
  }

  return context;
};
