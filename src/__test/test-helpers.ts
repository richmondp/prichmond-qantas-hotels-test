import { screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

export const clickDropDownByTestId = async (testId: string) => {
  const dropdown = within(await screen.findByTestId(testId)).getByRole('combobox');
  await userEvent.click(dropdown);
};

export const selectDropDownValueByTestId = async (testId: string, value: string) => {
  await clickDropDownByTestId(testId);
  await userEvent.click(await screen.findByRole('option', { name: value }));
};
