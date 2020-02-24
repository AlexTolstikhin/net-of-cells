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
  }
};


const styles = {
  app: {
    width: '200px',
    margin: '0 auto'
  },
  column: {
    height: '50px',
    width: '50px',
    border: '1px solid'
  },
  row: {
    display: 'flex',
    justifyContent: 'center'
  }
}

const renderColumn = (data, row, col) => <div style={styles.column}>{col.id}</div>


function App() {
  return (
    <div className="App" style={styles.app}>
    {Object.keys(data).map(row => 
      <div style={styles.row}>{Object.keys(data[row]).map(item => renderColumn(data[row][item]))}</div>
    )}
    </div>
  );
}

export default App;
