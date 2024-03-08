import Image from "next/image";
import { localAPI as api } from "@/api";
import { type FCProps, ITeamMember } from "@/types";

export const Team: FCProps = () => {
  const { data: members } = api.getTeamMemberData();

  return (
    <section className="flex flex-col gap-6 bg-white rounded-lg p-6 pb-10">
      <h1 className="font-semibold text-2xl">Team</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu
        nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium
        quam. Facilisis purus convallis quam augue.
      </p>
      {members && (
        <ul className="flex flex-col gap-4">
          {members.map(({ id, name, image, description, designation }) => (
            <Member
              key={id}
              name={name}
              image={image}
              description={description}
              designation={designation}
            />
          ))}
        </ul>
      )}
    </section>
  );
};

const Member: FCProps<Omit<ITeamMember[number], "id">> = ({
  name,
  image,
  description,
  designation,
}) => (
  <div className="flex flex-col md:flex-row ustify-between items-center bg-blue-base rounded-lg p-3">
    <div className="h-full flex flex-col justify-center items-center mx-3">
      <Image
        src={image}
        alt={name}
        height={95}
        width={95}
        className="rounded-lg mb-2"
      />
      <h1 className="font-medium">{name}</h1>
      <p className="text-xs font-medium text-grey">{designation}</p>
    </div>
    <p className="text-sm p-6 pl-2 w-5/6">{description}</p>
  </div>
);
