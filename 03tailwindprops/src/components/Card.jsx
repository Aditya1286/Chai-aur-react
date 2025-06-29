
function Card({username}) {
  return (
    <>
      <div className="max-w-xs rounded-md shadow-md bg-black text-gray-100 mb-10">
        <img
          src="https://imgs.search.brave.com/M00m0zcIS0lnzuhZbJTI6QWNsfhyK-SYpUHoZ57fMOk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9z/bWlsaW5nLXRlYWNo/ZXItY2xhc3Nyb29t/XzIzLTIxNTE5ODM0/NDkuanBnP3NlbXQ9/YWlzX2h5YnJpZCZ3/PTc0MA"
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">{username || lorems}</h2>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum
              soluta amet corporis accusantium aliquid consectetur eaque!
            </p>
          </div>
          <button
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200"
          >
            Read more
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
