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
    },
    3: {
      id: '3'
    },
    4: {
      id: '4'
    },
    5: {
      id: '5'
    }
  },
  1: {
    0: {
      id: '1'
    },
    1: {
      id: '2'
    },
    2: {
      id: '3'
    },
    3: {
      id: '3'
    },
    4: {
      id: '4'
    },
    5: {
      id: '5'
    }
  },
  2: {
    0: {
      id: '1'
    },
    1: {
      id: '2'
    },
    2: {
      id: '3'
    },
    3: {
      id: '3'
    },
    4: {
      id: '4'
    },
    5: {
      id: '5'
    }
  },
  3: {
    0: {
      id: '1'
    },
    1: {
      id: '2'
    },
    2: {
      id: '3'
    },
    3: {
      id: '3'
    },
    4: {
      id: '4'
    },
    5: {
      id: '5'
    }
  }
};





function App() {
  const [overCells, setOverCells] = useState(false);
  const [selected, setSelected] = useState({});
  const styles = {
    app: {
      width: '312px',
      margin: '10% auto'
    },
    column: (row, col) => ({
      height: '50px',
      margin: '-1px',
      width: '50px',
      border: '2px solid',
      background: overCells && (selected.row >= row && selected.col >= col) ? 'red' : 'transparent'
    }),
    row: {
      display: 'flex',
      justifyContent: 'center'
    }
  }
  const renderColumn = (row, col) => 
    <div
      col={col}
      onMouseOver={() => setSelected({row, col})}
      row={row}
      style={styles.column(row, col)}
    />
  
  return (
    <div
      className="App"
      onMouseEnter={() => setOverCells(true)}
      onMouseLeave={() => setOverCells(false)}
      style={styles.app}
    >
      {Object.keys(data).map(row => 
        <div style={styles.row}>{Object.keys(data[row]).map(col => renderColumn(row, col))}</div>
      )}
    </div>
  );
}

export default App;
