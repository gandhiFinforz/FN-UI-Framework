// PhoneNumbers.tsx
import React, { useState, useEffect } from "react";
import { Sim } from "@jonz94/capacitor-sim";
import "primeflex/primeflex.css";
import FNDialog from "../../components/UIComponents/Panel/FNDialog/FNDialog";
import { t } from "i18next";
import { InputIcon } from "primereact/inputicon";

interface PhoneNumbersProps {
  onSelectNumber: (number: string) => void;
}

const PhoneNumbers: React.FC<PhoneNumbersProps> = ({ onSelectNumber }) => {
  const [numbers, setNumbers] = useState<any[]>([]);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    getSimCards();
  }, []);

  const getSimCards = async () => {
    try {
      const { simCards } = await Sim.getSimCards();
      if (simCards && simCards.length > 0) {
        setNumbers(simCards);
        setVisible(true);
      } else {
        setNumbers([]);
        setVisible(false);
      }
    } catch (error) {
      setVisible(false);
      setNumbers([]);
    }
  };

  const handleSelectNumber = (number: string) => {
    onSelectNumber(number);
    setVisible(false);
  };

  return (
    <>
      {visible && <FNDialog
        header="Continue With"
        content={
          <div className="mt-4">
            {numbers.map((simCard, index) => (
              <div key={index} className="mb-3">
                <InputIcon className="pi pi-phone mr-1" />{" "}
                <span
                  className="p-mr-2"
                  onClick={() => handleSelectNumber(simCard.number)}
                >
                  {simCard.number}
                </span>
              </div>
            ))}
          </div>
        }
        footerButtons={[
          {
            label: "NONE OF THE ABOVE",
            icon: "",
            className: "",
            onClick: () => setVisible(false),
          },
        ]}
        visible={visible}
        onHide={() => setVisible(false)}
        className="my-custom-dialog"
        parentClassName="text-left"
        style={{ width: "94%" }}
      />}
    </>
  );
};

export default PhoneNumbers;
