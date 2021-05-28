import { render, fireEvent } from "@testing-library/react";
import { Checkbox } from "./Checkbox";
test("Test Checkbox Status", () => {
  const { getByLabelText } = render(<Checkbox />);
  const checkbox = getByLabelText(/not selected/);
  fireEvent.click(checkbox);
  expect(checkbox.checked).toEqual(true);
});
