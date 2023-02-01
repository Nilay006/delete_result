import Row from "./Row";
import './App.css';
import { useState } from "react";

function App() {

  const [nilay,setData] = useState ([
    {name: "Nilay" , s1:89 , s2:78 , s3:85 , s4:75 , s5:82 },
    {name: "Ankesh" , s1:98 , s2:87 , s3:85 , s4:78 , s5:96},
    {name: "Kumar" , s1:89 , s2:78 , s3:85 , s4:75 , s5:82},
    {name: "Vishal" , s1:86 , s2:76 , s3:94 , s4:73 , s5:76},
    {name: "Milan" , s1:89 , s2:78 , s3:85 , s4:75 , s5:82},
  ]);

  const deleteHeandler =(index) => {
    let CopyData = [...nilay]
    CopyData.splice(index,1)
    setData(CopyData)
  }


  return (
    <div>
      <div className='main'>
        <div className='main-container'>
          <table>
                  {/* heading */}
            <tr className='table-first-row'>
              <th className='table-heading' colSpan="7">
                <h1>Creative School</h1>
                <p>327-334 3rd Floor Laxmi Enclave, opp. Gajera School, Katargam, Surat, Gujarat 395004</p>
                </th>
            </tr>
                
                      {/* table data */}
            <tr>
              <th>Student Name</th>
              <th>Gujarati</th>
              <th>Hindi</th>
              <th>English</th>
              <th>Science</th>
              <th>Math</th>
              <th>Delete</th>
            </tr>

                  {/* No 1 */}
            {nilay.map((nil, i) => {
              return(
                <tr>
                    <Row name={nil.name} s1={nil.s1} s2={nil.s2} s3={nil.s3} s4={nil.s4} s5={nil.s5} s6={nil.s6}  />
                    <td><button onClick={() => deleteHeandler(i) }> Delete </button></td>
                </tr>
              );
            })}
                
          </table>
        
        </div>
      </div>
    </div>
  );
}

export default App;
