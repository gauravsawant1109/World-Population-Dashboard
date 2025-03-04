import { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend
} from "recharts";

function App() {
  const [totalPopulation, setTotalPopulation] = useState(null);
  const [totalCountry, setTotalCountry] = useState(null);
  const [AvgPopulation, setAvgPopulation] = useState(null);
  const [Top10Country, setTop10Country] = useState([]);
  const [TotalLanguage, setTotalLanguage] = useState(null);
  const [RadarChartData, setRadarChartData] = useState([]);
  const [CountryGNP, setCountryGNP] = useState([]);

  const COLORS = [
    "#0088FE", "#00C49F", "#FFBB28", "#FF8042", 
    "#A28DD3", "#FF4567", "#9ACD32", "#DC143C", 
    "#8A2BE2", "#FFD700"
  ];

  useEffect(() => {
    async function fetchData() {
      try {
        axios.get("http://localhost:5000/TotalPop")
          .then((res) => setTotalPopulation(res.data.TotalPopulation));
        axios.get("http://localhost:5000/TotalCountry")
          .then((res) => setTotalCountry(res.data.TotalCountry));
        axios.get("http://localhost:5000/AvgPop")
          .then((res) => setAvgPopulation(res.data.AveragePopulation));
        axios.get("http://localhost:5000/Top10PopCountry")
          .then((res) => setTop10Country(res.data.Top10PopCountry));
        axios.get("http://localhost:5000/TotalLanguage")
          .then((res) => setTotalLanguage(res.data.TotalLanguage));
        axios.get("http://localhost:5000/CountryArea")
          .then((res) => setRadarChartData(res.data.CountryArea));
        axios.get("http://localhost:5000/CountryGNP")
          .then((res) => setCountryGNP(res.data.CountryGNP));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      {/* Cards */}
      <div className="container-fluid  py-4" style={{height:"100vh"}}>
        <div className="row text-center mb-4">
          <div className="col-md-3">
            <div className="p-3 shadow bg-white rounded">
              <p className="fw-bold">World Population</p>
              <h3 className="text-primary">{totalPopulation}</h3>
            </div>
          </div>
          <div className="col-md-3">
            <div className="p-3 shadow bg-white rounded">
              <p className="fw-bold">Total Countries</p>
              <h3 className="text-success">{totalCountry}</h3>
            </div>
          </div>
          <div className="col-md-3">
            <div className="p-3 shadow bg-white rounded">
              <p className="fw-bold">Average Population</p>
              <h3 className="text-danger">{AvgPopulation}</h3>
            </div>
          </div>
          <div className="col-md-3">
            <div className="p-3 shadow bg-white rounded">
              <p className="fw-bold">Total Languages</p>
              <h3 className="text-warning">{TotalLanguage}</h3>
            </div>
          </div>
        </div>

        {/* Radar Chart */}
     <div className="row p-5">
     <div className="col-6 text-center">
        <p className="fw-bold">Top 10 Countries of Largest Surface Area</p>
       <ResponsiveContainer width="100%" height={400}>
          <RadarChart outerRadius={150} data={RadarChartData}>
            <PolarGrid />
            <PolarAngleAxis dataKey="CountryName" />
            <PolarRadiusAxis />
            <Tooltip />
            <Radar
              name="Surface Area"
              dataKey="Area"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
       </div>
<div className="col-6 text-center">
<p className=" fw-bold">Top 10 Countries of Gross National Products </p>
        {/* Pie Chart */}
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={CountryGNP}
              dataKey="GNP"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={150}
              fill="#8884d8"
              label
            >
              {CountryGNP.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>

</div>
     </div>
        {/* Table */}
        {/* <table className="m-auto">
          <fieldset className="p-3 border rounded bg-white shadow">
            <legend className="text-center fw-bold text-primary">
              Top 10 Largest Country By Population
            </legend>
            <table className="table table-bordered text-center table-hover table-striped">
              <thead className="table-dark">
                <tr>
                  <th>Country Name</th>
                  <th>Population</th>
                  <th>Country Language</th>
                  <th>Continent</th>
                  <th>Country Code</th>
                </tr>
              </thead>
              <tbody>
                {Top10Country.map((country, index) => (
                  <tr key={index}>
                    <td>{country.name}</td>
                    <td>{country.Population}</td>
                    <td>{country.CountryLanguage}</td>
                    <td>{country.Continent}</td>
                    <td>{country.CountryCode}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </fieldset>
        </table> */}
      </div>

      
    </>
  );
}

export default App;
