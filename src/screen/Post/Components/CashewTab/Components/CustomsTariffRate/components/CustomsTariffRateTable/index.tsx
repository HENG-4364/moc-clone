import { Table } from "react-bootstrap";

type CustomsTariffTableProps = {
  columns: string[]; // Array of strings for column headers
  data: string[][]; // 2D array of strings for table data rows
};

const CustomsTariffRateTable = ({ columns, data }: CustomsTariffTableProps) => {
  return (
    <Table hover responsive>
      <thead className="lh-lg">
        <tr>
          {columns.map((col, index) => (
            <th key={index}>{col}</th>
          ))}
        </tr>
      </thead>
      <tbody className="lh-lg">
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default CustomsTariffRateTable;
