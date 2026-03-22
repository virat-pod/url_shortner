"use client";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { deleteUrl } from "@/lib/actions/links";

const generateLink = () => {
  const [url, seturl] = useState("");
  const [shortUrl, setshortUrl] = useState("");
  const [links, setlinks] = useState([]);

  useEffect(() => {
    getLinks();
  }, []);

  const getLinks = async () => {
    try {
      const data = await fetch("/api/generate");
      const res = await data.json();
      if (!res.success) return;
      setlinks(res.data);
    } catch (err) {
      toast.error(err);
    }
  };

  const reset = () => {
    seturl("");
    setshortUrl("");
  };

  const generate = async () => {
    const data = {
      url,
      shortUrl,
    };

    const post = fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        toast(`success: ${data.success}; report: ${data.message}`);
        data.success && setlinks((prev) => [...prev, data.data]);
      });
    reset();
  };

  const DeleteLink = async (shortUrl) => {
    const deleteThat = await deleteUrl(shortUrl);
    if (deleteThat.success) {
      toast.success("Deleted");
      setlinks((prev) => prev.filter((l) => l.shortUrl !== shortUrl));
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center px-3 items-center py-18 gap-4">
        <div className="bitlinks flex flex-col w-full max-w-xl gap-4 bg-purple-200 p-4 rounded-lg">
          <h1 className="font-oswald text-2xl font-medium">
            Generate your short URLs
          </h1>
          <div className="make-link flex flex-col gap-2">
            <input
              value={url}
              onChange={(e) => {
                seturl(e.target.value);
              }}
              className="bg-white outline-purple-500 p-2 px-3 rounded-sm"
              placeholder="enter your url"
              type="text"
            />
            <input
              value={shortUrl}
              onChange={(e) => {
                setshortUrl(e.target.value);
              }}
              className="bg-white outline-purple-500 p-2 px-3 rounded-sm"
              placeholder="enter your preffered short URL text"
              type="text"
            />
          </div>
          <button
            disabled={!shortUrl || !url}
            onClick={() => {
              generate();
            }}
            className="cursor-pointer bg-purple-500 p-2 rounded-lg text-white text-lg font-medium"
          >
            Generate
          </button>
        </div>
        <div className="showResult flex flex-col w-full max-w-xl overflow-y-auto gap-3 bg-purple-100 rounded-lg p-2">
          <h1 className="text-start text-xl font-medium">Your URL's</h1>
          <div className="flex flex-col gap-3 overflow-y-auto max-h-[14rem] py-2">
            {links &&
              links.map((data, i) => {
                return (
                  <div
                    key={data.shortUrl}
                    className="allUrls flex items-center border-b border-b-purple-300 pb-2 justify-between"
                  >
                    <p
                      onClick={() => {
                        window.open(data.url, "_blank");
                      }}
                      className="cursor-pointer text-[0.9rem] font-mono"
                    >{`${process.env.NEXT_PUBLIC_BASE_URL}/${data.shortUrl}`}</p>
                    <button
                      onClick={() => {
                        DeleteLink(data.shortUrl);
                      }}
                      className="material-symbols-outlined !text-xl text-red-500 rounded-full cursor-pointer"
                    >
                      delete
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default generateLink;
