// import React, { useState } from "react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
// } from "recharts";
// import OpenAI from "openai";

// // Predefined sales data
// const data = [
//   { month: "Jan", sales: 400 },
//   { month: "Feb", sales: 300 },
//   { month: "Mar", sales: 500 },
//   { month: "Apr", sales: 200 },
//   { month: "May", sales: 450 },
//   { month: "Jun", sales: 350 },
//   { month: "Jul", sales: 490 },
//   { month: "Aug", sales: 700 },
//   { month: "Sep", sales: 340 },
//   { month: "Oct", sales: 690 },
//   { month: "Nov", sales: 770 },
//   { month: "Dec", sales: 430 },
// ];

// // OpenAI Configuration
// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
//   dangerouslyAllowBrowser: true, // Only use this for development/demo purposes
// });

// function App() {
//   const [chartData, setChartData] = useState(data);
//   const [query, setQuery] = useState("");
//   const [response, setResponse] = useState("");
//   const [loading, setLoading] = useState(false);

//   // Handle query submission and AI interaction
//   const handleQuerySubmit = async () => {
//     setLoading(true);
//     try {
//       const prompt = `
//         Given this sales data: ${JSON.stringify(data)},
//         respond to the user's query about months, total sales, or sales comparisons.
//         User query: ${query}
//         Return the appropriate filtered data or answer in JSON format.
//       `;

//       // Send query to OpenAI
//       const completion = await openai.chat.completions.create({
//         model: "gpt-3.5-turbo", // or "gpt-4" if you have access
//         messages: [{ role: "user", content: prompt }],
//         max_tokens: 150,
//       });

//       const aiResponse = completion.choices[0].message.content.trim();
//       const parsedResponse = JSON.parse(aiResponse);

//       // Process AI response: Check for type (range, total, comparison)
//       if (parsedResponse.type === "range") {
//         const newChartData = data.filter(
//           (d) =>
//             data.findIndex((item) => item.month === d.month) >=
//               data.findIndex((item) => item.month === parsedResponse.start) &&
//             data.findIndex((item) => item.month === d.month) <=
//               data.findIndex((item) => item.month === parsedResponse.end)
//         );
//         setChartData(newChartData);
//         setResponse(
//           `Showing sales between ${parsedResponse.start} and ${parsedResponse.end}`
//         );
//       } else if (parsedResponse.type === "total") {
//         const totalSales = data
//           .filter((d) => d.month === parsedResponse.month)
//           .reduce((acc, d) => acc + d.sales, 0);
//         setResponse(`Total sales in ${parsedResponse.month}: ${totalSales}`);
//         setChartData(data); // Reset chart to default
//       } else if (parsedResponse.type === "comparison") {
//         const newChartData = data.filter((d) =>
//           [parsedResponse.start, parsedResponse.end].includes(d.month)
//         );
//         setChartData(newChartData);
//         setResponse(
//           `Comparing sales between ${parsedResponse.start} and ${parsedResponse.end}`
//         );
//       } else {
//         setResponse("Sorry, I couldn't process your query. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error processing AI response:", error);
//       setResponse("Error processing the query. Please try again.");
//     }
//     setLoading(false);
//   };

//   return (
//     <div>
//       <h2>Sales Data</h2>

//       <LineChart width={600} height={300} data={chartData}>
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="month" />
//         <YAxis />
//         <Tooltip />
//         <Legend />
//         <Line
//           type="monotone"
//           dataKey="sales"
//           stroke="#8884d8"
//           isAnimationActive={true}
//         />
//       </LineChart>

//       <div style={{ marginTop: "20px" }}>
//         <input
//           type="text"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           placeholder="Ask about the data (e.g., 'sales between Jan and Apr')"
//           style={{ padding: "10px", width: "400px" }}
//         />
//         <button
//           onClick={handleQuerySubmit}
//           style={{ padding: "10px", marginLeft: "10px" }}
//         >
//           {loading ? "Processing..." : "Ask AI"}
//         </button>

//         <p style={{ marginTop: "20px", fontWeight: "bold" }}>{response}</p>
//       </div>
//     </div>
//   );
// }

// export default App;
// App.jsx

import SalesChart from "./components/SalesChart";

function App() {
  return (
    <div className="App">
      <div>
        <h1>Sales Data Visualization</h1>
        <SalesChart />
      </div>
    </div>
  );
}

export default App;

// components/SalesChart.jsx
