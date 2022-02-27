import React from "react";
import { GridContainer, GridItem, RowContainer, TextInput, Heading } from "./styles/users";

const UsersGrid = ({ ...restProps }) => {
  return <GridContainer {...restProps} />;
};

UsersGrid.Heading = ({ ...restProps }) => {
  return <Heading {...restProps} />;
};

UsersGrid.UserInput = ({ ...restProps }) => {
  return <TextInput {...restProps} />;
};

UsersGrid.UserRow = ({ ...restProps }) => {
  return <RowContainer {...restProps} />;
};

UsersGrid.UserItem = ({ ...restProps }) => {
  return <GridItem {...restProps} />;
};

export default UsersGrid;
