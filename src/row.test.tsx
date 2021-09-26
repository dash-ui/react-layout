/* jest */
import { render, screen } from "@testing-library/react";
import * as React from "react";
import { mediaQueries, renderMq } from "test-utils";
import { Row } from "./row";

describe("<Row> without media queries", () => {
  it("applies default styles", () => {
    render(<Row data-testid="el" />);
    expect(screen.getByTestId("el")).toHaveStyleRule("display", "flex");
  });

  it('applies the "gap" prop', () => {
    render(<Row gap={1} data-testid="el" />);
    expect(screen.getByTestId("el")).toHaveStyleRule(
      "margin-left",
      "var(--gap-1)!important",
      {
        target: ">* + *",
      }
    );
  });

  it('applies the "gap" prop w/ "reverse"', () => {
    render(<Row gap={1} reverse data-testid="el" />);
    expect(screen.getByTestId("el")).toHaveStyleRule(
      "margin-right",
      "var(--gap-1)!important",
      {
        target: ">* + *",
      }
    );
  });

  it('applies the "reverse" prop', () => {
    render(<Row reverse data-testid="el" />);
    expect(screen.getByTestId("el")).toHaveStyleRule(
      "flex-direction",
      "row-reverse"
    );
  });

  it('applies the "align" prop', () => {
    render(<Row align="center" data-testid="el" />);
    expect(screen.getByTestId("el")).toHaveStyleRule("align-items", "center");
  });

  it('applies the "distribute" prop', () => {
    render(<Row distribute="center" data-testid="el" />);
    expect(screen.getByTestId("el")).toHaveStyleRule(
      "justify-content",
      "center"
    );
  });
});

describe("<Row> with media queries", () => {
  it('applies the "gap" prop', () => {
    renderMq(<Row gap={{ phone: 1 }} data-testid="el" />);
    expect(screen.getByTestId("el")).toHaveStyleRule(
      "margin-left",
      "var(--gap-1)!important",
      {
        target: ">* + *",
        media: mediaQueries.phone,
      }
    );
  });

  it('applies the "gap" prop w/ "reverse"', () => {
    renderMq(<Row gap={{ phone: 1 }} reverse data-testid="el" />);
    expect(screen.getByTestId("el")).toHaveStyleRule(
      "margin-right",
      "var(--gap-1)!important",
      {
        target: ">* + *",
        media: mediaQueries.phone,
      }
    );
  });

  it('applies the "reverse" prop', () => {
    renderMq(<Row reverse={{ phone: true }} data-testid="el" />);
    expect(screen.getByTestId("el")).toHaveStyleRule(
      "flex-direction",
      "row-reverse",
      {
        media: mediaQueries.phone,
      }
    );
  });

  it('applies the "align" prop', () => {
    renderMq(<Row align={{ phone: "center" }} data-testid="el" />);
    expect(screen.getByTestId("el")).toHaveStyleRule("align-items", "center", {
      media: mediaQueries.phone,
    });
  });

  it('applies the "distribute" prop', () => {
    renderMq(<Row distribute={{ phone: "center" }} data-testid="el" />);
    expect(screen.getByTestId("el")).toHaveStyleRule(
      "justify-content",
      "center",
      {
        media: mediaQueries.phone,
      }
    );
  });
});
