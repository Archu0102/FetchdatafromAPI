import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
// import "./style.css";
const FetchApiData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    userData();
  }, []);

  const userData = () => {
    axios.get("https://reqres.in/api/users?page=2").then((response) => {
      const mydata = response.data;
      // console.log('mydata',mydata)
      // console.log('mydata',mydata.data)
      setUsers(mydata.data);
    });
  };
  return (
    <>
      Search here
      <input type="text" placeholder="Search by name" />
      <section style={{ display: "flex", flexWrap: "wrap" }}>
        {users.length > 0 &&
          users.map((it, index) => (
            <>
              <div>
                <div
                  style={{
                    padding: "20px",
                    border: "2px  solid black",
                    borderRadius: "40px",
                    margin: "40px",
                  }}
                >
                  <h4
                    key={index}
                    style={{
                      height: "25px",
                      width: "25px",
                      background: "black",
                      color: "white",
                      borderRadius: "30px",
                      textAlign: "center",
                      float:"right",
                      marginTop:"-30px",
                    }}
                  >
                    {it.id}
                  </h4>
                  <img
                    src={it.avatar}
                    alt="image"
                    style={{
                      padding: " 0px 0px 0px 0px",
                      borderRadius: "40px",
                      height:"200px",
                      width:"200px"
                    }}
                  />
                </div>
                <h3 key={it.id} style={{ paddingLeft: "150px" }}>
                  {it.first_name}
                </h3>
              </div>
            </>
          ))}
      </section>
    </>
  );
};

export default FetchApiData;
