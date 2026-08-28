import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(() => {
  const repositoryName =
    process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";

  const isGitHubPagesBuild =
    process.env.GITHUB_ACTIONS === "true";

  const isUserOrOrganizationSite =
    repositoryName.endsWith(".github.io");

  const base = isGitHubPagesBuild
    ? isUserOrOrganizationSite
      ? "/"
      : `/${repositoryName}/`
    : "/";

  return {
    plugins: [react()],
    base,

    build: {
      outDir: "dist",
      emptyOutDir: true,
    },
  };
});