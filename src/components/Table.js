// Table.js
import React, { useMemo } from 'react';
import { useTable, useExpanded } from 'react-table';
import MOCK_DATA from './Mock_Data.json';
import { COLUMNS } from './columns.js';
import './Table.css';

const Table = ({ data }) => {
  const columns = useMemo(() => COLUMNS, []);
  //const data = useMemo(() => MOCK_DATA, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state: { expanded },
    toggleRowExpanded
  } = useTable(
    {
      columns,
      data
    },
    useExpanded // Use the useExpanded plugin hook
  );

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <React.Fragment key={row.id}>
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                })}
              </tr>
              {row.isExpanded ? (
                <tr>
                  <td colSpan={columns.length}>
                    {/* Custom component for expanded row */}
                    <div className="expanded-row-content">
                      <p>Additional details or components can go here.</p>
                    </div>
                  </td>
                </tr>
              ) : null}
            </React.Fragment>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
