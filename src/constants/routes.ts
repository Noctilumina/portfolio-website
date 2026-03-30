/**
 * All application routes as typed constants.
 * Use these instead of hardcoded strings throughout the app.
 */

export enum Routes {
  HOME = '/',
  ABOUT = '/about',
  CV = '/cv',
  BLOG = '/blog',
  BLOG_POST = '/blog/:slug',
  PROJECT = '/project/:slug',
  TOOLS = '/tools',
  TOOL_CV_BUILDER = '/tools/cv-builder',
  TOOL_MD_EDITOR = '/tools/md-editor',
  TOOL_JSON_FORMATTER = '/tools/json-formatter',
  TOOL_CPRED_GENERATOR = '/tools/cpred-generator',
  TOOL_CPRED_WIKI = '/tools/cpred-wiki',
  TOOL_DIFF_CHECKER = '/tools/diff-checker',
  TOOL_STYLE_EXPLORER = '/tools/style-explorer',
  TOOL_COMPONENT_GALLERY = '/tools/component-gallery',
}

/** Helper to build a parameterized route */
export function buildRoute(route: Routes, params: Record<string, string> = {}): string {
  let path: string = route;
  Object.entries(params).forEach(([key, value]) => {
    path = path.replace(`:${key}`, value);
  });
  return path;
}
