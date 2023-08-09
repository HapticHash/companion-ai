import { UserButton } from "@clerk/nextjs";

const RootPage = () => {
  return (
    <div className="">
      Root Page (Protected)
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default RootPage;
