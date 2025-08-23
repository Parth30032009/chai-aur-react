import { useLocation, useNavigate } from "react-router";

export function useScrollToTop(location, slug) {
  if (location.pathname === slug) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}
