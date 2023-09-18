// TabManager.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Buat konteks untuk mengelola state tab
const TabContext = createContext<{ activeTab: number; setActiveTab: React.Dispatch<React.SetStateAction<number>> } | undefined>(undefined);

// Komponen tingkat atas yang menyediakan state tab
export const TabProvider = ({ children }: { children: ReactNode })  => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabContext.Provider>
  );
};

// Fungsi custom hook untuk mengakses state tab
export const useTab = () => {
  return useContext(TabContext);
};