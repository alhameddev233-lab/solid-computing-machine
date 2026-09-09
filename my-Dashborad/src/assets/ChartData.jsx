export const dataLine = {
  labels: ["January ", "February", "March", "April", "May", "Jun", "July"],
  datasets: [
    {
      label: "Sales",
      data: [65, 59, 80, 81, 56, 55, 60],
      fill: false,
      backgroundColor: "rgba(153,102,255,0.2)",
      borderColor: "rgba(153,102,225,1)",
    },
  ],
};
export const dataBar = {
  labels: ["Product A", "Product B", "Product C", "Product D"],
  datasets: [
    {
      label: "Quantity",
      data: [52, 49, 93, 65],
      backgroundColor: "rgba(153,102,255,0.2)",
      borderColor: "rgba(153,102,225,1)",
      borderWidth: 1,
    },
  ],
};

export default dataLine;
