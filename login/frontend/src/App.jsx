import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./app.routes";
import { AuthContext, AuthProvider } from "./features/auth/Auth.contexts";
import { PostContextProvider } from "./features/posts/post.context";
const App = () => {
  return (
    <div className="bg-black h-screen w-screen text-white">
      <AuthProvider>
		<PostContextProvider>
        <RouterProvider router={router} />
		</PostContextProvider>
      </AuthProvider>
    </div>
  );
};

export default App;
