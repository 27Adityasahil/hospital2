type Props = {
  department: string;
};

const FacilitiesTab: React.FC<Props> = ({ department }) => {
  return (
    <ul className="list-disc pl-5 space-y-2">
      <li>Advanced equipment for {department}</li>
      <li>Specialist medical staff</li>
      <li>Private consultation and recovery rooms</li>
    </ul>
  );
};

export default FacilitiesTab;
