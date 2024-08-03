interface WelcomeCardProps {}

const WelcomeCard: React.FC<WelcomeCardProps> = () => {
  return (
    <div className="flex items-center gap-4 p-5 bg-[#3a5686] rounded-2xl w-full">
      <img
        src="https://images.alphacoders.com/469/469658.jpg"
        className="size-10 rounded-full outline outline-white"
      />
      <p className="text-white text-2xl">
        Welcome Back, <span className="font-semibold">Akshat Nigam</span>
      </p>
    </div>
  );
};

export default WelcomeCard;
