import React from "react";
import {
  Box,
  Typography,
  TextField,
  Checkbox,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
} from "@mui/material";
import styles from "../../Styles/Home/CreateGroup.scss";
import { minWidth } from "@mui/system";
import plantImg from "../../images/plant.svg";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

const CreateGroup = () => {
  const [age, setAge] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };

  const handleOpen1 = () => {
    setOpen1(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const handleOpen2 = () => {
    setOpen2(true);
  };
  const handleClose3 = () => {
    setOpen3(false);
  };

  const handleOpen3 = () => {
    setOpen3(true);
  };

  return (
    <Box className="create_group_wrapper">
      <Box className="ads_container"></Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box className="crete_group">
          <Typography variant="h5" component="h5">
            Create group
          </Typography>
          <Typography>This is some sample text. </Typography>
          <Box className="group_name">
            <Typography variant="h6" component="h6">
              Group name
            </Typography>
            <TextField
              fullWidth
              placeholder="Group name..."
              sx={{ height: "39px" }}
            />
          </Box>
          <Box className="plant_table_wrapper">
            <Box className="table_header">
              <Box sx={{ minWidth: "100px" }}></Box>
              <Box className="table_title">Plant name</Box>
              <Box className="table_title">Plant size</Box>
            </Box>
            <Box className="table_row">
              <Box sx={{ minWidth: "100px" }}>
                <Checkbox />
              </Box>
              <Box className="table_data">
                <Typography>L-001</Typography>
              </Box>
              <Box className="table_data">
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <img src={plantImg} alt="plant" />
                  <Box>
                    <Typography>Small</Typography>
                    <span>6 printers</span>
                  </Box>
                </Box>
              </Box>
              <Box className="table_select">
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel shrink={false}></InputLabel>
                  <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={open1}
                    onClose={handleClose1}
                    onOpen={handleOpen1}
                    placeholder=""
                    onChange={handleChange}
                    defaultValue={0}
                  >
                    <MenuItem value={0} sx={{ display: "none" }}>
                      Select a product...
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
            <Box className="table_row" sx={{ backgroundColor: "#F7F7F7" }}>
              <Box sx={{ minWidth: "100px" }}>
                <Checkbox />
              </Box>
              <Box className="table_data">
                <Typography>L-001</Typography>
              </Box>
              <Box className="table_data">
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <img src={plantImg} alt="plant" />
                  <Box>
                    <Typography>Small</Typography>
                    <span>6 printers</span>
                  </Box>
                </Box>
              </Box>
              <Box className="table_select">
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel shrink={false}></InputLabel>
                  <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={open2}
                    onClose={handleClose2}
                    onOpen={handleOpen2}
                    placeholder=""
                    onChange={handleChange}
                    defaultValue={0}
                  >
                    <MenuItem value={0} sx={{ display: "none" }}>
                      Select a product...
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
            <Box className="table_row">
              <Box sx={{ minWidth: "100px" }}>
                <Checkbox />
              </Box>
              <Box className="table_data">
                <Typography>L-001</Typography>
              </Box>
              <Box className="table_data">
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <img src={plantImg} alt="plant" />
                  <Box>
                    <Typography>Small</Typography>
                    <span>6 printers</span>
                  </Box>
                </Box>
              </Box>
              <Box className="table_select">
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel shrink={false}></InputLabel>
                  <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={open3}
                    onClose={handleClose3}
                    onOpen={handleOpen3}
                    placeholder=""
                    onChange={handleChange}
                    defaultValue={0}
                  >
                    <MenuItem value={0} sx={{ display: "none" }}>
                      Select a product...
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
          </Box>
          <Box className="plant_table_pagination">
            <Box className="pagination_numb active">1</Box>
            <Box className="pagination_numb">2</Box>
            <Box className="pagination_numb">3</Box>
            <Box className="pagination_numb">4</Box>
            <Typography>10 of 100 records</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItemsCenter: "center",
            justifyContent: "space-between",
            padding: "40px",
          }}
        >
          <Box className="cancel_btn">
            <Button variant="outlined">Cancel</Button>
          </Box>
          <Box className="create_btn">
            <Button variant="contained" color="success">
              Create group
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CreateGroup;
