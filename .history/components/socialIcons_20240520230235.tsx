import React from "react";

// Define the type for the props
interface SocialIconsProps {
  Icons: Array<{ name: string; link: string }>;
}

// Apply the type to the component
const SocialIcons: React.FC<SocialIconsProps> = ({ Icons }) => {
  return (
    <div className="text-teal-500">
      {Icons.map((icon) => (
        <a
          key={icon.name}
          href={icon.link}
          className="p-2 cursor-pointer inline-flex items-center
          rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
          duration-300"
        >
          <ion-icon name={icon.name}></ion-icon>
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
