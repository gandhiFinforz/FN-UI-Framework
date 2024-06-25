
import { useTranslation } from "react-i18next";
import React from "react";

const Dashboard: React.FC = () => {
  const { t } = useTranslation();
  const data = [
    { icon: 'pi pi-wallet', title: 'All Earnings', value: '$3000', change: '30.6%', positive: true },
    { icon: 'pi pi-eye', title: 'Page Views', value: '290+', change: '30.6%', positive: true },
    { icon: 'pi pi-calendar', title: 'Total Tasks', value: '1,568', change: '30.6%', positive: true },
    { icon: 'pi pi-download', title: 'Download', value: '$200', change: '30.6%', positive: false }
  ];

  return (
    <div style={{ height: '100%', padding: '1rem', fontFamily: 'Arial, sans-serif' }}>
      <div className="flex justify-content-around align-content-center p-mt-3">
        {data.map((item, index) => (
          <div key={index} className="p-col-12 p-md-6 p-lg-3 flex">
            <div
              className="p-shadow-3 p-p-3 p-d-flex p-flex-column p-jc-center p-ai-center p-6"
              style={{
                backgroundColor: '#fff',
                borderRadius: '8px',
                textAlign: 'center',
                border: '1px solid #ddd',
                width: '100%'
              }}
            >
              <div className={`pi ${item.icon}`} style={{ fontSize: '2rem', marginBottom: '0.5rem', color: item.positive ? '#28a745' : '#dc3545' }}></div>
              <h3 style={{ margin: '0.5rem 0' }}>{item.title}</h3>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{item.value}</div>
              <div style={{ color: item.positive ? '#28a745' : '#dc3545' }}>{item.change}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

