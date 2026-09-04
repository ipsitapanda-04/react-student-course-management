import { createContext } from "react";

export const StudentContext = createContext();

export function StudentProvider({ children }) {
  const student = {
    name: "Ipsita Panda",
    course: "B.Tech Computer Science",
    college: "GIET University"
  };

  return (
    <StudentContext.Provider value={student}>
      {children}
    </StudentContext.Provider>
  );
}
