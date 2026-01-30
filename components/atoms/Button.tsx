type Props = {
  text: string;
  onClick: () => void;
  active?: boolean;
};

export default function Button({ text, onClick, active }: Props) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-xl text-sm font-medium ${
        active ? "bg-black text-white" : "bg-gray-200 hover:bg-gray-300"
      }`}
    >
      {text}
    </button>
  );
}
