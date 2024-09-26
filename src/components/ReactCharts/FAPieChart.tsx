import { PieChart, Pie} from 'recharts';

const FAPieChart = () => {
    const data = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
        { name: 'Group E', value: 278 },
        { name: 'Group F', value: 189 },
    ];


    return (
        // <ResponsiveContainer width="100%" height="100%" className="bg-red-500">
            <PieChart width={400} height={300}>
                <Pie
                    dataKey="value"
                    startAngle={180}
                    endAngle={0}
                    data={data}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label
                />
            </PieChart>
        // </ResponsiveContainer>
    );
};

export default FAPieChart;