import React from "react";
import { Table } from "evergreen-ui";

// Exercise 11: Define the client here

function App() {
  // Exxercise 10: Manage the application state with hooks here
  return (
    <Table>
      <Table.Head>
        <Table.TextHeaderCell>name</Table.TextHeaderCell>
        <Table.TextHeaderCell>type</Table.TextHeaderCell>
      </Table.Head>
      {/* Exercise 10: Render a list of pets here */}
    </Table>
  );
}

const emoji = {
  DOG: "🐶",
  CAT: "🐱",
  RABBIT: "🐰",
};

function TableRow(props) {
  return (
    <Table.Row>
      <Table.TextCell>{props.name}</Table.TextCell>
      <Table.TextCell>{emoji[props.type]}</Table.TextCell>
    </Table.Row>
  );
}

export default App;
