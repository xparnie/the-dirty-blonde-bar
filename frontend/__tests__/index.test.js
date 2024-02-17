// __tests__/index.test.js

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "../pages/index";

describe("Home", () => {
   it("should render Hero component", () => {
      render(<Home />);

      const heading = screen.getByRole("heading", {
         name: "Rebuilt from the ground up!",
      });

      expect(heading).toBeInTheDocument();
   });

   it("should render AboutUs component", () => {
      render(<Home />);

      const heading = screen.getByRole("heading", {
         name: "About Us",
      });

      expect(heading).toBeInTheDocument();
   });

   it("should render Hours component", () => {
      render(<Home />);

      const heading = screen.getByRole("heading", {
         name: "Hours",
      });

      expect(heading).toBeInTheDocument();
   });
});
