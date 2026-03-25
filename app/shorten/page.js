"use client";
import { useState, useEffect, useContext } from "react";
import { deleteUrl } from "@/lib/actions/links";
import { ServiceContext } from "@/lib/contexts/serviceContext";

const generateLink = () => {
  const [url, seturl] = useState("");
  const [shortUrl, setshortUrl] = useState("");
  const [links, setlinks] = useState([]);
  const { showNotifications } = useContext(ServiceContext);

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
      showNotifications(err, "error");
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
        data.success && setlinks((prev) => [...prev, data.data]);
      });
    reset();
  };

  const DeleteLink = async (shortUrl) => {
    const deleteThat = await deleteUrl(shortUrl);
    if (deleteThat.success) {
      showNotifications("Deleted");
      setlinks((prev) => prev.filter((l) => l.shortUrl !== shortUrl));
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center px-4 items-center pt-6.5 gap-2">
        <div className="w-full max-w-[480px] bg-white border border-zinc-200 rounded-2xl overflow-hidden">
          <div className="px-6 py-5 border-b border-zinc-100">
            <h2 className="font-oswald text-xl font-semibold text-zinc-900">
              Generate short URL
            </h2>
            <p className="text-xs text-zinc-400 mt-0.5">
              Paste a long link, pick a slug
            </p>
          </div>
          <div className="px-6 py-5 flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-medium text-zinc-400 uppercase tracking-wide">
                Destination URL
              </label>
              <input
                value={url}
                onChange={(e) => seturl(e.target.value)}
                className="bg-zinc-50 border border-zinc-200 rounded-lg px-3.5 py-2.5 text-sm text-zinc-900 outline-none focus:border-purple-500 focus:bg-white transition-colors placeholder:text-zinc-400"
                placeholder="https://your-very-long-url.com/goes/here"
                type="text"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-medium text-zinc-400 uppercase tracking-wide">
                Custom slug
              </label>
              <div className="flex items-center bg-zinc-50 border border-zinc-200 rounded-lg overflow-hidden focus-within:border-purple-500 focus-within:bg-white transition-colors">
                <span className="px-3.5 py-2.5 text-xs text-zinc-400 font-mono border-r border-zinc-200 bg-zinc-100 whitespace-nowrap">
                  url-shortiners/
                </span>
                <input
                  value={shortUrl}
                  onChange={(e) => setshortUrl(e.target.value)}
                  className="flex-1 bg-transparent px-3.5 py-2.5 text-sm font-mono text-zinc-900 outline-none placeholder:text-zinc-400"
                  placeholder="my-link"
                  type="text"
                />
              </div>
            </div>

            <button
              disabled={!shortUrl || !url}
              onClick={generate}
              className="mt-1 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-300 disabled:cursor-not-allowed text-white font-medium text-sm py-2.5 rounded-lg transition-colors cursor-pointer"
            >
              Generate
            </button>
          </div>
        </div>

        <div className="w-full max-w-[480px] bg-white border border-zinc-200 rounded-2xl overflow-hidden">
          <div className="px-6 py-4 border-b border-zinc-100 flex items-center justify-between">
            <h2 className="font-oswald text-lg font-semibold text-zinc-900">
              Your URLs
            </h2>
            <span className="text-[11px] font-medium bg-purple-50 text-purple-600 border border-purple-100 px-2.5 py-0.5 rounded-full">
              {links?.length || 0} links
            </span>
          </div>

          <div className="flex flex-col max-h-56 overflow-y-auto">
            {!links?.length ? (
              <p className="text-center text-sm text-zinc-400 py-8">
                No links yet — generate one above
              </p>
            ) : (
              links.map((data) => (
                <div
                  key={data.shortUrl}
                  className="flex items-center justify-between gap-3 px-6 py-3 border-b border-zinc-50 hover:bg-zinc-50 transition-colors last:border-none"
                >
                  <div className="flex flex-col gap-0.5 min-w-0">
                    <span
                      onClick={() => window.open(data.url, "_blank")}
                      className="font-mono text-sm text-purple-600 cursor-pointer hover:underline truncate"
                    >
                      {`${process.env.NEXT_PUBLIC_BASE_URL}/${data.shortUrl}`}
                    </span>
                    <span className="text-[11px] text-zinc-400 truncate max-w-xs">
                      {data.url}
                    </span>
                  </div>
                  <div className="flex gap-1.5 shrink-0">
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(
                          `${process.env.NEXT_PUBLIC_BASE_URL}/${data.shortUrl}`,
                        );
                        showNotifications("Copied");
                      }}
                      className="w-7 h-7 rounded-md border border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-500 text-xs flex items-center justify-center cursor-pointer transition-colors"
                      title="Copy"
                    >
                      ⎘
                    </button>
                    <button
                      onClick={() => DeleteLink(data.shortUrl)}
                      className="w-7 h-7 rounded-md border border-red-100 bg-white hover:bg-red-50 text-red-400 text-xs flex items-center justify-center cursor-pointer transition-colors"
                      title="Delete"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default generateLink;
