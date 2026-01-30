import Button from "../atoms/Button";
type Props = {
  chartType: string;
  setChartType: (value: string) => void;
};

export default function ChartToggle({ chartType, setChartType }: Props) {

  return (
    <div className="flex gap-3 mb-6">
      <Button
        text="Bar Chart"
        onClick={() => setChartType("bar")}
        active={chartType === "bar"}
      />

      <Button
        text="Line Chart"
        onClick={() => setChartType("line")}
        active={chartType === "line"}
      />
    </div>
  );
}

