import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const mathMarksData = [
  { id: 1, name: "Rahim", math: 55 },
  { id: 2, name: "Karim", math: 60 },
  { id: 3, name: "Ayesha", math: 58 },
  { id: 4, name: "Tanvir", math: 65 },
  { id: 5, name: "Nabila", math: 70 },
  { id: 6, name: "Fahim", math: 68 },
  { id: 7, name: "Sadia", math: 75 },
  { id: 8, name: "Arif", math: 80 },
  { id: 9, name: "Rifat", math: 78 },
  { id: 10, name: "Mim", math: 85 }
];

const LineChartComponent = () => {
  return (
    <div>
      <LineChart width={600} height={400} data={mathMarksData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="math" stroke="black" />
      </LineChart>
    </div>
  );
};

export default LineChartComponent;
