import React from "react";
import step4 from "../../../assets/img/step4.png";
import tick from "../../../assets/img/tick.png";
import FNCard from "../../../components/UIComponents/Panel/FNCard/FNCard";

const SuccessMessage: React.FC = () => {
  return (
   
    <div className="sm:col-12 md:col-6  ">
        <div className='align-items-center flex h-screen justify-content-center'>
        
        <div>
        <h2 className="text-center">registartion Completed</h2>

        <img className=" mb-5 md:block hidden" src={tick}  />

        <p className='font-bold p-3'>
        registartion process completed successfully !..registartion process completed successfully !..
        </p>
       <img className="w-20rem mb-5 md:hidden" src={step4}  />
      
      
       </div>
       
       
        </div>
        
       </div>
  );
};

export default SuccessMessage;
