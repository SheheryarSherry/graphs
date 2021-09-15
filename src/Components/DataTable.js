import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'id', headerName: 'Head', width: 324.25 },
  {
    field: 'head',
    headerName: 'Head',
    width: 324.25,
  },
  {
    field: 'head2',
    headerName: 'Head',
    width: 324.25,
  },
  {
    field: 'head3',
    headerName: 'Head',
    width: 324.25,
  },
  
];

const rows = [
  { id: '1', head: 'cell', head2: 'cell', head3: 'cell' },
  { id: '2', head: 'cell', head2: 'cell', head3: 'cell' },
  { id: '3', head: 'cell', head2: 'cell', head3: 'cell' },
  { id: '4', head: 'cell', head2: 'cell', head3: 'cell' },
  { id: '5', head: 'cell', head2: 'cell', head3: 'cell' },
  { id: '6', head: 'cell', head2: 'cell', head3: 'cell' },
];

 function DataTable() {
  return (
    
      <DataGrid
      autoHeight
        style={{borderRadius:20 ,height:'100%', backgroundColor:'#E9EEF2'}}
        rows={rows}
        columns={columns}
        pageSize={10}
        checkboxSelection
        disableSelectionOnClick
      />
  );
}
export default DataTable