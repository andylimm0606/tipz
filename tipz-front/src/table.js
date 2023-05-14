import React from 'react'
import './index.css'

function TableHeader()  {
  return (
    <thead>
      <tr>
        <th>Message</th>
        <th>Rating</th>
        <th>Explantion</th>
      </tr>
    </thead>
  );
}

function TableBody(props) {
  const rows = props.msgData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.message}</td>
        <td>{row.rating}</td>
        <td>{row.explanation}</td>
      </tr>
    );
   }
  );
  return (
      <tbody>
        {rows}
       </tbody>
   );
}

function Table(props) {
    return (
        <table>
            <TableHeader />
            <TableBody msgData={props.msgData}/>
        </table>
    );
}

export default Table;