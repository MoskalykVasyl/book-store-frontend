import { useGetAuthorById } from "@/features/useGetAuthorById";

interface AuthorItemProps {
    authorId: string;
}

export const defaultImageUrl = 'https://www.kindpng.com/picc/m/421-4212275_transparent-default-avatar-png-avatar-img-png-download.png';

export const AuthorItem = ({ authorId }: AuthorItemProps) => {
  const { data } = useGetAuthorById(authorId);
  if (!data) return null;
  const {firstName, lastName, imageUrl} = data;
  return (
    <div className="flex items-center gap-2">
        <img
          src={imageUrl ? imageUrl: defaultImageUrl}
          alt={`${firstName} ${lastName}`}
          className="w-10 h-10 rounded-full object-cover"
        />
      <div>
        <h3 className="font-semibold">{firstName} {lastName}</h3>
      </div>
    </div>
  )
}
