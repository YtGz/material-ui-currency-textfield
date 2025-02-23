import React from "react"
import CurrencyTextField from "@unicef/material-ui-currency-textfield"
import { Button } from "@mui/material"
import { createTheme, ThemeProvider } from "@mui/material/styles"

const defaultTheme = createTheme();

export default function App() {
  const [value, setValue] = React.useState(99)
  const error = value < 100

  function resetValue() {
    setValue(0)
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <React.Fragment>
        <CurrencyTextField
          label="Amount"
          value={value}
          currencySymbol="$"
          maximumValue={"100000000000000000"}
          autoFocus
          onChange={(e, value) => setValue(value)}
          error={error}
          helperText={"minimum number is 100"}
          decimalCharacter="."
          digitGroupSeparator=","
        />
        <Button onClick={resetValue}>Reset</Button>
      </React.Fragment>
    </ThemeProvider>
  )
}
