/* jest */
import { render, screen } from "@testing-library/react";
import * as React from "react";
import { mediaQueries, renderMq } from "test-utils";
import { Grid, GridItem } from "./grid";

describe("<Grid> without media queries", () => {
  it("applies default styles", () => {
    render(<Grid data-testid="el" />);
    expect(screen.getByTestId("el")).toHaveStyleRule("display", "grid");
  });

  it('applies the "inline" prop', () => {
    render(<Grid inline data-testid="el" />);
    expect(screen.getByTestId("el")).toHaveStyleRule("display", "inline-grid");
  });

  it('applies the "cols" prop w/ specific sizes', () => {
    render(<Grid cols={[100, "auto", "3rem"]} data-testid="el" />);
    expect(screen.getByTestId("el")).toHaveStyleRule(
      "grid-template-columns",
      "100px auto 3rem"
    );
  });

  it('applies the "cols" prop w/ fixed number and size', () => {
    render(<Grid cols={3} data-testid="el" />);
    expect(screen.getByTestId("el")).toHaveStyleRule(
      "grid-template-columns",
      "1fr 1fr 1fr"
    );
  });

  it('applies the "rows" prop w/ specific sizes', () => {
    render(<Grid cols={[100, "auto", "3rem"]} data-testid="el" />);
    expect(screen.getByTestId("el")).toHaveStyleRule(
      "grid-template-columns",
      "100px auto 3rem"
    );
  });

  it('applies the "rows" prop w/ fixed number and size', () => {
    render(<Grid rows={3} data-testid="el" />);
    expect(screen.getByTestId("el")).toHaveStyleRule(
      "grid-template-rows",
      "1fr 1fr 1fr"
    );
  });

  it('applies the "gap" prop w/ single value', () => {
    render(<Grid gap={1} data-testid="el" />);
    expect(screen.getByTestId("el")).toHaveStyleRule(
      "grid-gap",
      "var(--gap-1) var(--gap-1)"
    );
  });

  it('applies the "gap" prop w/ array value', () => {
    render(<Grid gap={[1, 2]} data-testid="el" />);
    expect(screen.getByTestId("el")).toHaveStyleRule(
      "grid-gap",
      "var(--gap-1) var(--gap-2)"
    );
  });

  it('applies the "alignX" prop', () => {
    render(<Grid alignX="center" data-testid="el" />);
    expect(screen.getByTestId("el")).toHaveStyleRule("justify-items", "center");
  });

  it('applies the "alignY" prop', () => {
    render(<Grid alignY="center" data-testid="el" />);
    expect(screen.getByTestId("el")).toHaveStyleRule("align-items", "center");
  });

  it('applies the "distributeX" prop', () => {
    render(<Grid distributeX="center" data-testid="el" />);
    expect(screen.getByTestId("el")).toHaveStyleRule(
      "justify-content",
      "center"
    );
  });

  it('applies the "distributeY" prop', () => {
    render(<Grid distributeY="center" data-testid="el" />);
    expect(screen.getByTestId("el")).toHaveStyleRule("align-content", "center");
  });
});

describe("<Grid> with media queries", () => {
  const mq = { media: mediaQueries.phone };

  it('applies the "inline" prop', () => {
    renderMq(<Grid inline={{ phone: true }} data-testid="el" />);
    expect(screen.getByTestId("el")).toHaveStyleRule(
      "display",
      "inline-grid",
      mq
    );
  });

  it('applies the "cols" prop w/ specific sizes', () => {
    renderMq(<Grid cols={{ phone: [100, "auto", "3rem"] }} data-testid="el" />);
    expect(screen.getByTestId("el")).toHaveStyleRule(
      "grid-template-columns",
      "100px auto 3rem",
      mq
    );
  });

  it('applies the "cols" prop w/ fixed number and size', () => {
    renderMq(<Grid cols={{ phone: 3 }} data-testid="el" />);
    expect(screen.getByTestId("el")).toHaveStyleRule(
      "grid-template-columns",
      "1fr 1fr 1fr",
      mq
    );
  });

  it('applies the "rows" prop w/ specific sizes', () => {
    renderMq(<Grid cols={{ phone: [100, "auto", "3rem"] }} data-testid="el" />);
    expect(screen.getByTestId("el")).toHaveStyleRule(
      "grid-template-columns",
      "100px auto 3rem",
      mq
    );
  });

  it('applies the "rows" prop w/ fixed number and size', () => {
    renderMq(<Grid rows={{ phone: 3 }} data-testid="el" />);
    expect(screen.getByTestId("el")).toHaveStyleRule(
      "grid-template-rows",
      "1fr 1fr 1fr",
      mq
    );
  });

  it('applies the "gap" prop w/ single value', () => {
    renderMq(<Grid gap={{ phone: 1 }} data-testid="el" />);
    expect(screen.getByTestId("el")).toHaveStyleRule(
      "grid-gap",
      "var(--gap-1) var(--gap-1)",
      mq
    );
  });

  it('applies the "gap" prop w/ array value', () => {
    renderMq(<Grid gap={{ phone: [1, 2] }} data-testid="el" />);
    expect(screen.getByTestId("el")).toHaveStyleRule(
      "grid-gap",
      "var(--gap-1) var(--gap-2)",
      mq
    );
  });

  it('applies the "alignX" prop', () => {
    renderMq(<Grid alignX={{ phone: "center" }} data-testid="el" />);
    expect(screen.getByTestId("el")).toHaveStyleRule(
      "justify-items",
      "center",
      mq
    );
  });

  it('applies the "alignY" prop', () => {
    renderMq(<Grid alignY={{ phone: "center" }} data-testid="el" />);
    expect(screen.getByTestId("el")).toHaveStyleRule(
      "align-items",
      "center",
      mq
    );
  });

  it('applies the "distributeX" prop', () => {
    renderMq(<Grid distributeX={{ phone: "center" }} data-testid="el" />);
    expect(screen.getByTestId("el")).toHaveStyleRule(
      "justify-content",
      "center",
      mq
    );
  });

  it('applies the "distributeY" prop', () => {
    renderMq(<Grid distributeY={{ phone: "center" }} data-testid="el" />);
    expect(screen.getByTestId("el")).toHaveStyleRule(
      "align-content",
      "center",
      mq
    );
  });
});

describe("<GridItem> without media queries", () => {
  it('applies the "colStart" prop', () => {
    render(<GridItem colStart="1" data-testid="el" />);
    expect(screen.getByTestId("el")).toHaveStyleRule("grid-column-start", "1");
  });

  it('applies the "colEnd" prop', () => {
    render(<GridItem colEnd="1" data-testid="el" />);
    expect(screen.getByTestId("el")).toHaveStyleRule("grid-column-end", "1");
  });

  it('applies the "rowStart" prop', () => {
    render(<GridItem rowStart="1" data-testid="el" />);
    expect(screen.getByTestId("el")).toHaveStyleRule("grid-row-start", "1");
  });

  it('applies the "rowEnd" prop', () => {
    render(<GridItem rowEnd="1" data-testid="el" />);
    expect(screen.getByTestId("el")).toHaveStyleRule("grid-row-end", "1");
  });

  it('applies the "alignX" prop', () => {
    render(<GridItem alignX="center" data-testid="el" />);
    expect(screen.getByTestId("el")).toHaveStyleRule("justify-self", "center");
  });

  it('applies the "alignY" prop', () => {
    render(<GridItem alignY="center" data-testid="el" />);
    expect(screen.getByTestId("el")).toHaveStyleRule("align-self", "center");
  });
});

describe("<GridItem> with media queries", () => {
  const mq = { media: mediaQueries.phone };

  it('applies the "colStart" prop', () => {
    renderMq(<GridItem colStart={{ phone: 1 }} data-testid="el" />);
    expect(screen.getByTestId("el")).toHaveStyleRule(
      "grid-column-start",
      "1",
      mq
    );
  });

  it('applies the "colEnd" prop', () => {
    renderMq(<GridItem colEnd={{ phone: 1 }} data-testid="el" />);
    expect(screen.getByTestId("el")).toHaveStyleRule(
      "grid-column-end",
      "1",
      mq
    );
  });

  it('applies the "rowStart" prop', () => {
    renderMq(<GridItem rowStart={{ phone: 1 }} data-testid="el" />);
    expect(screen.getByTestId("el")).toHaveStyleRule("grid-row-start", "1", mq);
  });

  it('applies the "rowEnd" prop', () => {
    renderMq(<GridItem rowEnd={{ phone: 1 }} data-testid="el" />);
    expect(screen.getByTestId("el")).toHaveStyleRule("grid-row-end", "1", mq);
  });

  it('applies the "alignX" prop', () => {
    renderMq(<GridItem alignX={{ phone: "center" }} data-testid="el" />);
    expect(screen.getByTestId("el")).toHaveStyleRule(
      "justify-self",
      "center",
      mq
    );
  });

  it('applies the "alignY" prop', () => {
    renderMq(<GridItem alignY={{ phone: "center" }} data-testid="el" />);
    expect(screen.getByTestId("el")).toHaveStyleRule(
      "align-self",
      "center",
      mq
    );
  });
});
