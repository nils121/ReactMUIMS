import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import UserForm from "./SearchForm";
import SearchOptions from "./SearchOptions";
import { Grid } from "@mui/material";
import DataGrid from "./DataGrid/DataGrid";
import Header from "./Header/Header";

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    // color: "rgba(255, 255, 255, 0.7)",
    "&.Mui-selected": {
      color: "#000",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "rgba(100, 95, 228, 0.32)",
    },
  })
);

export default function Home() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  console.log("value", value);

  function TabContainer(props) {
    return <DataGrid />;
  }

  return (
    <>
      <SearchOptions />
      <Header />
      <Box style={{ marginTop: "50px" }}>
        <Box sx={{ width: "100%", maxWidth: "100%" }}>
          <Tabs
            onChange={handleChange}
            value={value}
            aria-label="Tabs where each tab needs to be selected manually"
          >
            <StyledTab label="Surgical Code" />
            <StyledTab label="Surge Proc/Provider Speciality" />
            <StyledTab label="Surge Proc/Attachment Code" />
            <StyledTab label="Surge Proc/SPC" />
            <StyledTab label="Surge Proc/Notes" />
          </Tabs>

          {value === 0 && <TabContainer id={1}> One</TabContainer>}
          {value === 1 && <TabContainer id={2}> Two</TabContainer>}
          {value === 2 && <TabContainer id={3}> Three</TabContainer>}
          {value === 3 && <TabContainer id={4}> Four</TabContainer>}
          {value === 4 && <TabContainer id={5}> Five</TabContainer>}
        </Box>
        <br />
        <div className="test1">
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              style={{
                color: "#white",
                backgroundColor: "#00c791",
              }}
            >
              Add
            </Button>
            <Button
              variant="contained"
              style={{
                color: "#white",
                backgroundColor: "#00c791",
              }}
            >
              Update
            </Button>
            <Button
              variant="contained"
              style={{
                color: "#white",
                backgroundColor: "#00c791",
              }}
            >
              Inquiry
            </Button>

            <Button
              variant="contained"
              style={{
                color: "#white",
                backgroundColor: "#00c791",
              }}
            >
              Void
            </Button>
            <Button
              variant="contained"
              style={{
                color: "#white",
                backgroundColor: "#00c791",
              }}
            >
              History
            </Button>
            <Button
              variant="contained"
              style={{
                color: "#white",
                backgroundColor: "#00c791",
              }}
            >
              Close
            </Button>
          </Stack>
        </div>
      </Box>
    </>
  );
}
