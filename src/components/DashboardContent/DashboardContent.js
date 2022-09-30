import React from "react";
import styles from "../../Styles/Dashboard/DashboardContent.scss";
import {
  Box,
  Button,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import search from "../../images/search.svg";
import { ReactComponent as MoreVertIcon } from "../../images/option.svg";

const options = [
  "Edit name",
  "Edit product(s)",
  "Edit working hours",
  "Assign plant(s)",
  "Unassign plant(s)",
  "Remove operator",
  "Stop schedule",
  "Start schedule",
];

const ITEM_HEIGHT = 48;

const DashboardContent = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box className="groups_dashboard_wrapper">
      <Box>
        <Box className="content_title">
          <Typography variant="h5" component="h5">
            Groups
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box className="search_inp">
            <img src={search} alt="search-logo" />
            <input placeholder="Search..." />
            <button className="search_btn">Search</button>
          </Box>
          <Box className="top_btn_group">
            <Button variant="outlined" className="btn_view">
              View file data
            </Button>
            <Button variant="contained" className="btn_group">
              Create group
            </Button>
          </Box>
        </Box>
        <Box className="table_wrapper">
          <TableContainer component={Paper} className="group_table_container">
            <Table sx={{ minWidth: 650 }} className="group_table">
              <TableHead className="table_header">
                <TableRow>
                  <TableCell>Group name</TableCell>
                  <TableCell>Printers</TableCell>
                  <TableCell>Errors</TableCell>
                  <TableCell>Operator</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* {rows.map((row) => ( */}
                <TableRow
                  // key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    G-003
                  </TableCell>
                  <TableCell>45 | 0</TableCell>
                  <TableCell>-</TableCell>
                  <TableCell>-</TableCell>
                  <TableCell>
                    <Box className="table_progress green_progress">
                      <Typography>greenyGarden Master</Typography>{" "}
                      <Typography>35</Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box>
                      <IconButton
                        aria-label="more"
                        id="long-button"
                        aria-controls={open ? "long-menu" : undefined}
                        aria-expanded={open ? "true" : undefined}
                        aria-haspopup="true"
                        onClick={handleClick}
                      >
                        <MoreVertIcon />
                      </IconButton>
                      <Menu
                        id="long-menu"
                        MenuListProps={{
                          "aria-labelledby": "long-button",
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        PaperProps={{
                          style: {
                            maxHeight: ITEM_HEIGHT * 4.5,
                            width: "20ch",
                          },
                        }}
                      >
                        {options.map((option) => (
                          <MenuItem
                            key={option}
                            selected={option === "Pyxis"}
                            onClick={handleClose}
                          >
                            {option}
                          </MenuItem>
                        ))}
                      </Menu>
                    </Box>
                  </TableCell>
                </TableRow>
                <TableRow
                  // key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    G-003
                  </TableCell>
                  <TableCell>45 | 0</TableCell>
                  <TableCell>-</TableCell>
                  <TableCell>-</TableCell>
                  <TableCell>
                    <Box
                      className="table_progress red_progress"
                      sx={{ backgroundColor: "#DF1010" }}
                    >
                      <Typography>greenyGarden Master</Typography>{" "}
                      <Typography>35</Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box>
                      <IconButton
                        aria-label="more"
                        id="long-button"
                        aria-controls={open ? "long-menu" : undefined}
                        aria-expanded={open ? "true" : undefined}
                        aria-haspopup="true"
                        onClick={handleClick}
                      >
                        <MoreVertIcon />
                      </IconButton>
                      <Menu
                        id="long-menu"
                        MenuListProps={{
                          "aria-labelledby": "long-button",
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        PaperProps={{
                          style: {
                            maxHeight: ITEM_HEIGHT * 4.5,
                            width: "20ch",
                          },
                        }}
                      >
                        {options.map((option) => (
                          <MenuItem
                            key={option}
                            selected={option === "Pyxis"}
                            onClick={handleClose}
                          >
                            {option}
                          </MenuItem>
                        ))}
                      </Menu>
                    </Box>
                  </TableCell>
                </TableRow>
                <TableRow
                  // key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    G-003
                  </TableCell>
                  <TableCell>45 | 0</TableCell>
                  <TableCell>-</TableCell>
                  <TableCell>-</TableCell>
                  <TableCell>
                    <Box className="table_progress green_progress">
                      <Typography>greenyGarden Master</Typography>{" "}
                      <Typography>35</Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box>
                      <IconButton
                        aria-label="more"
                        id="long-button"
                        aria-controls={open ? "long-menu" : undefined}
                        aria-expanded={open ? "true" : undefined}
                        aria-haspopup="true"
                        onClick={handleClick}
                      >
                        <MoreVertIcon />
                      </IconButton>
                      <Menu
                        id="long-menu"
                        MenuListProps={{
                          "aria-labelledby": "long-button",
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        PaperProps={{
                          style: {
                            maxHeight: ITEM_HEIGHT * 4.5,
                            width: "20ch",
                          },
                        }}
                      >
                        {options.map((option) => (
                          <MenuItem
                            key={option}
                            selected={option === "Pyxis"}
                            onClick={handleClose}
                          >
                            {option}
                          </MenuItem>
                        ))}
                      </Menu>
                    </Box>
                  </TableCell>
                </TableRow>
                <TableRow
                  // key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    G-003
                  </TableCell>
                  <TableCell>45 | 0</TableCell>
                  <TableCell>-</TableCell>
                  <TableCell>-</TableCell>
                  <TableCell>
                    <Box className="table_progress green_progress">
                      <Typography>greenyGarden Master</Typography>{" "}
                      <Typography>35</Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box>
                      <IconButton
                        aria-label="more"
                        id="long-button"
                        aria-controls={open ? "long-menu" : undefined}
                        aria-expanded={open ? "true" : undefined}
                        aria-haspopup="true"
                        onClick={handleClick}
                      >
                        <MoreVertIcon />
                      </IconButton>
                      <Menu
                        id="long-menu"
                        MenuListProps={{
                          "aria-labelledby": "long-button",
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        PaperProps={{
                          style: {
                            maxHeight: ITEM_HEIGHT * 4.5,
                            width: "20ch",
                          },
                        }}
                      >
                        {options.map((option) => (
                          <MenuItem
                            key={option}
                            selected={option === "Pyxis"}
                            onClick={handleClose}
                          >
                            {option}
                          </MenuItem>
                        ))}
                      </Menu>
                    </Box>
                  </TableCell>
                </TableRow>
                {/* ))} */}
              </TableBody>
            </Table>
          </TableContainer>
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
  );
};

export default DashboardContent;
