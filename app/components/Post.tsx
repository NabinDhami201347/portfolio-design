const Post = () => {
  return (
    <div className="grid grid-cols-5 gap-6 h-[calc(100vh-3.5rem)] w-11/12 mx-auto py-6">
      <div className="bg-green-500 hidden md:grid md:col-span-2 h-[calc(100vh-7rem)]"></div>
      <div className="bg-yellow-500 col-span-5 md:col-span-3 h-[calc(100vh-7rem)]"></div>
    </div>
  );
};

export default Post;
