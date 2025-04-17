interface BackdropProps {
  isVisible: boolean;
  onClick: () => void;
}

export const Backdrop = ({ isVisible, onClick }: BackdropProps) => {
  return (
    <div
      className={`fixed inset-0 bg-gray-900/50 backdrop-blur-sm transition-opacity duration-200 lg:hidden ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={onClick}
    />
  );
};
