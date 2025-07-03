type Doctor = {
  name: string;
  title: string;
  image: string;
};

type Props = {
  department: string;
};

// Replace with API or real data
const doctorsData: Record<string, Doctor[]> = {
  Gastroenterology: [
    {
      name: 'Dr. Raj Malhotra',
      title: 'Senior Gastroenterologist',
      image: '/doctors/raj.jpg',
    },
    {
      name: 'Dr. Sneha Verma',
      title: 'Consultant Gastroenterologist',
      image: '/doctors/sneha.jpg',
    },
  ],
  Neurology: [
    {
      name: 'Dr. Meera Kapoor',
      title: 'Consultant Neurologist',
      image: '/doctors/meera.jpg',
    },
  ],
};

const DoctorsTab: React.FC<Props> = ({ department }) => {
  const doctors = doctorsData[department] || [];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {doctors.length > 0 ? (
        doctors.map((doc, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded shadow hover:shadow-md transition"
          >
            <img
              src={doc.image}
              alt={doc.name}
              className="w-full h-60 object-cover rounded mb-4"
            />
            <h3 className="text-xl font-semibold">{doc.name}</h3>
            <p className="text-gray-600">{doc.title}</p>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No doctors listed for this department.</p>
      )}
    </div>
  );
};

export default DoctorsTab;
