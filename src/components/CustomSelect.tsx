import * as Select from "@radix-ui/react-select";

interface CustomSelectProps {
  label: string;
  value: string;
  options: { value: string; label: string; className: string }[];
  onValueChange: (value: string) => void;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  label,
  value,
  options,
  onValueChange,
}) => {
  return (
    <div>
      <label className="block mb-2 font-medium text-gray-700">{label} :</label>
      <Select.Root onValueChange={onValueChange} value={value}>
        <Select.Trigger className="inline-flex items-center justify-between px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none">
          {label}: {value}
        </Select.Trigger>
        <Select.Content>
          {options.map((option) => (
            <Select.Item
              key={option.value}
              value={option.value}
              className={`${option.className} px-4 py-2 hover:bg-gray-200`}
            >
              {option.label}
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Root>
    </div>
  );
};

export default CustomSelect;
