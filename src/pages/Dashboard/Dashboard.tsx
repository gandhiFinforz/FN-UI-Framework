import React from "react";
import { useTranslation } from "react-i18next";
import "primeflex/primeflex.css";
import FNCard from "../../components/Panel/FNCard/FNCard";

const Dashboard: React.FC = () => {

  const stepsModel = [
    { label: 'Step 1', icon: 'pi pi-user' },
    { label: 'Step 2', icon: 'pi pi-briefcase', command: () => console.log('Step 2 clicked') },
    { label: 'Step 3', icon: 'pi pi-check' },
  ];

  const { t } = useTranslation();
  const data = [
    {
      icon: "pi pi-wallet",
      title: "All Earnings",
      value: "$3000",
      change: "30.6%",
      positive: true,
      description: "Total earnings for this month",
    },
    {
      icon: "pi pi-eye",
      title: "Page Views",
      value: "290+",
      change: "30.6%",
      positive: true,
      description: "Total page views for this month",
    },
    {
      icon: "pi pi-calendar",
      title: "Total Tasks",
      value: "1,568",
      change: "30.6%",
      positive: true,
      description: "Tasks completed this month",
    },
    {
      icon: "pi pi-download",
      title: "Downloads",
      value: "$200",
      change: "30.6%",
      positive: false,
      description: "Number of downloads",
    },
    {
      icon: "pi pi-users",
      title: "New Users",
      value: "123",
      change: "15.8%",
      positive: true,
      description: "New users registered",
    },
    {
      icon: "pi pi-comments",
      title: "Comments",
      value: "45",
      change: "10%",
      positive: true,
      description: "Comments received",
    },
    {
      icon: "pi pi-share-alt",
      title: "Shares",
      value: "89",
      change: "5.2%",
      positive: false,
      description: "Content shares",
    },
    {
      icon: "pi pi-chart-line",
      title: "Growth",
      value: "12%",
      change: "3.4%",
      positive: true,
      description: "Growth rate",
    },
  ];

  return (
    <div className="grid">
      {data.map((item, index) => (
        <div key={index} className="col-3">
          <FNCard>
            <div className="flex flex-column align-items-center gap-1">
              <div
                className={`pi ${item.icon} text-4xl text-primary-600`}
              ></div>
              <h3 className="m-0 text-xl">{t(item.title)}</h3>
              <div className="m-0 font-bold text-2xl">
                {item.value}{" "}
                <span
                  className={`text-sm ${item.positive ? "text-green-500" : "text-red-600"}`}
                >
                  {item.change} {item.positive ? "▲" : "▼"}
                </span>
              </div>

              <p className="m-0 text-sm ">{t(item.description)}</p>
            </div>
          </FNCard>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
