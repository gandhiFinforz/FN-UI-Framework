import React from "react";
import { useTranslation } from "react-i18next";
import "primeflex/primeflex.css";
import FNCard from "../../components/Panel/FNCard/FNCard";

const Dashboard: React.FC = () => {
  const { t } = useTranslation();
  const data = [
    { icon: 'pi pi-wallet', title: 'All Earnings', value: '$3000', change: '30.6%', positive: true, description: 'Total earnings for this month' },
    { icon: 'pi pi-eye', title: 'Page Views', value: '290+', change: '30.6%', positive: true, description: 'Total page views for this month' },
    { icon: 'pi pi-calendar', title: 'Total Tasks', value: '1,568', change: '30.6%', positive: true, description: 'Tasks completed this month' },
    { icon: 'pi pi-download', title: 'Downloads', value: '$200', change: '30.6%', positive: false, description: 'Number of downloads' },
    { icon: 'pi pi-users', title: 'New Users', value: '123', change: '15.8%', positive: true, description: 'New users registered' },
    { icon: 'pi pi-comments', title: 'Comments', value: '45', change: '10%', positive: true, description: 'Comments received' },
    { icon: 'pi pi-share-alt', title: 'Shares', value: '89', change: '5.2%', positive: false, description: 'Content shares' },
    { icon: 'pi pi-chart-line', title: 'Growth', value: '12%', change: '3.4%', positive: true, description: 'Growth rate' }
  ];

  return (
    <div style={{ height: '100%', padding: '1rem', fontFamily: 'Arial, sans-serif' }}>
      <div className="grid nogutter mt-3">
        {data.map((item, index) => (
          <div key={index} className="col-3">
            <FNCard title="">
            <div
              className="flex flex-column align-items-center"
            >
              <div className={`pi ${item.icon} text-4xl mb-2 text-primary-600`}></div>
              <h3 className="mx-0 my-2 ">{t(item.title)}</h3>
              <div className="mx-0 my-2 font-bold " >{item.value}</div>
              <div style={{ color: item.positive ? '#28a745' : '#dc3545' }}>
                {item.change} {item.positive ? '▲' : '▼'}
              </div>
              <p className="mx-0 my-2 font-bold text-base ">{t(item.description)}</p>
            </div>
            </FNCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
