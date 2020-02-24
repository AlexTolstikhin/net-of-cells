import React, { useState } from 'react';
import './App.css';
const data = {
  0: {
    0: {
      id: '1'
    },
    1: {
      id: '2'
    },
    2: {
      id: '3'
    }
  },
  1: {
    0: {
      id: '4'
    },
    1: {
      id: '5'
    },
    2: {
      id: '6'
    }
  },
  2: {
    0: {
      id: '7'
    },
    1: {
      id: '8'
    },
    2: {
      id: '9'
    }
  },
  3: {
    0: {
      id: '10'
    },
    1: {
      id: '11'
    },
    2: {
      id: '12'
    }
  }
};





function App() {
  const [selected, setSelected] = useState({});
  const styles = {
    app: {
      width: '200px',
      margin: '0 auto'
    },
    column: (row, col) => ({
      height: '50px',
      width: '50px',
      border: '1px solid',
      background: selected.row >= row && selected.col >= col ? 'red' : 'transparent'
    }),
    row: {
      display: 'flex',
      justifyContent: 'center'
    }
  }
  const renderColumn = (data, row, col) => <div onMouseOver={() => setSelected({row, col})} col={col} row={row} style={styles.column(row, col)}>{data.id}</div>
  return (
    <div className="App" style={styles.app}>
    {Object.keys(data).map(row => 
      <div style={styles.row}>{Object.keys(data[row]).map(col => renderColumn(data[row][col], row, col))}</div>
    )}
    </div>
  );
}

export default App;
