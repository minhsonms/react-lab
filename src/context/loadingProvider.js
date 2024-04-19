import React, { createContext, useState } from 'react';

export const Loading = createContext();

export function LoadingProvider({children}) {
    const [loading, setLoading] = useState(false); // Đặt giá trị bạn muốn chia sẻ
    return (
      <Loading.Provider value={{ loading, setLoading }}>
        {children}
      </Loading.Provider>
    );
}