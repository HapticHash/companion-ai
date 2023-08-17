import { Avatar, AvatarImage } from "./ui/avatar";

interface BotAvatarProps {
  src: string;
}

export const BotAvatar = ({ src }: BotAvatarProps) => {
  return (
    <Avatar>
      <AvatarImage className="h-12 w-12" src={src} />
    </Avatar>
  );
};
