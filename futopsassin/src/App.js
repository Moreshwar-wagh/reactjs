import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [user, setUser] = useState([]);
  const [filtered, setfiltered] = useState(null);

  const fetchAPI = () => {
    fetch("https://6cw4vl6ty7.execute-api.ap-northeast-1.amazonaws.com/dev")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.body.data);
        setUser(data.body.data);
      })
      .catch((err) => err);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  const handleSearch = (e) => {
    let save = e.target.value;
    console.log(save);
    let filterCamera = user.find((val) => {
      if (val && val.CameraType) {
        return save == val.CameraType;
      }
    });
    console.log(filterCamera);
    if (filterCamera && filterCamera.CameraType) {
      setfiltered(filterCamera.CameraType);
    }
  };
  console.log(filtered);

  let data = user.map((item) => {
    if (filtered && filtered === item.CameraType) {
      return (
        <tr>
          <td>{item.DeviceID}</td>
          <td>{item.LastActivityTime}</td>
          <td>{item.tags}</td>
          <td>{item.CameraType}</td>
          <td>{item.UserID}</td>
          <td>{item.SnapshotSignedUrl}</td>
        </tr>
      );
    } else {
      if (!filtered) {
        return (
          <tr>
            <td>{item.DeviceID}</td>
            <td>{item.LastActivityTime}</td>
            <td>{item.tags}</td>
            <td>{item.CameraType}</td>
            <td>{item.UserID}</td>
            <td>{item.SnapshotSignedUrl}</td>
          </tr>
        );
      }
    }
  });

  return (
    <>
      <div>
        <input type="search" onChange={(e) => { handleSearch(e); }} />
        <table>
          <thead>
            <tr>
              <th>DeviceID</th>
              <th>Last Activity Time</th>
              <th>Tags</th>
              <th>Camera Type</th>
              <th>UserID</th>
              <th>SnapshotSignedUrl</th>
            </tr>
          </thead>
          <tbody>{data}</tbody>
        </table>
      </div>
    </>
  );
}

export default App;
