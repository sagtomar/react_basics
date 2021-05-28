import { render } from "@testing-library/react";
import App from "./App";

test("renders test of h1", () => {
  const { getByText } = render(<App />);
  const h1 = getByText(/Hello Test/);
  expect(h1).toHaveTextContent("Hello Test");
});
