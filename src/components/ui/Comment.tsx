interface CommentProps {
  author: string;
  text: string;
  logoUrl: string;
}

const Comment = ({ author, text, logoUrl }: CommentProps) => {
  return (
    <div className="flex flex-row items-start rounded-md shadow-md py-2 px-4 bg-dark_blue">
      <img className="w-12 h-12 rounded-full object-cover mr-4" src={logoUrl} alt={author} />
      <div className="text-gray-700 text-base font-medium">
        <p className="mb-2 font-bold">{author}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
