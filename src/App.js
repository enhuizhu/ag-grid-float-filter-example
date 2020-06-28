import React, { useEffect, useState } from 'react';
import './App.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { FloatingFilterComponent } from './FloatingFilterComponet';
import axios from 'axios';

const columnDefs = [
  { field: 'athlete', filter: false },
  {
      field: 'gold',
      filter: 'agNumberColumnFilter',
      suppressMenu: true,
      floatingFilterComponent: 'customNumberFloatingFilter',
      floatingFilterComponentParams: {
          suppressFilterButton: true,
          color: 'red',
          onChange: (inputChagne) => {
            console.log('outside', inputChagne)
          }
      }
  },
  {
      field: 'silver',
      filter: 'agNumberColumnFilter',
      suppressMenu: true,
      floatingFilterComponent: 'customNumberFloatingFilter',
      floatingFilterComponentParams: {
          suppressFilterButton: true,
          color: 'blue'
      }
  },
  {
      field: 'bronze',
      filter: 'agNumberColumnFilter',
      suppressMenu: true,
      floatingFilterComponent: 'customNumberFloatingFilter',
      floatingFilterComponentParams: {
          suppressFilterButton: true,
          color: 'green'
      }
  },
  {
      field: 'total',
      filter: 'agNumberColumnFilter',
      suppressMenu: true,
      floatingFilterComponent: 'customNumberFloatingFilter',
      floatingFilterComponentParams: {
          suppressFilterButton: true,
          color: 'orange'
      }
  }
];

const gridOptions = {
  defaultColDef: {
      editable: true,
      sortable: true,
      flex: 1,
      minWidth: 100,
      filter: true,
      floatingFilter: true,
      resizable: true,
  },
  components: {
      customNumberFloatingFilter: FloatingFilterComponent,
  },
  columnDefs: columnDefs,
  rowData: null
};

function App() {
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    axios.get('https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinnersSmall.json')
      .then(r => setRowData(r.data));
  }, []);

  return (
    <div className="App">
      <h1>hello</h1>
      <div className='ag-theme-alpine' style={{width: 800, height: 600}}>
        <AgGridReact 
          {...gridOptions}
          rowData={rowData}
        >
        </AgGridReact>
      </div>
    </div>
  );
}

export default App;
