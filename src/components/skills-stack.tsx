import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
  ResponsiveContainer
} from "recharts";
import { Skills } from "./skills";

const data = [
  {
    name: ".NET",
    exp: 5.1
  },
  {
    name: "Angular",
    exp: 3
  },
  {
    name: "React",
    exp: 2.5
  },
  {
    name: "SQL",
    exp: 4
  },
  {
    name: "Node",
    exp: 1.5
  },
  {
    name: ".NETCore",
    exp: 2
  },
  {
    name: "Mongo DB",
    exp: 0.6
  }
];

const renderCustomizedLabel = (props: any) => {
  const { x, y, width, height, value } = props;
  const radius = 15;

  return (
    <g>
      <circle cx={x + width / 2} cy={y - radius} r={radius} fill="#8884d8" />
      <text
        x={x + width / 2}
        y={y - radius}
        fill="#fff"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {value}
      </text>
    </g>
  );
};

export default class SkillsStack extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/a5Leskck/";

  render() {
    return (
      <div className="section-child technology-stack">
        <div className="row">
          <div className="col-sm-1"></div>
          <div className="col-sm-2">
            <h2 className="underline">Skills</h2>
          </div>
          <div className="col-sm-8 content width-100">
            <ResponsiveContainer height={300}>
              <BarChart
                width={1000}
                height={300}
                data={data}
                margin={{
                  top: 5,
                  right: 40,
                  left: 0,
                  bottom: 5
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                {
                  // @ts-ignore
                  <YAxis />
                }
                <Tooltip />
                <Legend />

                <Bar dataKey="exp" fill="#82ca9d" minPointSize={10}>
                  {" "}
                  <LabelList dataKey="exp" content={renderCustomizedLabel} />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="col-sm-1"></div>
        </div>
        <Skills />
      </div>
    );
  }
}
