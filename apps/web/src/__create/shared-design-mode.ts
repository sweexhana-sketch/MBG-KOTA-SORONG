/**
 * Shared design-mode stub.
 * This module provides the design-mode overlay used by the web app's
 * __create tooling. It is a minimal placeholder so the app can boot
 * without the full monorepo "shared" package.
 * 
 * Copied from ../../../../shared/design-mode.ts to fix Vercel build
 * which cannot access files outside the Root Directory (apps/web).
 */

export interface ResolvedElement {
  element: Element;
}

export type GetStyleInfo = (resolved: ResolvedElement) => {
  className: string;
  styles: Record<string, string> | null;
};

/**
 * Initialises design-mode selection behaviour.  Returns a `reselect`
 * function that can be called after HMR to re-highlight the active element.
 */
export function initDesignMode(_getStyleInfo: GetStyleInfo): () => void {
  // In standalone / local-dev mode we simply no-op the design overlay.
  return () => {};
}
