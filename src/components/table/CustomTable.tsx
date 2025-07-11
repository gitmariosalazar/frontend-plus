import React, { ReactNode, useState } from 'react';
import './CustomTable.css';
import HeaderTable from './HeaderTable';
import { FastForward, PlayArrow } from '@mui/icons-material';

interface Column {
  header: string;
  [key: string]: any;
  sortable?: boolean;
  render?: (value: any, row: Record<string, any>) => React.ReactNode;
}

interface CustomTableProps {
  data: Record<string, any>[];
  columns: Column[];
  rowsPerPage?: number;
  table_title: string;
  button: ReactNode;
}

const CustomTable: React.FC<CustomTableProps> = ({ data, columns, rowsPerPage = 12, table_title, button }) => {
  const [sortedData, setSortedData] = useState(data);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [filterText, setFilterText] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageBlock, setPageBlock] = useState(0);
  const pagesPerBlock = 6;

const totalPages = Math.ceil(
  sortedData.filter((row) => columns.some((column) => row[column.key]?.toString().toLowerCase().includes(filterText.toLowerCase())))
    .length / rowsPerPage
);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      setPageBlock(Math.floor((newPage - 1) / pagesPerBlock));
    }
  };

  const sortData = (column: keyof Column) => {
    const direction = sortDirection === 'asc' ? 'desc' : 'asc';
    setSortDirection(direction);
    const sorted = [...sortedData].sort((a, b) => {
      if (a[column] < b[column]) return direction === 'asc' ? -1 : 1;
      if (a[column] > b[column]) return direction === 'asc' ? 1 : -1;
      return 0;
    });
    setSortedData(sorted);
    setCurrentPage(1);
    setPageBlock(0);
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterText(event.target.value);
    setCurrentPage(1);
  };

const filteredData = sortedData.filter((row) =>
  columns.some((column) => row[column.key]?.toString().toLowerCase().includes(filterText.toLowerCase()))
);


  const paginatedData = filteredData.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  const startPage = pageBlock * pagesPerBlock + 1;
  const endPage = Math.min(startPage + pagesPerBlock - 1, totalPages);

  const nextPageBlock = () => {
    if (endPage < totalPages) {
      setPageBlock((prev) => prev + 1);
      setCurrentPage(pageBlock * pagesPerBlock + pagesPerBlock + 1);
    }
  };

  const prevPageBlock = () => {
    if (startPage > 1) {
      setPageBlock((prev) => prev - 1);
      setCurrentPage((pageBlock - 1) * pagesPerBlock + pagesPerBlock);
    }
  };

  return (
    <div className="custom-table">
      <HeaderTable title={table_title} button={button} onSearch={handleFilterChange} onButtonClick={() => {}} />
      <div className="custom-table-header">
        {columns.map((column) => (
          <div
            key={column.key}
            className="custom-table-cell custom-table-header-cell"
            onClick={() => column.sortable && sortData(column.key)}
          >
            {column.header}
            {sortColumn === column.key && (sortDirection === 'asc' ? ' 🔼' : ' 🔽')}
          </div>
        ))}
      </div>
      <div className="custom-table-body">
        {paginatedData.map((row, index) => (
          <div key={index} className={index % 2 === 0 ? 'custom-table-row row-one' : 'custom-table-row row-two'}>
            {columns.map((column) => (
              <div key={column.key} className="custom-table-cell">
                {column.render ? column.render(row[column.key], row) : row[column.key]}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="pagination-container">
        <button className="btn-pagination btn-pagination-left" onClick={prevPageBlock} disabled={pageBlock === 0}>
          <FastForward
            sx={{
              width: '25px',
              height: '25px',
              color: currentPage < 7 ? '#33334c' : 'white',
              '&:hover': { color: currentPage < 7 ? 'none' : 'magenta' }
            }}
          />
        </button>
        <button
          className="btn-pagination btn-pagination-left"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <PlayArrow
            sx={{
              width: '25px',
              height: '25px',
              color: currentPage === 1 ? '#33334c' : 'white',
              '&:hover': { color: currentPage === 1 ? 'none' : 'magenta' }
            }}
          />
        </button>
        {Array.from({ length: endPage - startPage + 1 }, (_, index) => {
          const pageNumber = startPage + index;
          return (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              className={currentPage === pageNumber ? 'active-page btn-current-page' : 'btn-current-page'}
            >
              {pageNumber}
            </button>
          );
        })}
        <button
          className="btn-pagination btn-pagination-right"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <PlayArrow
            sx={{
              width: '25px',
              height: '25px',
              color: currentPage === totalPages ? '#33334c' : 'white',
              '&:hover': { color: currentPage === totalPages ? 'none' : 'magenta' }
            }}
          />
        </button>
        <button className="btn-pagination btn-pagination-right" onClick={nextPageBlock} disabled={endPage === totalPages}>
          <FastForward
            sx={{
              width: '25px',
              height: '25px',
              color: currentPage > totalPages - 7 ? '#33334c' : 'white',
              '&:hover': { color: currentPage > totalPages - 7 ? 'none' : 'magenta' }
            }}
          />
        </button>
      </div>
    </div>
  );
};

export default CustomTable;
