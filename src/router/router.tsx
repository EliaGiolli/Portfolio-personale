// router.tsx
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../RootLayout";
import ErrorPage from "../pages/ErrorPage";
import Homepage from "../pages/Homepage";
import ContactsPage from "../pages/ContactsPage";
import { lazy, Suspense } from "react";
import { Skeleton } from "../components/SkeletonComponent";
import ProjectsLayout from "../pages/projects/ProjectPage";

const ProjectCategoryPage = lazy(() => import("../pages/projects/ProjectCategoryPage"));
const ProjectDetailPage = lazy(() => import("../pages/projects/ProjectDetailPage"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Homepage /> },
      {
        path: "projects",
        element: <ProjectsLayout />, 
        children: [
          {
            path: ":type",
            element: (
              <Suspense fallback={<Skeleton className="h-32 w-full" />}>
                <ProjectCategoryPage />
              </Suspense>
            ),
          },
          {
            path: ":type/:tech",
            element: (
              <Suspense fallback={<Skeleton className="h-32 w-full" />}>
                <ProjectCategoryPage />
              </Suspense>
            ),
          },
          {
            path: ":type/:tech/:slug",
            element: (
              <Suspense fallback={<Skeleton className="h-32 w-full" />}>
                <ProjectDetailPage />
              </Suspense>
            ),
          },
        ],
      },
      { path: "contacts", element: <ContactsPage /> },
    ],
  },
]);
